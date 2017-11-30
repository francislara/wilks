class Api::ChannelsController < ApplicationController
  def create
    @channel = Channel.new(channel_params)
    @channel.team_id = params[:team_id]

    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages, status: 401
    end

  end

  def show
    @channel = selected_channel
    render :show
  end

  def destroy
    @channel = selected_channel

    if @channel
      @channel.destroy
      render :show
    else
      render json: ['Could not locate channel'], status: 400
    end

  end

  def index
    @channels = Channel.where(team_id: params[:team_id])
    render :index
  end

  private

  def selected_channel
    Channel.find(params[:id])
  end

  def channel_params
    params.require(:channel).permit(:name, :description)
  end

end

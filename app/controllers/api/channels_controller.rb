class Api::ChannelsController < ApplicationController
  def create
    @channel = Channel.new(channel_params)

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
    teams = current_user.joined_teams.pluck(:team_id)
    @channels = Channel.where(team_id: teams)
    render :index
  end

  private

  def selected_channel
    Channel.find(params[:id])
  end

  def channel_params
    params.require(:channel).permit(:name, :description, :team_id)
  end

end

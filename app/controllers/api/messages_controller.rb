class Api::MessagesController < ApplicationController

  def create
    @message = Message.new(message_params)
    @message.author_id = current_user.id

    if @message.save
      render :show
    else
      render json: @message.errors.full_messages, status: 401
    end

  end

  def index
    teams = current_user.joined_teams.pluck(:team_id)
    channels = Channel.where(team_id: teams)
    @messages = Message.where(channel_id: channels)
    render :index
  end

  def show
    @message = Message.find(params[:id])
  end

  private

  def message_params
    params.require(:message).permit(:channel_id, :body, :author_id)
  end

end

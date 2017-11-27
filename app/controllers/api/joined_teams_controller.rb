class Api::JoinedTeamsController < ApplicationController
  
  def create
    @joined_team = JoinedTeam.new(
      user_id: current_user.id, 
      team_id: params[:team_id]
    )
    @team = Team.find(params[:team_id])

    if @joined_team.save
      render 'api/teams/show'
    else
      render json: @joined_team.errors.full_messages, status: 401
    end

  end

  def destroy
    @joined_team = JoinedTeam.where(
      user_id: current_user.id, 
      team_id: params[:team_id]
    )
    @team = Team.find(:team_id)

    if @joined_team
      @joined_team.destroy
      render 'api/teams/show'
    else
      render json: ['Could not locate team'], status: 400
    end

  end

  def index
    @joined_teams = current_user.joined_teams
  end

end

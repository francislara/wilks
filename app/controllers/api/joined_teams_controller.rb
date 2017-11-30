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
    @team = Team.find(params[:team_id])

    if @joined_team
      @joined_team.destroy_all
      render 'api/teams/show'
    else
      render json: ['Could not locate team'], status: 400
    end

  end

  def index
    joined_team_ids = current_user.joined_teams.pluck(:team_id)
    # @joined_teams = []
    @joined_teams = Team.where('id IN (?)', joined_team_ids)
    # joined_team_ids.each { |id| @joined_teams.push(Team.find(id)) }
    render :index
  end

end

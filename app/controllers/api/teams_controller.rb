class Api::TeamsController < ApplicationController

  def create
    @team = Team.new(team_params)
    @team.owner_id = current_user.id

    if @team.save
      render :show
    else
      render json: @team.errors.full_messages, status: 401
    end

  end

  def show
    @team = selected_team
    render :show
  end

  def update
    @team = selected_team

    if @team && @team.update_attributes(team_params)
      render :show
    elsif !@team
      render json: ['Could not locate team'], status: 400
    else
      render json: @team.errors.full_messages, status: 401
    end

  end

  def destroy
    @team = selected_team

    if @team
      @team.destroy
      render :show
    else
      render json: ['Could not locate team'], status: 400
    end
    
  end

  private

  def selected_team
    Team.find(params[:id])
  end

  def team_params
    params.require(:team).permit(:name, :description)
  end

  
end

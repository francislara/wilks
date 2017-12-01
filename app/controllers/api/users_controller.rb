class Api::UsersController < ApplicationController
  
  def create
    img_urls = [
      "https://res.cloudinary.com/lara-cloud1/image/upload/v1511690023/profile-picture-orange_topxdd.png",
      "https://res.cloudinary.com/lara-cloud1/image/upload/v1511690023/profile-picture-red_d5fbry.png",
      "https://res.cloudinary.com/lara-cloud1/image/upload/v1511690023/profile-picture-blue_qkpwvq.png",
      "https://res.cloudinary.com/lara-cloud1/image/upload/v1511690023/profile-picture-purple_v6pruy.png",
      "https://res.cloudinary.com/lara-cloud1/image/upload/v1511690023/profile-picture-green_lnyam8.png",
      "https://res.cloudinary.com/lara-cloud1/image/upload/v1511690024/profile-picture-teal_tyo6c4.png"
    ]
    
    @user = User.new(user_params)
    @user.img_url = img_urls[Random.rand(img_urls.length)]

    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end

  end

  def update
    @user = selected_user

    if @user && @user.update_attributes(user_params)
      render :show
    elsif !@user
      render json: ['Could not locate user'], status: 400
    else
      render json: @user.errors.full_messages, status: 401
    end

  end

  def show
    @user = selected_user
    render :show
  end

  def index
    teams = current_user.joined_teams.pluck(:team_id)
    @users = User.joins(:joined_teams).where(joined_teams: { team_id: teams })
  end

  def destroy
    @user = selected_user

    if @user
      @user.destroy
      render :show
    else
      render json: ['Could not locate user'], status: 400
    end
  end

  private

  def selected_user
    User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :email, :password, :img_url)
  end

end

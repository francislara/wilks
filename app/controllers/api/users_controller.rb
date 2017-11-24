class Api::UsersController < ApplicationController
  
  def create
    img_urls = [
      "http://res.cloudinary.com/lara-cloud1/image/upload/v1511559860/profile-picture-orange_rvncte.png",
      "http://res.cloudinary.com/lara-cloud1/image/upload/v1511559860/profile-picture-red_ehngvf.png",
      "http://res.cloudinary.com/lara-cloud1/image/upload/v1511559860/profile-picture-blue_tlay0m.png",
      "http://res.cloudinary.com/lara-cloud1/image/upload/v1511559860/profile-picture-purple_jzabh6.png",
      "http://res.cloudinary.com/lara-cloud1/image/upload/v1511559860/profile-picture-green_egclew.png",
      "http://res.cloudinary.com/lara-cloud1/image/upload/v1511559860/profile-picture-teal_oufxew.png"
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
    @users = User.all
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
    params.require(:user).permit(:username, :email, :password)
  end

end

require 'pry'
class UserController < ApplicationController

  def index
    render json: User.all
  end

  def new
    @user = User.new
  end

  def create 
    @user = User.new(user_params)
    @user.first_name = @user.first_name.capitalize
    @user.last_name = @user.last_name.capitalize
    if check_admin? && @user.save
      InterviewSetup.signup_email(@user).deliver
      redirect_to "/RegisterAdminSecretPage"
      flash[:notice] = 'Successfully Created User'
    else
    redirect_to "/RegisterAdminSecretPage" 
      flash[:notice] = @user.errors.full_messages
    end
  end

  def update
    user = User.find(params[:id])
      if user.update(user_params.reject{|_, v| v.blank?})
        render json: {status: 'ok'}
      else
        render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
      end
  end


  def destroy
    user = User.find(params[:id])
    if current_user.access_level == "super_admin"
      user.delete
    end
  end

  def interview
    @user = User.find(params[:user][:id])
    @company = User.find(params[:company][:id])
    InterviewSetup.interview_email(@user, @company).deliver
  end




  private

  def check_admin?
    current_user.access_level == "super_admin"
  end

  def user_params
    params.require(:user).permit(:id, :food, :books, :skills, :hobbies, :fav_book, :idol, :password, :first_name, :resume_url, :notes, :last_name, :access_level, :email, :phone, :zipcode, :linkedin, :college, :major, :college_graduation, :company, :graduated, :hired)
  end
end

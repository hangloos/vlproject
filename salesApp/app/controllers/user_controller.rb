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
    if check_admin? && @user.save
        redirect_to 'RegisterAdminSecretPage'
    else 
      flash[:notice] = @user.errors.full_messages
      redirect_to 'RegisterAdminSecretPage'
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
    params.require(:user).permit(:id, :password, :first_name, :resume_url, :notes, :last_name, :access_level, :email, :phone, :zipcode, :linkedin, :college, :major, :college_graduation, :company, :graduated, :hired)
  end
end

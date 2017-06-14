require 'pry'

class UserController < ApplicationController
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




  private

  def check_admin?
    current_user.access_level == "super_admin"
  end

  def user_params
    params.require(:user).permit(:email, :password, :access_level, :first_name, :last_name, :company)
  end
end

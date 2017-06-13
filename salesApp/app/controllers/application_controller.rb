class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?

  # respond_to :json
  # after_filter :set_csrf_cookie_for_ng

  #   def set_csrf_cookie_for_ng
  #     cookies['XSRF-TOKEN'] = form_authenticity_token if 
  #     protect_against_forgery?
  #   end

  protected

   def configure_permitted_parameters
        added_attrs = [:username, :email, :password, :password_confirmation, :remember_me, :access_level]
        devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
        devise_parameter_sanitizer.permit :account_update, keys: added_attrs
    end
end

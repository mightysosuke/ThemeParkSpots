class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?


  protected
    def configure_permitted_parameters
      # devise_parameter_sanitizer.permit(:sign_up, keys: [:column])
      devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :account_id, :email])
      devise_parameter_sanitizer.permit(:sign_in, keys: [:account_id])
      devise_parameter_sanitizer.permit(:account_update, keys: [:email])
    end

end

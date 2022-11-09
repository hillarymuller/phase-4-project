class ApplicationController < ActionController::API
  include ActionController::Cookies

rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
wrap_parameters format: []
before_action :authorize

private

def authorize
  @current_user = User.find_by(id: session[:user_id])
  render json: { error: "Not authorized" }, status: :unauthorized unless @current_user
end

def render_unprocessable_entity(invalid)
  render json: { error: invalid.record.errors.full_messages }, status: :unprocessable_entity
end
def render_not_found
  render json: { error: "Could not find a chore with that id" }, status: :not_found
end

end

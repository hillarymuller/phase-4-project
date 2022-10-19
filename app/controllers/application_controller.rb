class ApplicationController < ActionController::API
  include ActionController::Cookies
rescue_from ActiveRecord::RecordNotFound, with: :render_not_authorized
rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
wrap_parameters format: []

private

def render_not_authorized
  render json: { error: "Not authorized" }, status: :unauthorized unless session.include?(:user_id)
end
def render_invalid(invalid)
  render json: { error: invalid.record.errors.full_messages }, status: :unprocessable_entity
end

end

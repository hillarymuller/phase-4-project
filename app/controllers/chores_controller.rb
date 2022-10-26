class ChoresController < ApplicationController
    skip_before_action :authorize, only: :update
    def index
        render json: Chore.all
    end
    def create
        chore = @current_user.chores.create!(chore_params)
        render json: chore, status: :created
    end
    def update
        chore = Chore.find(params[:id])
        chore.update!(chore_params)
        render json: chore
    end
    
    private
    def chore_params
        params.permit(:name, :starred, :room_id, :id)
    end
end

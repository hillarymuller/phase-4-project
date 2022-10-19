class ChoresController < ApplicationController
    def index
        render json: Chore.all
    end
    def create
        chore = @current_user.chores.create!(chore_params)
        render json: chore, status: :created
    end
    
    private
    def chore_params
        params.permit(:name, :starred, :room_id)
    end
end

class ChoresController < ApplicationController
    #skip_before_action :authorize, only: :update
    def index
        render json: Chore.all
    end
    def create
        chore = @current_user.chores.create!(chore_params)
        render json: chore, status: :created
    end
    def update
        chore = Chore.find(params[:id])
        if @current_user.chores.include?(chore)
        chore.update!(chore_params)
        render json: chore
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end
    def user_chores
        chores = @current_user.chores
        render json: chores
    end
    def destroy
        chore = Chore.find(params[:id])
        chore.destroy
        render json: chore
    end
    
    private
    def chore_params
        params.permit(:name, :starred, :room_id, :id, :user)
    end
   
end

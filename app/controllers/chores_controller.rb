class ChoresController < ApplicationController
   
    before_action :find_chore, except: [:index, :create]
    def index
        chores = @current_user.chores
        render json: chores
    end
    def show
        render json: @chore
    end
    def create
        chore = @current_user.chores.create!(chore_params)
        render json: chore, status: :created
    end
    def update
        if @current_user.chores.include?(@chore)
        @chore.update!(chore_params)
        render json: @chore, status: :accepted
        else
            render json: {error: @chore.errors.full_messages}, status: :unprocessable_entity
        end
    end
   
    def destroy
        if @current_user.chores.include?(@chore)
            
         if @chore.delete
                render json: @chore
         else
            render json: {error: "Did not delete"}, status: :not_found
         end
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end
    
    private
    def chore_params
        params.permit(:name, :starred, :id, :room_id, :user_id)
    end
    def find_chore
        @chore = Chore.find(params[:id])
    end
   
end


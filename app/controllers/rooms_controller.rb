class RoomsController < ApplicationController
    def index
        rooms = Room.all
        render json: rooms
    end
    def show
        post = Post.find(params[:id])
    end
   
end

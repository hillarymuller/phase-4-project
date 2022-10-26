class RoomsController < ApplicationController
    def index
        rooms = Room.all
        render json: rooms
    end
    def show
        room = Room.find(params[:id])
    end
    def update
        room = Room.find(params[:id])
        room.update!(room_params)
        render json: room
    end
   private
   def room_params
    params.permit(id, name)
   end
end

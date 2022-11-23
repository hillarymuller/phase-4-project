class RoomsController < ApplicationController
    skip_before_action :authorize
    def index
        rooms = Room.all
        render json: rooms
    end
    def show
        room = Room.find(params[:id])
    end
    def create
        room = Room.create!(room_params)
        render json: Room.all
    end
    def update
        room = Room.find(params[:id])
        room.update!(room_params)
        render json: room
    end
    def starred_rooms
       rooms = Room.all
       #find rooms where .chores.select{|c| c.starred} returns []
       priority = rooms.select {|r| !r.starred.empty?}
       render json: priority
    end
   private
   def room_params
    params.permit(:id, :name)
   end
end

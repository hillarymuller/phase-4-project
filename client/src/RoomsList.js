import React from 'react';
import RoomCard from './RoomCard';


function RoomsList({ rooms, deleteRoom }) {
console.log(rooms);
const roomCards = rooms.map(room => <RoomCard room={room} key={room.id} deleteRoom={deleteRoom} />)
    return (
    
        <div>
            
            {roomCards}
           
        </div>
     )
}

export default RoomsList;
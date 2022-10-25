import React from 'react';
import RoomCard from './RoomCard';

function RoomsList({ rooms }) {
console.log(rooms);
const roomCards = rooms.map(room => <RoomCard room={room} key={room.id} />)
    return (
    
        <div>
            <h2>Rooms</h2>
            {roomCards}
           
        </div>
     )
}

export default RoomsList;
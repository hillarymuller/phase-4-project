import React from 'react';

function RoomCard({ room }) {
    const { name, chores } = room;

    console.log(room);
    return (
        <div>
            <h2>{name}</h2>
            <h4>{chores}</h4>
        </div>
       
     )
}

export default RoomCard;
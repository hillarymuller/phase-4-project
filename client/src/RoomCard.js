import React from 'react';

function RoomCard({ room }) {
    const { name, chores } = room;

const choreList = chores.map(chore => 
<li key={chore.id}>
    {chore.name} -- {chore.user.name} 
</li>)
    console.log(room);

    return (
        <div className="card">
            <h2>{name}</h2>
            
            <ul>{choreList}</ul>
        </div>
       
     )
}

export default RoomCard;
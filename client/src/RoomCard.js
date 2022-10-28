import React from 'react';

function RoomCard({ room }) {
    const { name, chores } = room;

const choreList = chores.map(chore => 
<li key={chore.id}>
    {chore.name} -- {chore.user.name} 
</li>)
    console.log(room);
    function handleDelete(room){
        console.log(room)
    }
    return (
        <div>
            <h2>{name}</h2>
            <button onClick={() => handleDelete(room)}>X</button>
            <ul>{choreList}</ul>
        </div>
       
     )
}

export default RoomCard;
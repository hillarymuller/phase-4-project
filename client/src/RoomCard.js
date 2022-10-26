import React from 'react';

function RoomCard({ room }) {
    const { name, chores } = room;
    
  
    function handleStar(chore) {
        fetch(`/chores/${chore.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                starred: !chore.starred,
            }),
        })
        .then(r => r.json())
        .then(r => console.log(r))
    }
const choreList = chores.map(chore => 
<li key={chore.id}>
    {chore.name} -- {chore.user.name} <button onClick={() => handleStar(chore)}>{chore.starred ? "★" : "☆"}</button></li>)
    console.log(room);
    return (
        <div>
            <h2>{name}</h2>
            <ul>{choreList}</ul>
        </div>
       
     )
}

export default RoomCard;
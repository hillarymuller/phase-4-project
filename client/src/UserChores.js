import React, { useEffect, useState } from 'react';



function UserChores() {
    const [chores, setChores] = useState([]);

    useEffect(() => {
        fetch(`/mychores`)
        .then(r => r.json())
        .then(data => setChores(data))
    }, []);

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
    }
    function handleDelete(chore) {
        fetch(`/chores/${chore.id}`, {
            method: 'DELETE',
        })
    }
    return (
        <div>
        <h1>My Chores</h1>
        <table>
            <thead>
                <tr>
                    <th>Chore</th>
                    <th>Room</th>
                    <th>Prioritize</th>
                    <th>Delete Chore</th>
                </tr>
            </thead>
            <tbody>
                {chores.map(chore => {
                    return (
                        <tr key={chore.id}>
                            <td>{chore.name}</td>
                            <td>{chore.room.name}</td>
                            <td><button onClick={() => handleStar(chore)}>{chore.starred ? "★" : "☆"}</button></td>
                            <td><button onClick={() => handleDelete(chore)}>All Done</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )
}
export default UserChores;
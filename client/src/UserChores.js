import React, { useEffect, useState } from 'react';



function UserChores() {
    const [chores, setChores] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState()

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
        //.then(data => console.log(data))
        .then(data => {
            console.log(data)
            const updatedChores = chores.map(chore => {
                //return console.log(chore)
               if (chore.id === data.id) {
                    return data
                }
                else { return chore }
            })
            setChores(updatedChores)
        })
    }
    function handleDelete(chore) {
        fetch(`/chores/${chore.id}`, {
            method: 'DELETE',
        })
        .then(r => r.json())
        .then(deletedChore => {
            const updatedChores = chores.filter(chore => {
            return chore.id !== deletedChore.id
        })
        setChores(updatedChores);
    })
}
function handleEdit(chore) {
    setEditMode(true);
    console.log(chore)
    setName(chore.name)
}
function handleChange(e) {
    setName(e.target.value);
}
function handleSubmit(e) {
    console.log(e);
    setEditMode(false);
}
    return (
    
        <div>
            {editMode ? (
                <form onSubmit={handleSubmit}>
                    <label>
                        Chore: 
                        <input onChange={handleChange}
                        type="text"
                        name="name"
                        value={name}
                        />
                    </label>
                    <button className="button" type="submit">Save</button>
                </form>
            ) : (
                <>
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
                            <td><button className="tbl-btn" onClick={() => handleStar(chore)}>{chore.starred ? "★" : "☆"}</button></td>
                            <td><button className="tbl-btn" onClick={() => handleDelete(chore)}>Done</button></td>
                            <td><button className="tbl-btn" onClick={() => handleEdit(chore)}>Edit</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>)}
        </div>
    )
}
export default UserChores;
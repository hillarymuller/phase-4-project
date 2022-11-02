import React, { useEffect, useState } from 'react';



function UserChores() {
    const [chores, setChores] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState();
    const [id, setId] = useState();
    const [errors, setErrors] = useState([]);

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
    setErrors([]);
    console.log(chore)
    setId(chore.id);
    setName(chore.name)
}
function handleChange(e) {
    setName(e.target.value);
    console.log(name)
}
function handleSubmit(e) {
    e.preventDefault();
    fetch(`/chores/${e.target.name.id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: e.target.name.value,
        }),
    })
        .then(r => {
            if (r.ok) {
                r.json()
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
            setChores(updatedChores);
            setEditMode(false);
            })
        } else {
            r.json()
            .then(err => setErrors(err.error))
        }
        
        })
    console.log(e.target.name.id);
    
}
    return (
    
        <div>
            {editMode ? (
                <form onSubmit={(e) => handleSubmit(e)}>
                      {errors && (
                        errors.map(error => {
                            return <h2 key={error} className="error">{error}</h2>
                        })
                    )}
                    <label>
                        Chore: 
                        <input onChange={handleChange}
                        id={id}
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
                    <th>Edit Chore</th>
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
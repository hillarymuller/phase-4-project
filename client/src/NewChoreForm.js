import React, {useState} from 'react';
//import {useHistory} from 'react-router-dom';


function NewChoreForm({ rooms, addNewChore }) {
   // const history = useHistory();
    const [formData, setFormData] = useState({
        name: "",
        starred: false,
        roomId: 0
    });

    const [error, setError] = useState();
    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value,});
    }
    function handleSubmit(e) {
        e.preventDefault();
        fetch('/chores', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": formData.name,
                "starred": formData.starred,
                "room_id": formData.roomId
            })
        })
        .then(r => {
            if (r.ok) {
                r.json()
            .then(data => addNewChore(data))
            }
            else {
                r.json()
                .then(err => setError(err.error))
            }
    })
}
    return (
        <div>
            <h2>Add New Chore</h2>
            <form onSubmit={handleSubmit}>
                {error ? (
                  <h2 className="error">{error}</h2>
                ) : null}
                <label>
                    Chore: 
                    <input onChange={handleChange}
                    type="text"
                    name="name"
                    value={formData.name}
                    />
                </label>
                <br></br>
                <label>
                    Room: 
                    <select value={formData.roomId} 
                    onChange={handleChange} 
                    name="roomId">
                        <option>Please choose a room</option>
                        {rooms.map(room => <option value={room.id} key={room.id}>{room.name}</option>)}
                    </select>
                </label>
                <button className="button" type="submit">Add</button>
            </form>
        </div>
     )
}

export default NewChoreForm;
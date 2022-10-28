import React, {useState} from 'react';
//import {useHistory} from 'react-router-dom';


function NewChoreForm({ rooms }) {
   // const history = useHistory();
    const [formData, setFormData] = useState({
        name: "",
        starred: false,
        roomId: 0
    });
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
        .then(r => r.json())
        .then(data => console.log(data))
    }
    return (
        <div>
            <h4>Add New Chore</h4>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Add</button>
            </form>
        </div>
     )
}

export default NewChoreForm;
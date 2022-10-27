import React, {useState} from 'react';
//import {useHistory} from 'react-router-dom';


function NewRoomForm({ onAddRoom }) {
   // const history = useHistory();
    const [name, setName] = useState("");
    function handleChange(e) {
        setName(e.target.value);
    }
    function handleSubmit(e) {
       e.preventDefault();
        fetch('/rooms', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": name
            })
        })
        .then(r => r.json())
        .then(data => onAddRoom(data))
        
    }
    return (
        <div>
            <h2>Add New Room</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Room Name:
                    <input onChange={handleChange}
                    type="text"
                    name="name"
                    value={name}
                    />
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
     )
}

export default NewRoomForm;
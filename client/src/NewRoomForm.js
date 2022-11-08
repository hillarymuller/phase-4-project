import React, {useState} from 'react';
//import {useHistory} from 'react-router-dom';


function NewRoomForm({ onAddRoom }) {
   // const history = useHistory();
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
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
        .then(r => {
            if (r.ok) {
                r.json()
            .then(data => onAddRoom(data))
            } else {
                r.json()
                .then(err => setErrors(err.error))
            }
        })
        setName("");
    }
    return (
        <div>
            <h2>Add New Room</h2>
            <form onSubmit={handleSubmit}>
                {errors ? (
                    errors.map(error => {
                    return <h2 key={error} className="error">{error}</h2>
                    })
                ) : null}
                <label>
                    Room Name: 
                    <input onChange={handleChange}
                    type="text"
                    name="name"
                    value={name}
                    />
                </label>
                <button className="button" type="submit">Add</button>
            </form>
        </div>
     )
}

export default NewRoomForm;
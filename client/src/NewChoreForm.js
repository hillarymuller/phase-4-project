import React, {useState} from 'react';


function NewChoreForm({ rooms }) {
    const [formData, setFormData] = useState({
        name: "",
        starred: false,
        roomId: 0
    });
    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value,});
    }
    return (
        <div>
            <h2>Add New Chore</h2>
            <form>
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
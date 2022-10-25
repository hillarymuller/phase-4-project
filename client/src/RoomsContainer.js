import React, {useState, useEffect} from 'react';
import RoomsList from './RoomsList';


function RoomsContainer() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch('/rooms')
        .then(r => r.json())
        .then(data => console.log(data))
        .then(data => setRooms(data))
        .catch(error => console.log(error))
    }, []);


    return (
        <div>
            <h2>Rooms</h2>
            <>
            {!rooms ? (<h2>Loading...</h2>) : (<RoomsList rooms={rooms} />)}
            </>
       </div>
     )
}

export default RoomsContainer;
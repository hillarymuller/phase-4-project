import React, {useState, useEffect} from 'react';
import RoomsList from './RoomsList';
import NewChoreForm from './NewChoreForm';
import NewRoomForm from './NewRoomForm';



function RoomsContainer() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
   

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const resp = await fetch('/rooms')
                const data = await resp.json()
                setRooms(data)
                setLoading(false)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchRooms();
    }, []);

function onAddRoom(newRoom) {
    setRooms(...rooms, newRoom);
}
//function deleteRoom(room) {

//}
if (loading) return <h2>Loading Rooms...</h2>

    return (
        <div>
            <h1>ALL CHORES</h1>
            <NewChoreForm rooms={rooms} />
            <RoomsList rooms={rooms} />
            <NewRoomForm onAddRoom={onAddRoom} />
       </div>
     )
}

export default RoomsContainer;
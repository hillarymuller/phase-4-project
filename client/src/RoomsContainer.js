import React, {useState, useEffect} from 'react';
import RoomsList from './RoomsList';
import NewChoreForm from './NewChoreForm';


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

if (loading) return <h2>Loading Rooms...</h2>
    return (
        <div>
            <h2>Rooms</h2>
            <NewChoreForm rooms={rooms} />
            <RoomsList rooms={rooms} />
            
       </div>
     )
}

export default RoomsContainer;
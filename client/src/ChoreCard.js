import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ChoreCard() {
    const { id } = useParams();
    const [chore, setChore] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

function fetchChore() {
        fetch(`/chores/${id}`)
            .then(r => {
                if (r.ok) {
                    r.json()
            //.then(data => console.log(data))
                .then(data => {
                console.log(data)
                setChore(data)
                setLoading(false);
                })
            } else {
                r.json()
                .then(err => {
                    setError(err.error)
                    setLoading(false);
                })

            }
            
            })
       
    }

    useEffect(() => {
     fetchChore();
    }, [id])
    if (loading) return <h2>Loading Chore...</h2>
    return (
        <div className="card">
            {error ? (
                   <h2 className="error">{error}</h2>
                    
                ) : (
                    <div>
            <h2>Get this done, {chore.user.name}!</h2>
            <h1>{chore.name} in the {chore.room.name}</h1>
            </div>
            )}
        </div>
    )
}
export default ChoreCard;
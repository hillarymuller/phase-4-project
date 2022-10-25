import React, {useState} from 'react';

function LoginForm({ handleLogin }) {
const [username, setUsername] = useState("");

    function handleChange(e){
        setUsername(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username}),
        })
        .then(resp => {
            if (resp.ok) {
                resp.json()
                .then(user => handleLogin(user))
            }
        });
    }

 return (
    <form onSubmit={handleSubmit}>
        <label>
            Username:
            <input onChange={handleChange}
                type="text"
                name="username"
                value={username}
                />
                <button type="submit">Login!</button>
        </label>
    </form>
 );
}

export default LoginForm;
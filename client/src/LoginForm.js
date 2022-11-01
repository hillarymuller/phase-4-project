import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

function LoginForm({ handleLogin }) {
const [formData, setFormData] = useState({
    username: "",
    password: ""
});
const [error, setError] = useState();
const history = useHistory();

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value,})
    }
    
    function handleSubmit(e){
        e.preventDefault();
        console.log(formData);
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "username": formData.username,
                "password": formData.password
        }),
        })
        .then(resp => {
            if (resp.ok) {
                resp.json()
                .then(user => {console.log(user);
                handleLogin(user)})
                //.then(user => handleLogin(user))
                .then(() => history.push(`/me`))
            }
            else {
                resp.json()
                .then(err => setError(err.error));
            }
        });
    }

 return (
    <form onSubmit={handleSubmit}>
        {error && (
            <h2 className="error">{error}</h2>
        )}
        <label>
            Username:
            <input onChange={handleChange}
                type="text"
                name="username"
                value={formData.username}
                />
        </label>
        <label>
            Password:
            <input onChange={handleChange}
            type="text"
            name="password"
            value={formData.password}
            />
        </label>
                <button type="submit">Login!</button>
        
    </form>
 );
}

export default LoginForm;
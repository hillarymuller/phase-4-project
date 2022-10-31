import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

function SignupForm({ handleLogin }) {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        password: "",
        passwordConfirmation: ""
    });
    const history = useHistory();

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value,});
    }
    function handleSubmit(e) {
        e.preventDefault();
        fetch('/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "name": formData.name,
                "username": formData.username,
                "password": formData.password,
                "password_confirmation": formData.passwordConfirmation
            })
        })
        .then(r => r.json())
        .then(user => handleLogin(user))
        .then(redirect())
    }
    function redirect() {
        history.push('/me');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input onChange={handleChange}
                    type="text"
                    name="name"
                    value={formData.name}
                    />
                </label>
                <br></br>
                <label>
                    Username:
                    <input onChange={handleChange}
                    type="text"
                    name="username"
                    value={formData.username}
                    />
                </label>
                <br></br>
                <label>
                    Password:
                    <input onChange={handleChange}
                    type="text"
                    name="password"
                    value={formData.password}
                    />
                </label>
                <br></br>
                <label>
                    Confirm Password:
                    <input onChange={handleChange}
                    type="text"
                    name="passwordConfirmation"
                    value={formData.passwordConfirmation}
                    />
                </label>
                <button type="submit">Sign Up!</button>
            </form>
        </div>
     )
}

export default SignupForm;
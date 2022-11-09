import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import LoginForm from './LoginForm';
import UserChores from './UserChores';
import RoomCard from './RoomCard';
import RoomsContainer from './RoomsContainer';
import SignupForm from './SignupForm';
import React, {useEffect, useState} from 'react';
import ChoreCard from './ChoreCard';

//import {useHistory} from 'react-router-dom';


function App() {
  const [user, setUser] = useState(null);
  //const history = useHistory();

const fetchUser = () => {
  fetch('/me', {
    headers: {
      "accepts": "application/json"
    }
  })
  .then(resp => {
    if (resp.ok) {
      resp.json()
      .then(user => setUser(user));
    }
    else {
      console.log("No current user")
    }
  });
}
  useEffect(() => {
    fetchUser();
  },[]);

function handleLogin(user) {
  setUser(user);
}
  function handleLogout() {
    fetch('/logout', {
      method: 'DELETE',
    })
    setUser(null);
  }

  return (
    <div className="App">
      <Router>
        <header className="App-header">
        <h1>HOUSEHOLD CHORES</h1>
        <NavBar user={user} handleLogout={handleLogout} />
        </header>
        <Switch>
     
          <Route path="/rooms/:roomId">
            <RoomCard />
          </Route>
          <Route path="/chores/:id">
            <ChoreCard />
          </Route>
         <Route path="/chores">
           <UserChores />
         </Route>
          <Route path="/rooms">
            <RoomsContainer />
          </Route>
          <Route path="/login">
            <LoginForm handleLogin={handleLogin} />
          </Route>
          <Route path="/signup">
            <SignupForm handleLogin={handleLogin} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

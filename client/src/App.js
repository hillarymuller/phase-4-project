import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import LoginForm from './LoginForm';
import NewChoreForm from './NewChoreForm';
import RoomCard from './RoomCard';
import RoomsContainer from './RoomsContainer';
import SignupForm from './SignupForm';
import React, {useEffect, useState} from 'react';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
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
  },[]);

function handleLogin(user) {
  setUser(user);
}
  function handleLogout() {
    setUser(null);
  }

  return (
    <div>
      <h2>Household Chores</h2>
      <Router>
        <NavBar user={user} handleLogout={handleLogout} />
        <Switch>
          <Route path="/chores/new">
            <NewChoreForm />
          </Route>
          <Route path="/rooms/:roomId">
            <RoomCard />
          </Route>
         {/* <Route path="/user/:userId">*/}
           {/* <ChoresList />*/}
         { /*</Route>*/}
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

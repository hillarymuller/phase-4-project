import {BrowserRouteer as Router, Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <h2>Household Chores</h2>
      <Router>
        <NavBar />
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
            <LoginForm />
          </Route>
          <Route path="/signup">
            <SignupForm />
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

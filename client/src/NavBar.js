import React from 'react';
import {NavLink} from 'react-router-dom';

const style = {
    width: "60%",
    margin: "5% 0 1%",
    padding: "1em",
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    verticalAlign: "center",
    fontFamily: "Optima, sans-serif"
}
function NavBar({user, handleLogout}) {
 return (
    <div>
        <NavLink 
        exact
        style={style}
        activeStyle={{
            fontWeight: "bolder",
            color: "#D26901"
        }}
        to='/'>
            Home
            </NavLink>
        {user ? (
        <>
        <NavLink 
        exact
        style={style}
        activeStyle={{
            fontWeight: "bolder",
            color: "#D26901"
        }}
        to='/chores'>
            My Chores
        </NavLink>
        <NavLink
        exact
        style={style}
        activeStyle={{
            fontWeight: "bolder",
            color: "#D26901"
        }}
        to='/rooms'>
            All Chores
        </NavLink>
        <button className="button" onClick={handleLogout}>
            Logout
        </button>
</> ) : (
    <>
        <NavLink 
        exact 
        style={style}
        activeStyle={{
            fontWeight: "bolder",
            color: "#D26901"
        }}
        to='/rooms'>
            All Chores
            </NavLink>
            <NavLink 
            exact
            style={style}
            activeStyle={{
                fontWeight: "bolder",
                color: "#D26901"
            }}
            to="/signup">
                Sign Up
            </NavLink>
            <NavLink 
            exact 
            style={style}
            activeStyle={{
                fontWeight: "bolder",
                color: "#D26901"
            }}
            to='/login'>
                Log In
            </NavLink>
            </>
)}
    </div>
 )
}

export default NavBar;
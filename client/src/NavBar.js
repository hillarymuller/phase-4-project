import React from 'react';
import {NavLink} from 'react-router-dom';


function NavBar({user, handleLogout}) {
 return (
    <div>
        <NavLink 
        to='/'>
            Home
            </NavLink>
        {user ? (
        <>
        {/*<NavLink 
        to='/user/:userId'>
            My Chores
        </NavLink>*/}
        <NavLink 
        to='/chores/new'>
            Add New Chore
        </NavLink>
        <button onClick={handleLogout}>
            Logout
        </button>
</> ) : (
    <>
        <NavLink to='/rooms'>
            Rooms to Clean
            </NavLink>
            <NavLink to="/signup">
                Sign Up
            </NavLink>
            <NavLink to='/login'>
                Log In
            </NavLink>
            </>
)}
    </div>
 )
}

export default NavBar;
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
        <NavLink 
        to='/mychores'>
            My Chores
        </NavLink>
        <NavLink
        to='/rooms'>
            All Chores
        </NavLink>
        <button onClick={handleLogout}>
            Logout
        </button>
</> ) : (
    <>
        <NavLink to='/rooms'>
            All Chores
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
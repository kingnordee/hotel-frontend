import React from "react";
import {NavLink} from "react-router-dom";
import "../styles/navbar.css"


const NavBar = () => {
    return(
        <div className={"navBar"}>
            <NavLink to='/' className={"header"}> Hotels </NavLink>
            {/*<div>*/}
            {/*    <NavLink to='/'> <div> Hotels </div> </NavLink>*/}
            {/*    <NavLink to='/register'> <div> Register </div> </NavLink>*/}
            {/*    <NavLink to='/login'> <div> Login </div> </NavLink>*/}
            {/*    <NavLink to='/create_event'> <div> Create Event </div> </NavLink>*/}
            {/*    /!*{ user.userLoggedIn && <div> Welcome, { user.setUser.name }! </div> }*!/*/}
            {/*</div>*/}
        </div>
    )
}

export default NavBar;


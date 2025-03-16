import React from 'react'
import './Nav.css';
import { Link } from 'react-router-dom';



function Nav() {
  return (
    <div>
      <ul className = "home-ul">

        <li className="logo-li">
            
              <img src= "/logoN.png" alt="Logo" className="logo" />
            
        </li>

        <li className = "home-li">
            <Link to ="/mainhome" className = "active home-a">
            <h4>Home</h4>
            </Link>
        </li>
        <li className = "home-li">
            <Link to ="/adduser" className = "active home-a">
            <h4>Add User</h4>
            </Link>
        </li>
        <li className = "home-li">
            <Link to ="/userdetails" className = "active home-a">
            <h4>User Details</h4>
            </Link>
        </li> 
        { /*<li className = "home-li">
            <Link to ="/register" className = "active home-a">
            <button style={{ backgroundColor: "hsl(65, 82.90%, 48.00%)"}}>Register</button>
            </Link>
        </li>
        <li className = "home-li">
            <Link to ="/log" className = "active home-a">
            <button style={{ backgroundColor: "hsl(65, 82.90%, 48.00%)"}}>Login</button>
            </Link> 
        </li> */ }
      </ul>
    </div>
  )
}

export default Nav

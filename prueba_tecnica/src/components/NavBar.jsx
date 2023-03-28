import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
    return (
        <div>
            <ul className='navigation'>
                <Link to="/">
                    <img src="./src/assets/My project-1 (1).png" alt="logo_img" srcset="" className="logo"/>
                </Link>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/login">
                    <li>Login</li>
                </Link>
                <Link to="/signup">
                    <li>Sign Up</li>
                </Link>
            </ul>
        </div>
    )
}

export default NavBar

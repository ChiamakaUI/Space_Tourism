import React from 'react'
import logo from '../assets/shared/logo.svg'
import './Style.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <div className="navbar">
        <img src={logo} alt="logo" />
        <hr id="hr" />
        <div className="navigation">
          <ul>
            <li>
              <Link to="/">00 Home</Link>
            </li>
            <li>
              <Link to="/destination">01 Destination</Link>
            </li>
            <li>
              <Link to="/crew">02 Crew</Link>
            </li>
            <li>
              <Link to="/technology">03 Technology</Link>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Navbar


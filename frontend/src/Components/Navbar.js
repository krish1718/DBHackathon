import React from "react";
import "../Styles/navbar.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <NavLink className="navbar-brand" to="/dashboard">Dementia</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/patient-details">Patient Details</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/map">Patient Location</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/calender">Calendar</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/training">Dementia Learning</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

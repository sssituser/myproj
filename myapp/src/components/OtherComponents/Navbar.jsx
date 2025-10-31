import React from "react";
import {Link} from 'react-router-dom';
let Navbar=()=>{
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link navbar-brand">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link ">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/register" className="nav-link ">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link ">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </React.Fragment>
    )
}
export default Navbar;
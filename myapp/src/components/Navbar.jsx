import React from 'react';
import {Link} from 'react-router-dom';
 
const Navbar = () => {
    return (
        <React.Fragment>
            <nav className='navbar navbar-expand-sm bg-primary text-white'>
                <div className="container">
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link to='/home' className='text-white navbar-brand nav-link'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/add' className='text-white navbar-brand nav-link'>Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    );
}
 

 
export default Navbar;
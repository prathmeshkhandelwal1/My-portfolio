import React from 'react'
import './Nav.scss';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <div className="nav">
            <ul className="nav__list">
                <Link to="/">
                    <li className="nav__list__element">Home</li>
                </Link>    
                <Link to="/projects"><li className="nav__list__element">projects</li></Link>    
                <Link to="/about"><li className="nav__list__element">about</li></Link>
               
            </ul>
        </div>
    )
}

export default Nav

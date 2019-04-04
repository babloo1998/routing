import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
import './Header.css';

class Header extends Component
{
    render()
    {
        let isAuth = this.props.isAuth;
            return (
                <header>
                    <h1>Book Shop</h1>
                    <ul>
                        <li>
                           <Link to="/Books">Books</Link> 
                        </li>
                        <li>
                        {isAuth?<Link to="/logout"  className="loginlink">Logout</Link>:<Link to="/login"  className="loginlink">Login</Link>}
                        </li>
                    </ul>
                </header>
            )
    }
}
export default Header;

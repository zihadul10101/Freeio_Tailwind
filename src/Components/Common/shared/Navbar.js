import React from 'react';
import '../../../Assets/Styles/css/Navbar.css';
import logo from '../../../Assets/Image/hero/Logo.svg';
import nav_icon from '../../../Assets/Image/hero/nav_icon.svg';
const Navbar = () => {
    return (
        <div className="container" >
            <div className="navbar">
                <div className="navbar-left">
                    <ul>
                        <li className="logo">
                            <img src={logo} alt="" />
                            <h4>Freeio.</h4>
                        </li>
                        <li className="category-logo">
                            <img src={logo} alt="" />
                            <h4>Category</h4>
                        </li>
                        <li>
                            <h5> Home </h5>
                            <img src={logo} alt="" />
                        </li>
                        <li>
                            <h5> Browse Jobs</h5>
                            <img src={logo} alt="" />
                        </li>
                        <li>
                            <h5> Services</h5>
                            <img src={logo} alt="" />
                        </li>
                        <li>
                            <h5> Blog</h5>
                            <img src={logo} alt="" />
                        </li>
                        <li>
                            <h5>Pages</h5>
                            <img src={logo} alt="" />
                        </li>
                        <li>
                            <h5> Contact</h5>
                            <img src={logo} alt="" />
                        </li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <ul>
                        <li> <img src={logo} alt="" /></li>
                        <li>
                            <h5>Become a Seller</h5>
                        </li>
                        <li>
                            <h5>Sign In</h5>
                        </li>
                        <li>
                            <button>Join</button>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
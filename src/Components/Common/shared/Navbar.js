import React from 'react';
import '../../../Assets/Styles/css/Navbar.css';
import logo from '../../../Assets/Image/hero/Logo.svg';
import catIcon from '../../../Assets/Image/navbar/catIcon.svg';
import searchIcon from '../../../Assets/Image/navbar/search.svg';
import dropdowanIcon from '../../../Assets/Image/navbar/dropIcon.svg';
const Navbar = () => {
    return (
        <div className="container">
            <div className="navbar">
                <div className="navbar-left">
                    <ul>
                        <li className="logo">
                            <img src={logo} alt="" />
                            <h4>Freeio.</h4>
                        </li>
                        <li className="category-logo">
                            <img src={catIcon} alt="" />
                            <h5>Category</h5>
                        </li>
                        <li>
                            <h5> Home </h5>
                            <img src={dropdowanIcon} alt="" />
                        </li>
                        <li>
                            <h5> Browse Jobs</h5>
                            <img src={dropdowanIcon} alt="" />
                        </li>
                        <li>
                            <h5> Services</h5>
                            <img src={dropdowanIcon} alt="" />
                        </li>
                        <li>
                            <h5> Blog</h5>
                            <img src={dropdowanIcon} alt="" />
                        </li>
                        <li>
                            <h5>Pages</h5>
                            <img src={dropdowanIcon} alt="" />
                        </li>
                        <li>
                            <h5> Contact</h5>
                            <img src={dropdowanIcon} alt="" />
                        </li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <ul>
                        <li> <img className="searchIcon" src={searchIcon} alt="" /></li>
                        <li>
                            <h5>Become a Seller</h5>
                        </li>
                        <li>
                            <h5>Sign In</h5>
                        </li>
                        <li>
                            <h5>Join</h5>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
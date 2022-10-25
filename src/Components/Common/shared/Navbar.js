import React from 'react';
import '../../../Assets/Styles/css/Navbar.css';
import logo from '../../../Assets/Image/hero/Logo.svg';
import nav_icon from '../../../Assets/Image/hero/nav_icon.svg';
const Navbar = () => {
    return (
        <div className=" navbar" >
            <div className="nevbar-inner">
                <div className="nev-logo">
                    <div>    <img src={logo} /></div>
                    <div> <p>Freeio.</p></div>
                </div>
                <div className="nev-bar">
                    <div>  <p>Join</p></div>
                    <div>  <img src={nav_icon} /></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
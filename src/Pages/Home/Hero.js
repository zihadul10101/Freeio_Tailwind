import React from 'react';
import '../../Assets/Styles/css/Hero.css';
import searchIcon from '../../Assets/Image/hero/search.svg';
const Hero = () => {
    return (
        <div className="container">
            <div className='hero-container'>
                <p className='hero-title'>Hire the best freelancers for any job, online.</p>
                <p className='hero-title-small'>Millions of people use freeio.com to turn their<br />
                    ideas into reality.</p>
                     <div className='search'>
                     <div className="search-input-btn">
                        <div className='search-input-inner'>
                            <img src={searchIcon} />
                            <p>What are you looking for?</p>
                        </div>
                        </div>
                        <div className="search-btn">
                        <p>Search</p>
                        </div>
                        </div>    
            </div>
        </div>
    );
};

export default Hero;
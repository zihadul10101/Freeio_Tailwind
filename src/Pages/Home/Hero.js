import React from 'react';
import '../../Assets/Styles/css/Hero.css';
import searchIcon from '../../Assets/Image/hero/search.svg';
const Hero = () => {
    return (
        <div className="container">
            <div className="hero-contant-image">
                <div className="hero-contant">
                    <h1>Find the perfect freelance
                        services for your business</h1>
                    <p>Work with talented people at the most affordable price to get the most out of your time and cost</p>
                    <div className="hero-input-choseCategory-search">
                        <div className="hero-input">
                            <img src={searchIcon} alt="search icon" />
                            <input placeholder="What are you looking for?" />
                        </div>
                        <div className="hero-choseCategory">
                            <p>Choose Category</p>
                            <img src={searchIcon} alt="search icon" />
                        </div>
                        <div className="hero-search">
                            <button type="button">Search</button>
                        </div>
                    </div>
                    <div className="hero-statistics">
                        <ul>
                            <li>
                                <h1>834M</h1>
                                <p>Total Freelancer</p>
                            </li>
                            <li>
                                <h1>732M</h1>
                                <p>Positive Review</p>
                            </li>
                            <li>
                                <h1>90M</h1>
                                <p>Projects Completed</p>
                            </li>
                            <li>
                                <h1>236M</h1>
                                <p>Projects Completed</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="hero-image">

                </div>
            </div>
        </div>
    );
};

export default Hero;
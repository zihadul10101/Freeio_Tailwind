import React from 'react';
import '../../Assets/Styles/css/Hero.css';
import searchIcon from '../../Assets/Image/hero/search.svg';
import popular from '../../Assets/Image/hero/Surface 1.png';

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
                  <img src={popular} alt="search icon" />      
                  <img src={popular} alt="search icon" />      
                </div>
            </div>
            <div className="hero-badge">
            <div className="hero-badge1">
              <div className="hero-badge-image">
                <img src={popular} alt="search icon" />
              </div>
              <div className="hero-badge-text">
                <h4>Proof of quality</h4>
                <p>Lorem Ipsum Dolar Amet</p>
              </div>
            </div>
            <div className="hero-badge2">
            <div className="hero-badge-image">
                <img src={popular} alt="search icon" />
              </div>
              <div className="hero-badge-text">
                <h4>Safe and secure</h4>
                <p>Lorem Ipsum Dolar Amet</p>
              </div>
            </div>
            <div className="hero-badge3">
              <h3>58M+ Professionals</h3>
              <img src={popular} alt="search icon" />
            </div>
            </div>
        </div>
    );
};

export default Hero;
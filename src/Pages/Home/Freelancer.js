import React from 'react';
import arrow from '../../Assets/Image/hero/arrow1.svg';
import freancler from '../../Assets/Image/hero/Surface 1.png'
import start from '../../Assets/Image/hero/ster (1).png';
import '../../Assets/Styles/css/Freelancer.css';

const Freelancer = () => {
    return (
        <div className="container">
            <div className='popular-title-button'>
                <div>
                    <h2>Highest Rated Freelancers</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
                <div className="category-button">
                    <div>
                        <p>All Category</p>
                    </div>
                    <div>
                        <img src={arrow} alt="contact-us" />
                    </div>
                </div>
            </div>
            <div className="freelancer-contant">
                <div className="freelancer-box">
                    <div className="freelancer-image-head-tag">
                        <div className="freelancer-image">
                            <img src={freancler} alt="contact-us" />
                        </div>
                        <div className="freelancer-head">
                            <h2>Robert Fox</h2>
                            <p>Nursing Assistant</p>
                            <div className="review">
                                <div>
                                    <img src={start} />
                                </div>
                                <div>
                                    <p><span>4.82 94</span> reviews</p>
                                </div>
                            </div>
                        </div>
                        <div className="freelancer-tag">
                            <button>Figma</button>
                            <button>Sketch</button>
                            <button>HTML5</button>
                        </div>
                    </div>
                    <div className="freelancer-bottom-bottomArrow">
                        <div className="freelancer-bottom">
                            <div>
                                <ul>
                                    <li>Location</li>
                                    <li>London</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>Rate</li>
                                    <li>$90 / hr</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>Job Success</li>
                                    <li>88%</li>
                                </ul>
                            </div>
                        </div>
                        <div className="freelancer-bottomArrow">
                        <div className="category-button">
                    <div>
                        <p>View Profile</p>
                    </div>
                    <div>
                        <img src={arrow} alt="contact-us" />
                    </div>
                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Freelancer;
import React from 'react';
import '../../../Assets/Styles/css/Footer.css';
import popular from '../../../Assets/Image/footer/facebook.svg';


const Footer = () => {
    return (
        <div className="footer-container">
            <div className="container">
                <div className="footer-top">
                    <div className="privicy">
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                        <p> Site Map</p>
                    </div>
                    <div className="follow">
                        <div>
                            <p>Follow Us</p>
                        </div>
                        <div>
                            <img src={popular} alt="contact-us" />
                            <img src={popular} alt="contact-us" />
                            <img src={popular} alt="contact-us" />
                        </div>
                    </div>
                </div>
                <div className="footer-center">
                    <div className="footer-center-about">
                        <ul>
                            <li>Careers</li>
                            <li>Press & News</li>
                            <li>Privacy Policy</li>
                            <li>Partnerships</li>
                            <li>Terms of Service</li>
                            <li>Investor Relations</li>
                        </ul>

                    </div>
                    <div className="footer-center-categories">
                        <ul>
                            <li> Graphics & Design</li>
                            <li>Digital Marketing</li>
                            <li>Writing & Translation</li>
                            <li>Video & Animation</li>
                            <li>Music & Audio</li>
                            <li>Programming & Tech</li>
                            <li>Data</li>
                            <li>Business</li>
                            <li>Lifestyle</li>
                        </ul>
                    </div>
                    <div className="footer-center-support">
                        <ul>
                            <li> Help & Support</li>
                            <li>Trust & Safety</li>
                            <li>Selling on Freeio</li>
                            <li>Buying on Freeio</li>
                        </ul>
                    </div>
                    <div className="footer-center-subscribe">
                        <h4>subscribe</h4>
                        <div className="subscribe-form">
                            <p>Your email address</p>
                            <button type="button" className="">Send</button>
                        </div>
                        <h4>App</h4>
                        <div className='app'>
                            <div><img src={popular} alt="contact-us" /></div>
                            <div>
                                <p>iOS App
                                </p>
                            </div>
                            <div><img src={popular} alt="contact-us" /></div>
                            <div>
                                <p>iOS App
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="footer-bottom">
                <div className="footer-bottom-copy-right">
                    <div>
                        <p>© Freeio. 2022 CreativeLayers. All rights reserved.</p>
                    </div>
                    <div className="language-curency">
                        <div>
                            <p>English</p>
                            <img src="http" />
                        </div>
                        <div>
                            <p>US$ USD</p>
                            <img src="http" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;
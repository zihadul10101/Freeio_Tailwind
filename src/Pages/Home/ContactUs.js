import React from 'react';
import popular from '../../Assets/Image/hero/Surface 1.png';
import arrow from '../../Assets/Image/hero/arrow.svg';
import rightIcon from '../../Assets/Image/hero/righticon.svg';
import '../../Assets/Styles/css/ContactUs.css';
import { contactUs } from '../../../src/utiltes/LocalDatabase';



const ContactUs = () => {
    return (
        <div className="container">
            <div className="contact-contant">
                <div className="contact-head-text-button">
                    <div className="contact-head">
                        <p>For clients</p>
                        <h3>Find talent your way</h3>
                    </div>
                    <div className="contact-text">
                        <p>Work with the largest network of independent professionals and get things done—from quick turnarounds to big transformations.</p>

                    </div>
                    <div className="contact-button">
                        <div>
                            <p>Contact</p>
                        </div>
                        <div>
                            <img src={arrow} alt="contact-us" />
                        </div>
                    </div>
                </div>
                <div className="contact-contant-img">
                    <img src={popular} alt="contact-us" />
                </div>
                <div className="middle-box">
                    {
                        contactUs.map(contact => <>
                        <div className="middle-box-inner">
                        <div className="rightIcon-middleText">
                            <div className="rightIcon">
                            <img src={contact.img} alt="contact-us" />
                            </div>
                            <div className="middleText">
                                <p>{contact.title}</p>
                            </div>
                           </div>
                        </div>
                        </>)
                    }
                          
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
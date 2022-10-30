import React from 'react';
import arrow from '../../Assets/Image/hero/arrow1.svg';


const Membership = () => {
    return (
        <div className="container">
            <div className="membership-head-switch-items">
                <div className="membership-head">
                    <h2>Membership Plans</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
                <div className="membership-switch">
                    <div className="membership-switch-billed-yearly">
                        <p>Billed Monthly</p>
                        <label class="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="membership-switch-billed-monthly">
                        <p>Billed Yearly</p>
                        <button>Save 20%</button>
                    </div>
                </div>
                <div className="membership-items">
                    <div className="membership-items-head-middle-botton">
                        <div className="membership-items-head">
                            <h3>$29 / <sub>monthly</sub></h3>
                            <h2>Basic Plan</h2>
                            <p>One time fee for one listing or task highlighted in search results.</p>
                        </div>
                        <div className="membership-items-middle">
                            <p>1 Listing
                                30 Days Visibility
                                Highlighted in Search Results
                                4 Revisions
                                9 days Delivery Time
                                Products Support</p>
                        </div>
                        <div className="membership-items-botton">
                            <div className="category-button">
                                <div>
                                    <p>Buy Now</p>
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

export default Membership;
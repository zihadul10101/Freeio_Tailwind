import React from 'react';
import arrow from '../../Assets/Image/hero/arrow1.svg';

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
        </div>
    );
};

export default Freelancer;
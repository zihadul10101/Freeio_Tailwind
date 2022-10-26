import React from 'react';
import '../../Assets/Styles/css/TopSellingServices.css';
import services from '../../Assets/Image/hero/serfase.svg'

const TopSellingServices = () => {
    return (
        <div className='container'>
            <h1>Need something done?</h1>
            <p>Most viewed and all-time top-selling services</p>


            <div className="contant">
                <div className="contant-box">
                    <div className="img">
                        <img src={services} />
                    </div>
                    <div className="">
                        <h1>Post a job</h1>
                        <p>It’s free and easy to post a job. Simply fill in a title, description.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopSellingServices;
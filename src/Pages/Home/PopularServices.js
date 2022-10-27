import React from 'react';
import '../../Assets/Styles/css/PopularServices.css';
import popular from '../../Assets/Image/hero/Surface 1.png'
const PopularServices = () => {
    return (
        <div className='container'>

            <div className='popular-title-button'>

                <div>
                    <h2>Trending PopularServices</h2>
                    <p>Most viewed and all-time top-selling PopularServices</p>
                </div>
                <div className="tab">
                    <button>Development & IT</button>
                    <button>Development & IT</button>
                    <button>Development & IT</button>
                    <button>Development & IT</button>
                </div>
            </div>
            <div className="popular-contant">
                <div className="popular-contant-box">
                    <div className="popular-contant-box-img">
                        <img src={popular} alt="popular-contant-box-img" />
                    </div>
                    <div className="popular-head-review-bottom">


                        <div className="head">
                            <p>Web & App Design</p>
                            <h2>I will design modern websites in figma or adobe xd</h2>
                        </div>
                        <div className="review">
                            <div>
                                <img src="" />
                            </div>
                            <div>
                                <p>4.82 94 reviews</p>
                            </div>
                        </div>
                        <div className="bottom">
                          <div className="bottom-freelancer-name">
                          <div>  <img src={popular} /></div>
                          <div> <p>Wanda Runo</p> </div>
                          </div>
                          <div className="bottom-freelancer-price">
                            <p>Starting at $983</p>
                          </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PopularServices;
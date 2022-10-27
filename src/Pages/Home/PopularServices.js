import React from 'react';
import '../../Assets/Styles/css/PopularServices.css';
import popular from '../../Assets/Image/hero/Surface 1.png'
import start from '../../Assets/Image/hero/ster (1).png';
import heart from '../../Assets/Image/hero/heart.svg';
import circle from '../../Assets/Image/hero/circle.png';
import { popularServices, serviceTitle } from '../../../src/utiltes/LocalDatabase';

const PopularServices = () => {
    return (
        <div className='container'>

            <div className='popular-title-button'>

                <div>
                    <h2>Trending PopularServices</h2>
                    <p>Most viewed and all-time top-selling PopularServices</p>
                </div>
                <div className="tab">
                    {
                        serviceTitle.map(item => <>
                            <button>{item.title}</button>
                        </>)
                    }


                </div>
            </div>
            <div className="popular-contant">
                {
                    popularServices.map(service => <>
                        <div className="popular-contant-box">
                            <div className="popular-contant-box-img">
                                <img className="img" src={popular} alt="popular-contant-box-img" />
                                <div className="heart">
                                    <img src={heart} alt="popular-contant-box-img" />
                                </div>
                            </div>
                            <div className="popular-head-review-bottom">


                                <div className="head">
                                    <p>{service.item}</p>
                                    <h3 className="hover">{service.title}</h3>
                                    <img className="online" src={circle} alt="popular-contant-box-img" />

                                </div>
                                <div className="review">
                                    <div>
                                        <img src={start} />
                                    </div>
                                    <div>
                                        <p><span>4.82 94</span> reviews</p>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div className="bottom-freelancer-name">
                                        <div className='img'>  <img src={popular} /></div>
                                        <div> <p>{service.name}</p> </div>
                                    </div>
                                    <div className="bottom-freelancer-price">
                                        <p>Starting at <span>$983</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>

        </div>
    );
};

export default PopularServices;
import React from 'react';
import '../../Assets/Styles/css/TopSellingServices.css';
import services from '../../Assets/Image/hero/serfase.svg';
import { topSellingServices } from '../../../src/utiltes/LocalDatabase';

const TopSellingServices = () => {
    return (
        <div className='container'>
            <h2>Need something done?</h2>
            <p>Most viewed and all-time top-selling services</p>


            <div className="contant">
               {
                topSellingServices.map(item => <>
                 <div className="contant-box">
                 <div className="img">
                     <img src={item.img} alt='top-selling-service' />
                 </div>
                 <div className="contant-text">
                     <h1>{item.title}</h1>
                     <p>{item.description}</p>
                 </div>
             </div>
                </>)
                
               }
            </div>
        </div>
    );
};

export default TopSellingServices;
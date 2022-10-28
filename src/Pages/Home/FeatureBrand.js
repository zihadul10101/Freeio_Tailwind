import React from 'react';
import '../../Assets/Styles/css/FeatureBrand.css';
import featureBrand1 from '../../Assets/Image/feature-brand/feature-brand-1.svg';
import featureBrand2 from '../../Assets/Image/feature-brand/feature-brand-2.svg';
import featureBrand3 from '../../Assets/Image/feature-brand/feature-brand-3.svg';
import featureBrand4 from '../../Assets/Image/feature-brand/feature-brand-4.svg';
import featureBrand5 from '../../Assets/Image/feature-brand/feature-brand-5.svg';

const FeatureBrand = () => {
    return (
        <div className="container">
            <p className='headline'>Trusted by the world’s best</p>
            <div className="featureBrand-box">
            <img src={featureBrand1} alt="contact-us" />
            <img src={featureBrand2} alt="contact-us" />
            <img src={featureBrand3} alt="contact-us" />
            <img src={featureBrand4} alt="contact-us" />
            <img src={featureBrand5} alt="contact-us" />
            </div>
        </div>
    );
};

export default FeatureBrand;
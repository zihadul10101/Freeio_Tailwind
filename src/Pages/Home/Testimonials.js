import React from 'react';
import '../../Assets/Styles/css/Testimonials.css';
import popular from '../../Assets/Image/hero/Surface 1.png';


const Testimonials = () => {
    return (
        <div className="container">
            <div className="testimonials-contant">
                <div className="testimonials-box">
                    <div className="testimonials-head-bottom">
                        <div className="testimonials-head">
                            <div>
                                <h2>People Love To Learn With Freeio</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur.</p>
                            </div>

                        </div>
                        <div className="testimonials-bottom">
                            <div className="testimonials-bottom-box">
                                <h3>4.9/5</h3>
                                <p>95% of customers are satisfied through to see their freelancers</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonials-client-review">
                        <div className="client-review-text">
                            <h4>Great Work</h4>
                            <p>“I found the course material to be highly engaging, and the instructors to be helpful and communicative.”</p>
                        </div>
                        <div className="client-review-image-name">
                            <div className='img'>  <img src={popular} /></div>
                            <div className="client-review-image-name">

                                <h4> Courtney Henry</h4>
                                <p>Web Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Testimonials;
import React from 'react';
import arrow from '../../Assets/Image/hero/arrow1.svg';
import '../../Assets/Styles/css/Category.css';

const Category = () => {
    return (
        <div className="container">

            <div className='popular-title-button'>

                <div>
                    <h2>Browse talent by category</h2>
                    <p>Get some Inspirations from 1800+ skills</p>
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
            <div className="category-contant">

            </div>

        </div>
    );
};

export default Category;
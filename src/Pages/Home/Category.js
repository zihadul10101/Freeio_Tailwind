import React from 'react';
import arrow from '../../Assets/Image/hero/arrow1.svg';
import category from '../../Assets/Image/hero/caterory.jpg';
import '../../Assets/Styles/css/Category.css';
import { categoryItem } from '../../../src/utiltes/LocalDatabase';


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
                {
                    categoryItem.map(item => <>
                        <div className="category-box">
                            <img className="category-img" src={category} alt="category" />
                            <div className="category-inner-text">
                                <p>1.853 skills</p>
                                <h3>Development &
                                    IT</h3>
                            </div>
                        </div>
                    </>)
                }
            </div>

        </div>
    );
};

export default Category;
import React from 'react';
import '../../Assets/Styles/css/Home.css'
import Hero from './Hero';
import Navbar from '../../Components/Common/shared/Navbar';
import Footer from '../../Components/Common/shared/Footer';
import TopSellingServices from './TopSellingServices';
import PopularServices from './PopularServices';
import ContactUs from './ContactUs';
import Category from './Category';
import FeatureBrand from './FeatureBrand';
import Freelancer from './Freelancer';
import Testimonials from './Testimonials';
import Membership from './Membership';

const Home = () => {
    return (
     
            <div className="nev-hero">
                <Navbar />
                <Hero />
                <TopSellingServices />
                <PopularServices />
                <ContactUs />
                <FeatureBrand />
                <Category />
                <Freelancer />
                <Testimonials />
                <Membership />
                <Footer />
            </div>
     
    );
};

export default Home;
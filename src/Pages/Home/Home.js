import React from 'react';
import '../../Assets/Styles/css/Home.css'
import Hero from './Hero';
import Navbar from '../../Components/Common/shared/Navbar';

const Home = () => {
    return (
     
            <div className="nev-hero">
                <Navbar />
                <Hero />
            </div>
     
    );
};

export default Home;
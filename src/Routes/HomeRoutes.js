import React from 'react';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Hero from '../Pages/Home/Hero';
import Navbar from '../Components/Common/shared/Navbar';
import Footer from '../Components/Common/shared/Footer';

const HomeRoutes = () => {
    return (
       
            <Routes>
                <Route path="/" element={<Navbar />} />
                <Route path="/" element={<Hero />} />
                <Route path="/" element={<Footer />} />
                
            </Routes>
 
    );
};

export default HomeRoutes;
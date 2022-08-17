import React from 'react';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import Hero from '../Pages/Home/Hero';

const HomeRoutes = () => {
    return (
       
            <Routes>
                <Route path="/" element={<Hero />} />
            </Routes>
 
    );
};

export default HomeRoutes;
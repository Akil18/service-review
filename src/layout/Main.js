import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Main = () => {
    return (
        <div>
            <HelmetProvider>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </HelmetProvider>        
        </div>
    );
};

export default Main;
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Home/Footer';
import Header from '../components/Home/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
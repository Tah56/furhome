import Footer from '@/component/Footer';
import Navbar from '@/component/Navbar';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const mainLayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
             <ToastContainer></ToastContainer>
        <Footer></Footer>
        </div>
    );
};

export default mainLayout;
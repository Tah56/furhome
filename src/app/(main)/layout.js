import Footer from '@/component/Footer';
import Navbar from '@/component/Navbar';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const mainLayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
        <Footer></Footer>
             <ToastContainer></ToastContainer>
        </div>
    );
};

export default mainLayout;
import Navbar from '@/component/Navbar';
import React from 'react';

const mainLayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default mainLayout;
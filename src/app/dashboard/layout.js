import DashNav from '@/component/DashNav';
import Link from 'next/link';
import React from 'react';

const dashboardlayout = ({children}) => {
    return (
        <div>
            <DashNav></DashNav>
           
                <div className="drawer lg:drawer-open flex flex-row-reverse justify-end">
     
      <div className="drawer-content flex ">
        {children}
        {/* Page content here */}
        <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu border bg-base-200 h-screen w-60 p-4">
          {/* Sidebar content here */}
          <li >
            <Link className='block' href={"/dashboard/request"}>My Requests</Link>
          </li>
          <li >
            <Link className='block' href={"/dashboard/add-pet"}>Add Pet</Link>
          </li>
          <li >
            <Link className='block' href={"/dashboard/listing"}>My Listings</Link>
          </li>
          
        </ul>
      </div>
    </div>
    </div>
    );
};

export default dashboardlayout;
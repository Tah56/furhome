import DashLink from '@/component/DashLink';
import DashNav from '@/component/DashNav';
import NavLink from '@/component/NavLInk';
import { PlusShape } from '@gravity-ui/icons';
import Link from 'next/link';
import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { FaRegClipboard } from 'react-icons/fa';
import { PiPlus } from 'react-icons/pi';

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
        <ul className="menu border bg-base-200 h-screen w-60   p-4">
          {/* Sidebar content here */}
          <li >
            <DashLink className='  ' href={"/dashboard/request"}><FaRegClipboard />
<h2>My Requests</h2></DashLink>
          </li>
          <li >
            <DashLink className=' ' href={"/dashboard/add-pet"}><PiPlus/>Add Pet</DashLink>
          </li>
          <li >
            <DashLink className='' href={"/dashboard/listing"}><CiHeart />My Listings</DashLink>
          </li>
          
        </ul>
      </div>
    </div>
    </div>
    );
};

export default dashboardlayout;
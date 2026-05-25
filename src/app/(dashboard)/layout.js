import DashLink from "@/component/DashLink";
import DashNav from "@/component/DashNav";
import NavLink from "@/component/NavLInk";
import { PlusShape } from "@gravity-ui/icons";
import Link from "next/link";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegClipboard } from "react-icons/fa";
import { PiPlus } from "react-icons/pi";
import { ToastContainer } from "react-toastify/unstyled";

const dashboardlayout = ({ children }) => {
  return (
    <div>
      <DashNav></DashNav>

      <div className="drawer lg:drawer-open flex flex-row-reverse justify-end">
        <div className="w-full h-screen">
          {children}
          {/* Page content here */}
         
        </div>
        <div className="drawer-side hidden md:flex lg:flex ">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu border bg-base-200 h-screen w-60   p-4">
            {/* Sidebar content here */}
            <li>
              <DashLink className="  " href={"/dashboard/request"}>
                <FaRegClipboard />
                <h2>My Requests</h2>
              </DashLink>
            </li>
            <li>
              <DashLink className=" " href={"/dashboard/add-pet"}>
                <PiPlus />
                Add Pet
              </DashLink>
            </li>
            <li>
              <DashLink className="" href={"/dashboard/listing"}>
                <CiHeart />
                My Listings
              </DashLink>
            </li>
          </ul>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default dashboardlayout;

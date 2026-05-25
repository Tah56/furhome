"use client"
import DashLink from "@/component/DashLink";
import DashNav from "@/component/DashNav";
import NavLink from "@/component/NavLInk";
import { authClient } from "@/lib/auth-client";
import { ArrowRightFromSquare, PlusShape } from "@gravity-ui/icons";
import { Label } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegClipboard } from "react-icons/fa";
import { PiPlus } from "react-icons/pi";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify/unstyled";

const dashboardlayout = ({ children }) => {
  const router = useRouter()
  const handleSignOut = async () => {
    await authClient.signOut();
    toast.success("log out successful");
    router.refresh()
  }
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
           <div
              onClick={handleSignOut}
              className="flex w-full items-center justify-between gap-2"
            >
              <Label>Log Out</Label>
              <ArrowRightFromSquare className="size-3.5 text-danger" />
            </div>
          </ul>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default dashboardlayout;

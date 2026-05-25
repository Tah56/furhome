"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, Button } from "@heroui/react";
import { Poppins } from "next/font/google";
import { IoMdHome } from "react-icons/io";
import { authClient } from "@/lib/auth-client";
import Dropdown from "./DropDown";
import DashLink from "./DashLink";
import { FaRegClipboard } from "react-icons/fa";
import { PiPlus } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
});

export default function DashNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const users = authClient.useSession();
  const user = users.data?.user;

  return (
    <div className={`${poppins.className}`}>
      <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm ">
        <header className="flex h-16 items-center justify-between px-6 md:px-10">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 bg-purple-100 rounded-2xl flex items-center justify-center text-2xl">
                🐾
              </div>
              <span className="font-bold text-2xl tracking-tight text-gray-900">FURHOME</span>
            </Link>
          </div>


        
          {user && (
            <div className="hidden md:flex lg:flex items-center">
              <Dropdown user={user} />
            </div>
          
          )}

    
          <button
            className="md:hidden text-gray-700 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </header>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <ul className="flex flex-col px-6 py-6 space-y-4 text-gray-700 font-medium">
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

              {!user && (
                <>
                  <li className="pt-4 border-t border-gray-100">
                    <Link href="/auth/login" className="block py-2">Login</Link>
                  </li>
                  <li>
                    <Link href="/auth/signup">
                      <Button className="w-full bg-purple-600 text-white rounded-2xl">Sign Up</Button>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
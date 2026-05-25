"use client";
import { useState } from "react";
import { Avatar, Button, DropdownMenu } from "@heroui/react";
import Image from "next/image";
import dot from "../../public/assets/blob.svg";
import dog from "../../public/assets/pet.png";
import logo from "../../public/assets/log.png";
import Link from "next/link";
import { Poppins } from "next/font/google";
import NavLink from "./NavLInk";
import { IoMdHome } from "react-icons/io";
import { authClient } from "@/lib/auth-client";

import { RiArrowDropDownLine } from "react-icons/ri";
import DropDown from "./DropDown";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
});

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const users = authClient.useSession();
  const user = users.data?.user;

  return (
    <div className={`${poppins.className}`}>
      <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm">
        <header className="flex h-16 items-center justify-between px-4 md:px-10">
          
          
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 bg-purple-100 rounded-2xl flex items-center justify-center text-2xl">
                🐾
              </div>
              <span className="font-bold text-2xl tracking-tight text-gray-900">FURHOME</span>
            </Link>
          </div>

          
          <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            <li>
              <NavLink href="/" className="flex items-center gap-1.5 hover:text-purple-600 transition-colors">
                <IoMdHome size={20} />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                href="/all-pets" 
                className="hover:text-purple-600 transition-colors font-medium"
              >
                All Pets
              </NavLink>
            </li>
          </ul>

         
          <div className="flex items-center gap-4">
            {!user ? (
              <div className="hidden md:flex items-center gap-4">
                <Link 
                  href="/auth/login" 
                  className="font-medium text-gray-700 hover:text-purple-600 transition-colors"
                >
                  Login
                </Link>
                <Link href="/auth/signup">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 rounded-2xl">
                    Sign Up
                  </Button>
                </Link>
              </div>
            ) : (
              <div className=" items-center   gap-2">
                <DropDown user={user} />
              </div>
            )}

            <button
              className="md:hidden text-gray-700"
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
          </div>
        </header>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <ul className="flex flex-col px-6 py-4 space-y-4 text-gray-700 font-medium">
              <li>
                <Link href="/" className="block py-2">Home</Link>
              </li>
              <li>
                <Link href="/all-pets" className="block py-2">All Pets</Link>
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

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
import Dropdown from "./DropDown";
import { RiArrowDropDownLine } from "react-icons/ri";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
});

export default function DashNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const users = authClient.useSession();
  const user = users.data?.user;

  return (
    <div className={`${poppins.className}`}>
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="mx-auto flex h-16 container items-center justify-between px-6 border">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <Link href="/">
              <div className="flex items-center gap-1.5">
                <Image src={logo} alt="logo"></Image>
                <span className=" font-bold text-2xl">FURHOME</span>
              </div>
            </Link>
          </div>
         
          
           {user && (
            <div className="flex items-center gap-2.5 border rounded-full  hover:bg-orange-500 hover:text-white p-2">
            <Dropdown user={user}/>
              
            </div>
          )}
        </header>
        {isMenuOpen && (
          <div className="border-t border-separator md:hidden">
            <ul className="flex flex-col gap-2 p-4">
              <li>
                <Link href="#" className="block py-2">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-2 font-medium text-accent">
                  All Pets
                </Link>
              </li>

              <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
                <Link href="#" className="block py-2">
                  Login
                </Link>
                <Button>Sign Up</Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

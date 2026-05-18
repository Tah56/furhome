"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


const NavLink = ({href,children}) => {
    const pathname =usePathname()
    const isActive = href=== pathname
    return (
      <Link href={href} className={`${isActive?" border  border-orange-500 p-2 rounded-full text-orange-400":""} flex justify-center items-center`} >{children}</Link>
    );
};

export default NavLink;
"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


const DashLink = ({href,children}) => {
    const pathname =usePathname()
    const isActive = href=== pathname
    return (
      <Link href={href} className={`${isActive?" bg-orange-500  text-white font-bold":""} flex items-center gap-5  px-2 border rounded-2xl p-2 mb-5`} >{children}</Link>
    );
};

export default DashLink;
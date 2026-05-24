"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children, className = "" }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={`${className} flex items-center transition-colors duration-200
        ${isActive 
          ? "text-purple-600 font-semibold border-b-2 border-purple-600 pb-1" 
          : "text-gray-700 hover:text-purple-600"
        }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
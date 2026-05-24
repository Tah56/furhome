"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const DashLink = ({ href, children, className = "" }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link 
      href={href} 
      className={`
        flex items-center gap-3 font-medium px-4 py-3 rounded-2xl mb-2 transition-all duration-200
        ${isActive 
          ? "bg-purple-600 text-white shadow-md" 
          : "text-gray-700 hover:bg-gray-100 hover:text-purple-600"
        }
        ${className}
      `}
    >
      {children}
    </Link>
  );
};

export default DashLink;
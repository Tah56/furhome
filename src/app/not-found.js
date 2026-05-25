"use client";

import Link from "next/link";
import { Button } from "@heroui/react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center px-6 relative overflow-hidden">

  
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full max-w-2xl">

        <div className="bg-white/80 backdrop-blur-2xl border border-white/40 rounded-[40px] p-10 md:p-16 shadow-[0_10px_60px_rgba(0,0,0,0.08)] text-center">

      
          <div className="w-28 h-28 mx-auto rounded-[32px] bg-linear-to-br from-[#7c3aed] to-[#a855f7] flex items-center justify-center shadow-[0_10px_30px_rgba(124,58,237,0.25)]">
            <span className="text-6xl">
              🐾
            </span>
          </div>

     
          <h1 className="text-[90px] md:text-[120px] font-black text-[#111827] tracking-tight leading-none mt-8">
            404
          </h1>


          <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] mt-2">
            Page Not Found
          </h2>

         
          <p className="text-[#6b7280] text-base md:text-lg leading-relaxed mt-5 max-w-xl mx-auto">
            Looks like this page went on a walk without a leash 🐶  
            The page you are looking for does not exist or has been moved.
          </p>

    
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
    <Link href={"/"}>
            <Button
             
             className="bg-[#111827] hover:bg-black text-white px-8 py-6 rounded-2xl text-base shadow-lg hover:scale-[1.02] duration-300"
             >
              Back to Home
            </Button>
                </Link>
                <Link href={"/all-pets"}>

            <Button
              
              variant="outline"
              className="border border-[#e5e7eb] bg-white text-[#374151] hover:bg-[#f9fafb] px-8 py-6 rounded-2xl text-base"
              >
              Explore Pets
            </Button>
                </Link>

          </div>

        </div>
      </div>
    </div>
  );
}
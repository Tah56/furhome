import { ArrowRight, Heart } from "@gravity-ui/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
  <div className="relative min-h-[90vh] flex items-center bg-linear-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
     
      <div className="absolute inset-0 bg-[radial-gradient(#c026d3_0.5px,transparent_1px)] bg-size-[40px_40px] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center relative z-10 py-20">
        
        
        <div className="space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2 shadow-sm animate-slide-up">
            <Heart className="text-pink-500" size={20} />
            <span className="text-sm font-medium text-gray-700">Find your forever friend</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900 animate-slide-up delay-150">
            Give a <span className="text-purple-600">Home</span>,<br />
            Get a <span className="text-purple-600">Companion</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-md animate-slide-up delay-300">
            Connect with loving pets and responsible owners. 
            Make a difference in a furry life today.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 animate-slide-up delay-500">
            <Link
              href="/all-pets"
              className="flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-2xl transition-all hover:scale-105 shadow-lg shadow-purple-200 text-lg group"
            >
              Browse Pets
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/dashboard/add-pet"
              className="flex items-center gap-3 border-2 border-gray-800 hover:bg-gray-900 hover:text-white font-semibold px-8 py-4 rounded-2xl transition-all hover:scale-105 text-lg"
            >
              List Your Pet
            </Link>
          </div>

          
          <div className="flex items-center gap-8 pt-6 animate-slide-up delay-700">
            <div>
              <p className="text-3xl font-bold text-gray-900">500+</p>
              <p className="text-gray-500">Happy Adoptions</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">120+</p>
              <p className="text-gray-500">Pets Available</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">98%</p>
              <p className="text-gray-500">Success Rate</p>
            </div>
          </div>
        </div>

       
        <div className="relative hidden md:block animate-fade-in delay-200">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1543466835-00a7907e9de1"
              alt="Happy dog and cat"
              width={650}
              height={650}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>

      
          <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float z-10">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-3xl">🐶</div>
            <div>
              <p className="font-semibold">Bruno</p>
              <p className="text-sm text-green-600">Just Adopted</p>
            </div>
          </div>

          <div className="absolute -bottom-6 right-8 bg-white rounded-2xl shadow-xl p-4 animate-float delay-300 z-10">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500 text-xl">⭐</span>
              <span className="font-medium">4.9/5</span>
            </div>
            <p className="text-xs text-gray-500">from 240 reviews</p>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Banner;

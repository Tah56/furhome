"use client";
import { authClient } from "@/lib/auth-client";
import { ListBox, SearchField, Select } from "@heroui/react";
import { Label } from "@heroui/react";
import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";

const Filter = () => {
  const router = useRouter();

  const onChange = (e) => {
    const value = e.target.value;

    router.push(
      value
        ? `${process.env.NEXT_PUBLIC_FRONT_URL}/all-pets?search=${value}`
        : `${process.env.NEXT_PUBLIC_FRONT_URL}/all-pets`,{},
    );
  };

  return (
    <div className="bg-white shadow-sm border border-gray-100 rounded-3xl p-6">
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <BiSearch size={20} />
        </div>
        
        <input
          type="text"
          placeholder="Search pets by name, breed, or location..."
          onChange={onChange}
          className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-purple-300 focus:ring-1 focus:ring-purple-200 transition-all"
        />
      </div>
    </div>
  );
};

export default Filter;

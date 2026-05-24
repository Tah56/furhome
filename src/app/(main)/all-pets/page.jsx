import AllPets from "@/component/AllPets";
import Filter from "@/component/Filter";

import { Skeleton, Spinner } from "@heroui/react";
import { data } from "motion/react-client";
import Link from "next/link";
import React, { Suspense } from "react";
import { PiPawPrintBold } from "react-icons/pi";

const allPetsPage = async ({ searchParams }) => {
  const search = (await searchParams) || "";
  console.log(search);

  return (
    <div className="py-20">
      <div className="container  mx-auto  py-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-2xl flex items-center justify-center text-2xl">
                🐾
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">All Pets</h1>
                <p className="text-gray-500 mt-1">
                  Find your perfect furry companion ❤️
                </p>
              </div>
            </div>
          </div>

          {/* Add Pet Button Design */}
          <Link href={"/dashboard/add-pet"}>
          <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg shadow-purple-200 transition-all duration-200 hover:scale-105 active:scale-95">
            <span className="text-xl">+</span>
            <span>Add Pet</span>
          </button>
          </Link>
        </div>
        <Filter></Filter>
        <Suspense
          fallback={
            <div className="grid w-full h-s container mx-auto grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <p className="truncate text-xs text-muted">Shimmer</p>
                <div className="shadow-panel space-y-3 rounded-lg bg-transparent p-4">
                  <Skeleton
                    animationType="shimmer"
                    className="h-20 rounded-lg"
                  />
                  <Skeleton
                    animationType="shimmer"
                    className="h-3 w-3/5 rounded-lg"
                  />
                  <Skeleton
                    animationType="shimmer"
                    className="h-3 w-4/5 rounded-lg"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <p className="truncate text-xs text-muted">Shimmer</p>
                <div className="shadow-panel space-y-3 rounded-lg bg-transparent p-4">
                  <Skeleton
                    animationType="shimmer"
                    className="h-20 rounded-lg"
                  />
                  <Skeleton
                    animationType="shimmer"
                    className="h-3 w-3/5 rounded-lg"
                  />
                  <Skeleton
                    animationType="shimmer"
                    className="h-3 w-4/5 rounded-lg"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <p className="truncate text-xs text-muted">Shimmer</p>
                <div className="shadow-panel space-y-3 rounded-lg bg-transparent p-4">
                  <Skeleton
                    animationType="shimmer"
                    className="h-20 rounded-lg"
                  />
                  <Skeleton
                    animationType="shimmer"
                    className="h-3 w-3/5 rounded-lg"
                  />
                  <Skeleton
                    animationType="shimmer"
                    className="h-3 w-4/5 rounded-lg"
                  />
                </div>
              </div>
            </div>
          }
        >
          <AllPets search={search} />
        </Suspense>
      </div>
    </div>
  );
};

export default allPetsPage;

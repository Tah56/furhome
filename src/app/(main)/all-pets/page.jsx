import AllPets from "@/component/AllPets";
import Filter from "@/component/Filter";

import { Skeleton, Spinner } from "@heroui/react";
import { data } from "motion/react-client";
import React, { Suspense } from "react";
import { PiPawPrintBold } from "react-icons/pi";

const allPetsPage = async ({searchParams}) => {
const search = await searchParams ||''
console.log(search);

  return (
    <div className="py-20">
      <div className="container  mx-auto  py-20">
        <h2 className="font-extrabold text-center text-[#5644e8] text-4xl ">
          Find Your <span className="text-black">Pets</span>
        </h2>
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

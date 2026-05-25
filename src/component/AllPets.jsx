import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { Button, Card } from "@heroui/react";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { BiRightArrow, BiSolidRightArrow } from "react-icons/bi";

const AllPets = async ({ search }) => {
     
     const url = search.search
     ? `${process.env.NEXT_PUBLIC_DB_URL}/all-pets?search=${search?.search}`
     : `${process.env.NEXT_PUBLIC_DB_URL}/all-pets`;
     
   
  const res = await fetch(url);
  const datas = await res.json();
  console.log(datas);
  if (datas) {
  }

  return (
    <div>
      <div
        className="grid rounded-2xl border mt-10  shadow-2xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-10 place-items-center
      "
      >
        {datas.map((pet) => {
          return (
            <div key={pet._id} className="w-full p-5">
              <Card className="cursor-pointer w-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl group">
                {/* Image Section */}
                <div className="relative">
                  {pet.imageUrl ? (
                    <Image
                      src={pet.imageUrl}
                      width={400}
                      height={250}
                      alt={pet.name}
                      className="w-full h-55 object-cover"
                    />
                  ) : (
                    <div className="w-full h-55 bg-gray-100 flex items-center justify-center">
                      {pet.Species?.toLowerCase() === "cat" ? (
                        <span className="text-6xl">🐱</span>
                      ) : pet.Species?.toLowerCase() === "dog" ? (
                        <span className="text-6xl">🐶</span>
                      ) : (
                        <span className="text-5xl">🐾</span>
                      )}
                    </div>
                  )}

                  <div
                    className={`absolute top-3 left-3  ${pet.status === "Accept" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}  text-xs font-medium px-3 py-1 rounded-full`}
                  >
                    {pet.status === "Accept" ? "Adopted" : "Available"}
                  </div>

                  <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow transition-all group-hover:scale-110">
                    <span className="text-xl">🔖</span>
                  </button>
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {pet.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-0.5">{pet.breed}</p>

                  {/* Info Row */}
                  <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      {pet.gender === "Male" ? "♂" : "♀"}{" "}
                      {pet.gender || pet.Species}
                    </div>
                    <div className="flex items-center gap-1">
                      📅 {pet.age || "N/A"}
                    </div>
                    <div className="flex items-center gap-1">
                      📍 {pet.location || "Dhaka"}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mt-3 line-clamp-2">
                    {pet.description ||
                      "Friendly and loving pet looking for a forever home."}
                  </p>

                  <Button
                    className="mt-4 w-full bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium py-3 rounded-2xl text-sm transition-all"
                    isDisabled={pet.status === "Accept"}
                  > 
                    {
                       pet.status !== "Accept" ? (
                      <Link
                      href={`/all-pets/${pet._id}`}
                      className="w-full flex items-center justify-center gap-2"
                    >
                      {pet.status === "Accept" ? "Adopted" : "Adopt Now"}
                      {pet.status && <span className="text-lg">→</span>}
                    </Link>
                    ):(
                      "Adopted" 
                      
                    
                    )
                    
                    }
                  </Button>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllPets;

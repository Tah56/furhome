import { Button, Card } from "@heroui/react";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const AllPets = async ({ search }) => {
  const url = search.search
    ? `http://localhost:8000/all-pets?search=${search?.search}`
    : `http://localhost:8000/all-pets`;

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
              <Card className="cursor-pointer w-full shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden">
                {/* Image Section */}
                <div className="relative">
                  {pet.imageUrl && pet.imageUrl !== "" ? (
                    <Image
                      src={pet.imageUrl}
                      width={1000}
                      height={220}
                      alt={pet.name || "Pet"}
                      className="w-full h-55 object-cover rounded-t-2xl"
                      priority={false}
                    />
                  ) : (
                    <div className="w-full h-55 bg-gray-100 dark:bg-gray-800 rounded-t-2xl flex items-center justify-center">
                      {pet.Species?.toLowerCase() === "cat" ? (
                        <span className="text-6xl">🐱</span>
                      ) : pet.Species?.toLowerCase() === "dog" ? (
                        <span className="text-6xl">🐶</span>
                      ) : (
                        <span className="text-5xl">🐾</span>
                      )}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 space-y-2">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    {pet.name}
                  </h2>
                  <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <p>
                      <strong>Type:</strong> {pet.Species}
                    </p>
                    <p>
                      <strong>Breed:</strong> {pet.breed || "Unknown"}
                    </p>
                    <p>
                      <strong>Price:</strong>{" "}
                      {pet.price ? `৳${pet.price}` : "N/A"}
                    </p>
                  </div>
                </div>

                {/* Button */}
                <div className="p-4 pt-0">
                  <Button
                    className="w-full"
                    disabled={pet.status === "Accept"}
                    asChild
                  >
                    <Link href={`/all-pets/${pet._id}`}>
                      {pet.status === "Accept"
                        ? "✅ Adopted"
                        : "View Full Details"}
                    </Link>
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

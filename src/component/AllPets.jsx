import { Button, Card } from "@heroui/react";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";


const AllPets = async ({search}) => {
  
  const url = search.search
    ? `http://localhost:8000/all-pets?search=${search?.search}`
    : `http://localhost:8000/all-pets`;

  const res = await fetch(url);
  const datas = await res.json();
  console.log(datas);
  if(datas){
    
  }
  
  return (
    <div>
      
      <div className="grid rounded-2xl border mt-10  shadow-2xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-10 place-items-center
      ">
        {datas.map((pet) => {
          return (
            <div key={pet._id} className="w-full  p-5">
              <Card className="cursor-pointer w-full shadow-2xl hover:scale-110 duration-400 ease-in-out">
                <div className="" >
                    {
                        pet.imageUrl? 
                        <Image
                          src={pet.imageUrl!==""?pet.imageUrl: "/"}
                          width={1000}
                          height={200}
                          alt={pet.name}
                          className="object-cover rounded-t-2xl"
                        />:<div className="w-full backdrop-brightness-90 rounded-2xl h-50 flex items-center justify-center ">{pet.Species==="cat"?<sapn className=" text-5xl">🐈</sapn>:pet.Species==="dog"?<sapn className=" text-5xl">🐶</sapn>:"mara kah"}</div>
                    }
                </div>
                <div>
                  <h2>NAME: {pet?.name}</h2>
                  <h2>Animal Type: {pet?.Species}</h2>
                  <h2>Breed:{pet?.breed}</h2>
                  <h2>Price: {pet?.price}</h2>
                </div>
                  <Button isDisabled={pet.status==="Accept"} >
                <Link className={"ml-auto"} href={`/all-pets/${pet._id}`}>
                    {pet.status==="Accept"? "Adopted" : "Full details"}
                </Link>
                    </Button>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllPets;

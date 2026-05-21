import RequestModal from '@/component/RequestModal';
import { auth } from '@/lib/auth';
import { Button, Card } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ListingPage  = async() => {
    const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
const user =session?.user
console.log(user?.id);

    const res = await fetch(`http://localhost:8000/listing/${user?.id}`)
    const data =await res.json()

  const response = await fetch(`http://localhost:8000/my-pet-requests/${user?.email}`)
  const datas =await response.json()
    return (
        <div>
            <h2>ListingPage</h2>
            <div  className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-2 place-items-center
      ">


            {
                data.map(list=>{
                    return(
                        <div key={list._id} className="w-full p-5">
              <Card className="cursor-pointer w-full h-full shadow-2xl hover:scale-110 duration-400 ease-in-out">
                <div className="" >
                    {
                        list.imageUrl? 
                        <Image
                        src={list.imageUrl!==""?list.imageUrl: "/"}
                        width={1000}
                        height={200}
                        alt={list.name}
                        className="object-cover rounded-t-2xl"
                        />:<div className="w-full backdrop-brightness-90 rounded-2xl h-50 flex items-center justify-center ">{list.Species==="cat"?<sapn className=" text-5xl">🐈</sapn>:list.Species==="dog"?<sapn className=" text-5xl">🐶</sapn>:"mara kah"}</div>
                    }
                </div>
                <div>
                  <h2>NAME: {list?.name}</h2>
                  <h2>Animal Type: {list?.Species}</h2>
                  <h2>Breed:{list?.breed}</h2>
                  <h2>Price: {list?.price}</h2>
                </div>
                <Link className={"ml-auto"} href={`/all-pets/${list._id}`}>
                  <Button>Full details</Button>
                </Link>
                  <RequestModal datas={datas}></RequestModal>
              </Card>
            </div>
                    )
                })
            }
            </div>
        </div>
    );
};

export default ListingPage;
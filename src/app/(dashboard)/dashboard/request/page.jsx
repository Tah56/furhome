import { Delete } from '@/component/Delete';
import { auth } from '@/lib/auth';
import { Button, Card } from '@heroui/react';
import { div } from 'motion/react-client';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const requestpage = async() => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const user =session?.user
    console.log(user?.email);
    const res =await fetch(`http://localhost:8000/requsts?email=${user?.email}`)
    const data = await res.json()
    console.log(data);
    
    return (
        <div className='grid grid-cols-3'>
            <h3 className=''>
                fuck you to jonny
                <div>
                {

                    data.map(list=>{
                        return(
                            <div key={list._id} className="w-full  p-5">
              <Card className="cursor-pointer w-full shadow-2xl hover:scale-110 duration-400 ease-in-out">
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
                  <h2>Price: {list?.petId}</h2>
                </div>
                <div>

                <Link className={"ml-auto"} href={`/all-pets/${list.petId}`}>
                  <Button>Full details</Button>
                </Link>
                <Delete list={list}></Delete>
                </div>
              </Card>
            </div>
                    )
                })
            }
            </div>

            </h3>
        </div>
    );
};

export default requestpage;
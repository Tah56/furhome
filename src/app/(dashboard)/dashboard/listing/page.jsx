import { DeleteList } from '@/component/DeleteList';
import RequestModal from '@/component/RequestModal';
import { auth } from '@/lib/auth';
import { Button, Card } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ListingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  const user = session?.user;
  const { token } = await auth.api.getToken({
    headers: await headers()
  });

  const res = await fetch(`http://localhost:8000/listing/${user?.id}`, {
    headers: {
      authorization: `Bearer ${token}`
    },
    cache: 'no-store'
  });

  const data = await res.json();

  const response = await fetch(`http://localhost:8000/my-pet-requests/${user?.email}`);
  const datas = await response.json();

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">My Listed Pets</h1>
          <p className="text-gray-600 mt-2">Manage all your pets available for adoption</p>
        </div>

        {data.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl">
            <p className="text-6xl mb-4">🐾</p>
            <h3 className="text-2xl font-semibold">No Pets Listed Yet</h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((list) => (
              <div key={list._id} className="w-full">
                <Card className="cursor-pointer w-full h-full shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 rounded-3xl overflow-hidden bg-white">
                  
             
                  <div className="relative">
                    {list.imageUrl ? (
                      <Image
                        src={list.imageUrl}
                        width={1000}
                        height={250}
                        alt={list.name}
                        className="w-full h-57.5 object-cover"
                      />
                    ) : (
                      <div className="w-full h-57.5 bg-gray-100 flex items-center justify-center">
                        {list.Species === "cat" ? (
                          <span className="text-6xl">🐱</span>
                        ) : list.Species === "dog" ? (
                          <span className="text-6xl">🐶</span>
                        ) : (
                          <span className="text-5xl">🐾</span>
                        )}
                      </div>
                    )}
                  </div>

                
                  <div className="p-5 space-y-3 flex-1">
                    <h2 className="text-xl font-bold text-gray-900">{list.name}</h2>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p><strong>Species:</strong> {list.Species}</p>
                      <p><strong>Breed:</strong> {list.breed}</p>
                      <p><strong>Price:</strong> ৳{list.price || "N/A"}</p>
                    </div>
                  </div>

            
                  <div className="p-5 pt-0 flex flex-col gap-3">
                    <Link href={`/all-pets/${list._id}`}>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-2xl py-6">
                        View Full Details
                      </Button>
                    </Link>

                    <div className="flex flex-col md:flex gap-3">
                      <DeleteList list={list} />
                      <RequestModal datas={datas} list={list} />
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListingPage;
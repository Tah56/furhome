
import { Delete } from '@/component/Delete';
import { auth } from '@/lib/auth';
import { Button, Card } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const RequestPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  const user = session?.user;
  const { token } = await auth.api.getToken({
    headers: await headers()
  });

  const res = await fetch(`http://localhost:8000/requsts?email=${user?.email}`, {
    headers: {
      authorization: `Bearer ${token}`
    },
    cache: 'no-store' // Add this for fresh data
  });

  const data = await res.json();

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">My Adoption Requests</h1>
          <p className="text-gray-600 mt-2">Track all your pet adoption applications</p>
        </div>

        {data.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-2xl font-semibold mb-2">No Requests Yet</h3>
            <p className="text-gray-500">You haven't applied for any pets yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((list) => (
              <div key={list._id} className="w-full">
                <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl h-full flex flex-col">
                  
                  {/* Image */}
                  <div className="relative">
                    {list.imageUrl ? (
                      <Image
                        src={list.imageUrl}
                        width={400}
                        height={250}
                        alt={list.petName}
                        className="w-full h-55 object-cover"
                      />
                    ) : (
                      <div className="w-full h-55 bg-gray-100 flex items-center justify-center">
                        <span className="text-6xl">🐾</span>
                      </div>
                    )}

                    <div className={`absolute top-4 left-4 px-4 py-1 rounded-full text-xs font-medium
                      ${list.status === "Accept" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                      {list.status === "Accept" ? "Adopted" : "Pending"}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 capitalize">{list.petName}</h3>
                    <p className="text-gray-500 text-sm mt-1">{list.breed}</p>

                    <div className="mt-4 space-y-1 text-sm text-gray-600">
                      <p><strong>Species:</strong> {list.Species}</p>
                      <p><strong>pick Up Date:</strong> {list.PickUp}</p>
                      <p><strong>Request Date:</strong> {list.createdAt}</p>
                      <p><strong>Status:</strong> 
                        <span className={`font-medium ${list.status === "Accept" ? "text-green-600" : "text-amber-600"}`}>
                          {list.status || "Pending"}
                        </span>
                      </p>
                    </div>

                    <div className="mt-auto pt-6 flex gap-3">
                      <Button 
                        className="flex-1 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl"
                        disabled={list.status === "Accept"}
                      >
                        <Link href={`/all-pets/${list.petId}`}>
                          {list.status === "Accept" ? "Adopted" : "View Details"}
                        </Link>
                      </Button>

                      {list.status !== "Accept" && (
                        <Delete list={list} />
                      )}
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

export default RequestPage;
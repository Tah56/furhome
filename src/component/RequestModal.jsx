"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Modal } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function RequestModal({ datas, list }) {
  const router = useRouter();
  const filters = datas.filter((pet) => pet.petId === list._id);

  const statusUpdate = async (newStatus) => {
    try {
      const { data: tokenData } = await authClient.token();

      const res = await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/my-pet-requests/${list._id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        toast.success(`Request ${newStatus.toLowerCase()} successfully!`);
        router.refresh(); // Refresh the page to show updated data
      } else {
        toast.error("Failed to update status");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  };

  return (
    <Modal>
      {/* Trigger Button */}
      <Button 
        variant="outline" 
        className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 rounded-2xl py-6"
      >
        View Requests ({filters.length})
      </Button>

      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-lg">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading className="text-xl font-semibold">
                Adoption Requests for <span className="text-purple-600">{list.name}</span>
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body className="max-h-[60vh] overflow-y-auto space-y-6">
              {filters.length === 0 ? (
                <p className="text-center text-gray-500 py-10">No requests yet for this pet.</p>
              ) : (
                filters.map((pet) => (
                  <div 
                    key={pet._id} 
                    className="bg-gray-50 p-5 rounded-2xl border border-gray-100"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-lg">{pet.name}</p>
                        <p className="text-sm text-gray-600">{pet.email}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        pet.status === "Accept" ? "bg-green-100 text-green-700" : 
                        pet.status === "Reject" ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"
                      }`}>
                        {pet.status || "Pending"}
                      </span>
                    </div>

                    {pet.status !== "Accept" && pet.status !== "Reject" && (
                      <div className="flex gap-3 mt-5">
                        <Button 
                          onClick={() => statusUpdate("Accept")}
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-2xl"
                        >
                          Accept
                        </Button>
                        <Button 
                          onClick={() => statusUpdate("Reject")}
                          variant="outline"
                          className="flex-1 border-red-500 text-red-600 hover:bg-red-50 rounded-2xl"
                        >
                          Reject
                        </Button>
                      </div>
                    )}
                  </div>
                ))
              )}
            </Modal.Body>

            <Modal.Footer>
              <Button className="w-full" slot={"close"} onClick={() => router.refresh()}>
                Close
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
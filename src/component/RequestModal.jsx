"use client";

import { authClient } from "@/lib/auth-client";
import { Rocket } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
import { redirect } from "next/navigation";

export default function RequestModal({ datas, data, list }) {
  const filters = datas.filter((pet) => pet.petId === list._id);
  console.log(list);
  const statusUpdate = async (e) => {
    const value = e.target.innerText;
    const {data:tokenData}= await authClient.token()
    const res = await fetch(
      `http://localhost:8000/my-pet-requests/${list._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`
        },
        body: JSON.stringify({
          status: value,
          userId,
        }),
      },
    );
    console.log(value);
    const d = res;
    console.log(d);

    if (d.ok) {
      redirect("/dashboard/listing");
    }
  };
  return (
    <Modal>
      <Button variant="secondary">Open Modal</Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-90">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Welcome to HeroUI</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              {filters.map((pet) => {
                // const filter = filters.filter((pet) => pet.petId === list._id);
                // console.log(filter);

                return (
                  <div key={pet._id}>
                    <p>ReqName :{pet.name}</p>
                    <p>{pet.petName}</p>
                    <p>{pet.email}</p>
                    <p>{pet.status}</p>
                    <p>{pet._id}</p>

                    {pet.status !== "Accept" && (
                      <div>
                        <Button onClick={statusUpdate} slot="close">
                          Accept
                        </Button>
                        <Button slot={"close"}>Rejected</Button>
                      </div>
                    )}
                  </div>
                );
              })}
            </Modal.Body>
            <Modal.Footer>
              <Button className="w-full">Continue</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}

"use client";

import { authClient } from "@/lib/auth-client";
import { Rocket } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
import { redirect } from "next/navigation";


export default function RequestModal({ datas ,data,list }) {

const filters = datas.filter(pet=> pet.petId ===list._id)
  console.log(filters);
  
       
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

                  {filters.map(pet=>{
                    
        const filter = filters.filter(pet=> pet.petId ===list._id) 
        console.log(filter);
             
         
                    return(

                      <div key={filter.petId}>
                    <p>ReqName :{pet.name}</p>
                    <p>{pet.petName}</p>
                    <p>{pet.petId}</p>
                 
                    <Button slot="close">Accept</Button>
                    <Button>Rejected</Button>
                  </div>
                  )
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

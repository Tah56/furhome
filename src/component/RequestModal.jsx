"use client";

import { authClient } from "@/lib/auth-client";
import { Rocket } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";

export default function RequestModal({ datas }) {



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
              {datas.map((requsts) => {
                return (
                  <div key={requsts.petId}>
                    <p>ReqName :{requsts.name}</p>
                    <p>{requsts.petName}</p>
                    <p>{requsts.email}</p>
                    <p>{requsts.status}</p>
                    <Button slot="close">Accept</Button>
                    <Button>Rejected</Button>
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

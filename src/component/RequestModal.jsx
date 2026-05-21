"use client";

import { authClient } from "@/lib/auth-client";
import { Rocket } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";

export default function RequestModal({ datas }) {
  console.log(datas);
  
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
                return(

                  <><p>
                    ReqName :
                    {requsts.name}
                  </p><p>
                      {requsts.petName}
                    </p><p>
                      {requsts.email}
                    </p></>
                )
              }
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button className="w-full" slot="close">
                Continue
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}

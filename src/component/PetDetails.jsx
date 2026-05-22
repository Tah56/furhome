"use client";

import Image from "next/image";
import { FloppyDisk } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  Modal,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { CgEditFade } from "react-icons/cg";
import { toast } from "react-toastify";
import Link from "next/link";
import { EditPage } from "./EditPet";
const PetDetails = ({ pets }) => {
  console.log(pets);
  const users = authClient.useSession();
  const user = users.data?.user;
  console.log(user?.email, pets.email);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const pet = {
      ...Object.fromEntries(formData.entries()),
      OwnerEmail: pets?.email,
      petId: pets._id,
      userId: user?.id,
      imageUrl: pets.imageUrl,
      status: "pending",
    };

    const res = await fetch("http://localhost:8000/list-pet", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(pet),
    });
    const d = await res.json();

    console.log(d);

    if (d) {
      toast.error(d.message);
    }
  };

  return (
    <div>
      {
        user?.email !== pets.email && 
      <div>
         
          <Form className={`w-full max-w-96 `} onSubmit={onSubmit}>
            <Fieldset>
              <Fieldset.Legend>Profile Settings</Fieldset.Legend>
              <Description>Update your profile information.</Description>
              <FieldGroup>
                <TextField isRequired name="petName">
                  <Label>Pet Name</Label>
                  <Input placeholder="" value={`${pets?.name}`} />
                  <FieldError />
                </TextField>
                <TextField isRequired value={`${user?.name}`} name="name">
                  <Label>Name</Label>
                  <Input placeholder="John Doe" />
                  <FieldError />
                </TextField>
                <TextField isRequired name="email" type="email">
                  <Label>Email</Label>
                  <Input
                    readOnly
                    value={`${user?.email}`}
                    placeholder="john@example.com"
                    />
                  <FieldError />
                </TextField>
                <TextField isRequired name="bio">
                  <Label>Bio</Label>
                  <TextArea placeholder="Tell us about yourself..." />
                  <Description>Minimum 10 characters</Description>
                  <FieldError />
                </TextField>
              </FieldGroup>
              <Fieldset.Actions>
                <Button type="submit">Adaption Request</Button>
              </Fieldset.Actions>
            </Fieldset>
          </Form>
       
      </div>
      }
        <div>
        {

          user?.email === pets.email && 
      <div>
        <EditPage pets={pets}></EditPage>
      </div>
      }
        </div>
    </div>
  );
};

export default PetDetails;

"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  Surface,
  Select,
  TextField,
  ListBox,
  TextArea,
} from "@heroui/react";
import Image from "next/image";
import React from "react";
import { toast } from "react-toastify";

export function EditPage({ pets }) {
  const EditFormData = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const datas = Object.fromEntries(formData.entries());
    console.log(datas);
    const { data: token } = await authClient.token();
    console.log(token);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/list-pets/${pets._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token?.token}`,
        },
        body: JSON.stringify(datas),
      },
    );
    const d = res;
    if (d.ok) {
      toast.success('pet edit sucessful')
     
    }
   
  };
  return (
    <Modal>
      <Button
        className={
          "bg-purple-600 hover:bg-purple-700 text-white px-10 py-6 text-lg rounded-2xl"
        }
        variant="secondary"
      >
        Edit
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
              {pets.name}
              </Modal.Icon>
              <Modal.Heading>Edit Pet Details</Modal.Heading>
             
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={EditFormData} className="space-y-8">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="md:col-span-2">
                           <TextField defaultValue={pets?.name || ""} name="name" isRequired>
                             <Label>Pet Name</Label>
                             <Input placeholder="Bruno"  className="rounded-2xl" />
                           </TextField>
                         </div>
               
                         <TextField defaultValue={pets?.breed || ""} name="breed" isRequired>
                           <Label>Breed</Label>
                           <Input placeholder="Golden Retriever"  className="rounded-2xl" />
                         </TextField>
               
                         <div>
                           <Select defaultValue={pets?.Species || ""} name="Species" placeholder="Select Species" isRequired>
                             <Label>Species</Label>
                             <Select.Trigger className="rounded-2xl">
                               <Select.Value  />
                               <Select.Indicator />
                             </Select.Trigger>
                             <Select.Popover>
                               <ListBox>
                                 <ListBox.Item id="dog" textValue="dog">
                                   Dog
                                 </ListBox.Item>
                                 <ListBox.Item id="cat" textValue="cat">
                                   Cat
                                 </ListBox.Item>
                                 <ListBox.Item id="turtle" textValue="turtle">
                                   Turtle
                                 </ListBox.Item>
                                 <ListBox.Item id="rabbit" textValue="rabbit">
                                   Rabbit
                                 </ListBox.Item>
                               </ListBox>
                             </Select.Popover>
                           </Select>
                         </div>
               
                         <div>
                           <Select placeholder="Select Gender" defaultValue={pets?.gender || ""} name="gender" isRequired>
                             <Label>Gender</Label>
                             <Select.Trigger className="rounded-2xl">
                               <Select.Value  />
                               <Select.Indicator />
                             </Select.Trigger>
                             <Select.Popover>
                               <ListBox>
                                 <ListBox.Item id="male" textValue="male">
                                   Male
                                 </ListBox.Item>
                                 <ListBox.Item id="female" textValue="female">
                                   Female
                                 </ListBox.Item>
                               </ListBox>
                             </Select.Popover>
                           </Select>
                         </div>
               
                         <TextField name="age" defaultValue={pets?.age || ""} isRequired>
                           <Label>Age</Label>
                           <Input placeholder="2 years" className="rounded-2xl" />
                         </TextField>
               
                         <TextField  defaultValue={pets?.location || ""} name="location" isRequired>
                           <Label>Location</Label>
                           <Input placeholder="Dhaka, Bangladesh" className="rounded-2xl" />
                         </TextField>
               
                         <TextField name="price" defaultValue={pets?.price || ""}isRequired>
                           <Label>Price (৳)</Label>
                           <Input type="number" placeholder="15000" className="rounded-2xl" />
                         </TextField>
               
                         <div>
                           <Select name="vaccine" defaultValue={pets?.vaccine || ""} placeholder="Vaccination Status" isRequired>
                             <Label>Vaccination Status</Label>
                             <Select.Trigger className="rounded-2xl">
                               <Select.Value  />
                               <Select.Indicator />
                             </Select.Trigger>
                             <Select.Popover>
                               <ListBox>
                                 <ListBox.Item id="yes" textValue="yes">
                                   Vaccinated
                                 </ListBox.Item>
                                 <ListBox.Item id="no" textValue="no">
                                   Not Vaccinated
                                 </ListBox.Item>
                               </ListBox>
                             </Select.Popover>
                           </Select>
                         </div>
               
                         <div className="md:col-span-2">
                           <TextField name="imageUrl" defaultValue={pets?.imageUrl || ""}>
                             <Label>Image URL<span className="text-gray-400 text-sm ml-1">
                     (Only Imgbb Photo Links)
                   </span></Label>
                             <Input
                               type="url"
                               placeholder="https://example.com/pet-image.jpg"
                               className="rounded-2xl"
                             />
                           </TextField>
                         </div>
               
                         <div className="md:col-span-2">
                           <TextField    defaultValue={pets?.description || ""}
                               name="description" isRequired>
                             <Label>Description</Label>
                             <TextArea
                               placeholder="Write a friendly description about your pet..."
                               className="rounded-3xl min-h-30"
                              
                             />
                           </TextField>
                         </div>
                       </div>
               
                       <TextField name="email"  defaultValue={pets?.email || ""}>
                         <Label>Owner Email</Label>
                         <Input
                           type="email"
                           readOnly
                          
                           className="rounded-2xl bg-gray-50"
                         />
                       </TextField>
               
                       <Button
                         type="submit"
                         slot={'close'}
                         className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 text-lg rounded-2xl font-semibold transition-all"
                       >
                         Edit Pet
                       </Button>
                     </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}

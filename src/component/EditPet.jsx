"use client";

import { authClient } from "@/lib/auth-client";
import {Envelope} from "@gravity-ui/icons";
import {Button, FieldError, Input, Label, Modal, Surface, Select,TextField, ListBox, TextArea} from "@heroui/react";

export function EditPage({pets}) {

  const EditFormData = async(e)=>{
      const {data:token} = await authClient.token()
console.log(token);

     e.preventDefault()
      const formData = new FormData(e.currentTarget);
    const datas = Object.fromEntries(formData.entries())
    console.log(datas);
    const res = await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/list-pets/${pets._id}`,{
      method:"PATCH",
       headers: {
        "content-type": "application/json",
        authorization:`Bearer ${token?.token}`
      },
      body: JSON.stringify(datas),
    })
    const d = res
    console.log(d)
  }
  return (
    <Modal>
      <Button variant="secondary">Edit</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Contact Us</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and we'll get back to you. The modal adapts automatically
                when the keyboard appears on mobile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={EditFormData}
                            className="p-10 space-y-8"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                             
                              <div className="md:col-span-2">
                                <TextField defaultValue={pets.name} name="name" isRequired>
                                  <Label>Pet Name</Label>
                                  <Input  placeholder="Duke" className="rounded-2xl" />
                                  <FieldError />
                                </TextField>
                              </div>
                
                          
                              <TextField defaultValue={pets.breed} name="breed" isRequired>
                                <Label>breed</Label>
                                <Input  placeholder="german sheperd" className="rounded-2xl" />
                                <FieldError />
                              </TextField>
                
                           
                              <div>
                                <Select
                                  name="gender"
                                  isRequired
                                  className="w-full"
                                  placeholder="Select Gender"
                                  defaultValue={`${pets.gender}`}
                                >
                                  <Label>gender</Label>
                                  <Select.Trigger className="rounded-2xl">
                                    <Select.Value />
                                    <Select.Indicator />
                                  </Select.Trigger>
                                  <Select.Popover>
                                    <ListBox>
                                      <ListBox.Item id="ale" textValue="male">
                                        Male
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                      <ListBox.Item id="Female" textValue="Female">
                                        Female
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                      <ListBox.Item id="Unknown" textValue="Unknown">
                                        Unknown
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                      </ListBox>
                                  </Select.Popover>
                                </Select>
                              </div>
                
                              <TextField      defaultValue={`${pets.locaiton}`} name="locaiton" type="text" isRequired>
                                <Label>Location</Label>
                                <Input
                           
                                  type="location"
                                  placeholder=""
                                  className="rounded-2xl"
                                />
                                <FieldError />
                              </TextField>
                
                         
                
                              <div>
                                <Select
                                  name="Species"
                                  isRequired
                                  className="w-full"
                                  placeholder="Select Species"
                                   value={`${pets.Species}`}
                                >
                                  <Label>Species</Label>
                                  <Select.Trigger className="rounded-2xl">
                                    <Select.Value />
                                    <Select.Indicator />
                                  </Select.Trigger>
                                  <Select.Popover>
                                    <ListBox>
                                      <ListBox.Item id="dog" textValue="dog">
                                        Dog
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                      <ListBox.Item id="cat" textValue="cat">
                                        Cat
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                      <ListBox.Item id="turtule" textValue="turtule">
                                        Turtle
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                      </ListBox>
                                  </Select.Popover>
                                </Select>
                              </div>
                              
                            
                              <div className="md:col-span-2">
                                <TextField name="email" type="email" >
                                  <Label>owner email</Label>
                                  <Input type="text" readOnly value={`${pets.email}`} className="rounded-2xl" />
                                  <FieldError />
                                </TextField>
                              </div>
                
                          
                              <div className="md:col-span-2">
                                <TextField defaultValue={pets.imageUrl} name="imageUrl" >
                                  <Label>Image URL</Label>
                                  <Input
                                    type="url"
                                    placeholder="https://example.com/bali-paradise.jpg"
                                    className="rounded-2xl"
                                  />
                                  <FieldError />
                                </TextField>
                              </div>
                
                            
                              <div className="md:col-span-2">
                                <TextField defaultValue={pets.description} name="description" isRequired>
                                  <Label>Description</Label>
                                  <TextArea
                                    placeholder="Describe the travel experience..."
                                    className="rounded-3xl"
                                  />
                                  <FieldError />
                                </TextField>
                              </div>
                            </div>
                
                      
                
                           
          
              <Button  slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" slot="close">Update Pet</Button>
                          </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
"use client"
import { authClient } from '@/lib/auth-client';
import { Button, FieldError, Input, Label, ListBox, TextField,Select, TextArea } from '@heroui/react';

import { redirect } from 'next/navigation';
import React from 'react';

const AddPet = () => {
  const users = authClient.useSession();
    const user = users.data?.user;
   console.log(user?.id);
   
    
    const formData = async(e)=>{
      e.preventDefault()
      const formData = new FormData(e.currentTarget);
    const datas = {...Object.fromEntries(formData.entries()),
      UserEmail:user?.email,
      userId:user?.id
    }
    const {data:token} = await authClient.token()
console.log(token);

    const res= await fetch("http://localhost:8000/list-pets",{
      method: 'POST',
      headers:{
        'content-type':'application/json',
        authorization:`Bearer ${token?.token}`
      },
      body:JSON.stringify(datas)
    })
    const dat= await res.json()
    console.log(dat);
    if(dat.insertedId){
      redirect('/dashboard/listing')
    }
    
    }
    return (
        <div className=''>
            <form onSubmit={formData}
            className="p-10 space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Destination Name */}
              <div className="md:col-span-2">
                <TextField name="name" isRequired>
                  <Label>Pet Name</Label>
                  <Input placeholder="Duke" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              {/* Country */}
              <TextField name="breed" isRequired>
                <Label>breed</Label>
                <Input placeholder="german sheperd" className="rounded-2xl" />
                <FieldError />
              </TextField>

              {/* Category - Updated Select Component */}
              <div>
                <Select
                  name="gender"
                  isRequired
                  className="w-full"
                  placeholder="Select Gender"
                >
                  <Label>gender</Label>
                  <Select.Trigger className="rounded-2xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="male" textValue="male">
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

              {/* Price */}
              <TextField name="locaiton" type="text" isRequired>
                <Label>Location</Label>
                <Input
                  type="location"
                  placeholder=""
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* Duration */}

              <div>
                <Select
                  name="Species"
                  isRequired
                  className="w-full"
                  placeholder="Select Gender"
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
              <TextField name="duration" >
                <Label>Duration</Label>
                <Input
                  placeholder="7 Days / 6 Nights"
                  className="rounded-2xl"
                  type='date'
                />
                <FieldError />
              </TextField>
              {/* Departure Date */}
              <div className="md:col-span-2">
                <TextField name="email" type="email" >
                  <Label>owner email</Label>
                  <Input type="text" readOnly value={`${user?.email}`} className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              {/* Image URL - Removed preview */}
              <div className="md:col-span-2">
                <TextField name="imageUrl" >
                  <Label>Image URL</Label>
                  <Input
                    type="url"
                    placeholder="https://example.com/bali-paradise.jpg"
                    className="rounded-2xl"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <TextField name="description" isRequired>
                  <Label>Description</Label>
                  <TextArea
                    placeholder="Describe the travel experience..."
                    className="rounded-3xl"
                  />
                  <FieldError />
                </TextField>
              </div>
            </div>

            {/* Buttons */}

            <Button
              type="submit"
              variant="outline"
           
              className=" rounded-none w-full bg-cyan-500 text-white"
            >
              Add Pet
            </Button>
          </form>
        </div>
    );
};

export default AddPet;
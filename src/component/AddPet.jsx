"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Input,
  Label,
  Select,
  TextArea,
  TextField,
  ListBox,
} from "@heroui/react";
import { toast } from "react-toastify";
import React from "react";
import { redirect } from "next/navigation";

const AddPet = () => {
  const users = authClient.useSession();
  const user = users.data?.user;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const petData = {
      ...Object.fromEntries(formData.entries()),
      UserEmail: user?.email,
      userId: user?.id,
      status: "available",
      createdAt: new Date().toISOString(),
    };

      const { data: token } = await authClient.token();

      const res = await fetch("http://localhost:8000/list-pets", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token?.token}`,
        },
        body: JSON.stringify(petData),
      });

      const result = await res.json();
console.log(token?.token);

      console.log(result);
      if (result.insertedId) {
        
        toast.success("Pet added successfully! 🐾");
        redirect("/dashboard/listing");
      } else {
        toast.error(result.message || "Failed to add pet");
      }
    
  };

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Add New Pet</h1>
        <p className="text-gray-500 mt-2">List your pet for adoption</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <TextField name="name" isRequired>
              <Label>Pet Name</Label>
              <Input placeholder="Bruno" className="rounded-2xl" />
            </TextField>
          </div>

          <TextField name="breed" isRequired>
            <Label>Breed</Label>
            <Input placeholder="Golden Retriever" className="rounded-2xl" />
          </TextField>

          <div>
            <Select name="Species" isRequired>
              <Label>Species</Label>
              <Select.Trigger className="rounded-2xl">
                <Select.Value placeholder="Select Species" />
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
            <Select name="gender" isRequired>
              <Label>Gender</Label>
              <Select.Trigger className="rounded-2xl">
                <Select.Value placeholder="Select Gender" />
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

          <TextField name="age" isRequired>
            <Label>Age</Label>
            <Input placeholder="2 years" className="rounded-2xl" />
          </TextField>

          <TextField name="location" isRequired>
            <Label>Location</Label>
            <Input placeholder="Dhaka, Bangladesh" className="rounded-2xl" />
          </TextField>

          <TextField name="price" isRequired>
            <Label>Price (৳)</Label>
            <Input type="number" placeholder="15000" className="rounded-2xl" />
          </TextField>

          <div>
            <Select name="vaccine" isRequired>
              <Label>Vaccination Status</Label>
              <Select.Trigger className="rounded-2xl">
                <Select.Value placeholder="Vaccination Status" />
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
            <TextField name="imageUrl">
              <Label>Image URL</Label>
              <Input
                type="url"
                placeholder="https://example.com/pet-image.jpg"
                className="rounded-2xl"
              />
            </TextField>
          </div>

          <div className="md:col-span-2">
            <TextField name="description" isRequired>
              <Label>Description</Label>
              <TextArea
                placeholder="Write a friendly description about your pet..."
                className="rounded-3xl min-h-30"
              />
            </TextField>
          </div>
        </div>

        <TextField name="email">
          <Label>Owner Email</Label>
          <Input
            type="email"
            readOnly
            value={user?.email || ""}
            className="rounded-2xl bg-gray-50"
          />
        </TextField>

        <Button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 text-lg rounded-2xl font-semibold transition-all"
        >
          Add Pet for Adoption
        </Button>
      </form>
    </div>
  );
};

export default AddPet;

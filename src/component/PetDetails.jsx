"use client";

import Image from "next/image";
import { FloppyDisk, Heart, MapPin, Shield } from "@gravity-ui/icons";
import {
  Button,
  Calendar,
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
import { BiLocationPlus, BiMaleSign, BiPhone } from "react-icons/bi";
import { IoCalendar } from "react-icons/io5";
import { BsMailbox } from "react-icons/bs";
const PetDetails = ({ pets }) => {
  console.log(pets);
  const users = authClient.useSession();
  const user = users.data?.user;
  console.log(user?.email, pets.email);

  const onSubmit = async (e) => {
    e.preventDefault();
    const {data:token} = await authClient.token()
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
           authorization:`Bearer ${token?.token}`
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
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-3xl max-w-5xl w-full max-h-[95vh] overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center">
              🐾
            </div>
            <div>
              <h1 className="text-2xl font-bold">Send Adoption Request</h1>
              <p className="text-gray-500 dark:text-gray-400">Fill out the form below to send an adoption request for {pets.name}.</p>
            </div>
          </div>
          <button  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
           
          </button>
        </div>

        <div className="flex flex-col lg:flex-row h-full">
          
          {/* Left Column - Pet & Owner Info */}
          <div className="lg:w-5/12 bg-gray-50 dark:bg-gray-950 p-6 space-y-6 overflow-auto">
            
            {/* About Pet */}
            <div className="bg-white  rounded-2xl p-5 shadow-sm">
              <h2 className="font-semibold text-lg mb-4">About {pets.name}</h2>
              
              <div className="flex gap-4">
                <div className="w-32 h-32 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src={pets.imageUrl}
                    alt={pets.name}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                
                <div className="space-y-2 text-sm">
                  <h3 className="text-2xl font-bold">{pets.name}</h3>
                  <p className="text-purple-600 font-medium">{pets.breed}</p>
                  
                  <div className="flex items-center gap-2">
                    <span>♂</span>
                    <span>{pets.gender || 'Male'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📅</span>
                    <span>{pets.age || '2 Years'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{pets.location || 'Dhaka, Bangladesh'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <span>✅</span>
                    <span>{pets.vaccine}</span>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {pets.description || "Bruno is friendly, playful and loves people. He is well-trained and always ready for a game of fetch!"}
              </p>
            </div>

            {/* About Owner */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="font-semibold text-lg mb-4">About the Owner</h2>
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src="/owner-avatar.jpg" // Replace with actual owner image
                    alt={user?.name}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{user?.name}</h3>
                  <div className="space-y-1 mt-2 text-sm text-gray-600 dark:text-gray-400">
                    <p className="flex items-center gap-2">
                      <BsMailbox size={16} /> {user?.email}
                    </p>
                    <p className="flex items-center gap-2">
                      <BiPhone size={16} /> {user?.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin size={16} /> {users.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900 rounded-2xl p-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">i</div>
                <div>
                  <p className="font-medium">Note</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Your request will be sent to the owner. They will review your application and get back to you soon.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}

          <div className="lg:w-7/12 p-6 space-y-6 overflow-auto">
         <form onSubmit={onSubmit}>
  <div>
    <h2 className="text-xl font-semibold mb-5">Your Information</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full
    ">
      <div>
        <Label>Full Name <span className="text-red-500">*</span></Label>
        <Input placeholder="Enter your full name" className="mt-1 w-full" />
      </div>
      <div>
        <Label>Email Address <span className="text-red-500">*</span></Label>
        <Input type="email" placeholder="Enter your email" className="mt-1 w-full" />
      </div>
    </div>

    <div className="mt-4">
      <Label>Phone Number <span className="text-red-500">*</span></Label>
      <Input type="tel" placeholder="Enter your phone number" className="mt-1  w-full" />
    </div>

    <div className="mt-4">
      <Label>Address <span className="text-red-500">*</span></Label>
      <Input placeholder="Enter your full address" className="mt-1 w-full" />
    </div>

    <div className="mt-6">
      <Label>Why do you want to adopt {pets?.name}? <span className="text-red-500">*</span></Label>
      <TextArea 
        placeholder="Tell the owner why you are a good match for Bruno..." 
        className="mt-1 h-32 resize-y w-full
        
        "
      />
      <p className="text-right text-xs text-gray-400 mt-1">0/500</p>
    </div>
  </div>

  {/* Tip Box */}
  <div className="bg-purple-50 dark:bg-purple-950/50 border border-purple-100 dark:border-purple-900 rounded-2xl p-4 flex gap-3">
    <Heart className="text-purple-600 mt-0.5" size={20} />
    <div>
      <p className="font-medium text-purple-700 dark:text-purple-400">Be thoughtful</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        A short and genuine message increases the chance of your request being accepted.
      </p>
    </div>
  </div>

  {/* Buttons */}
  <div className="flex gap-3 pt-4">
    <Button variant="outline" className="flex-1 py-6 text-base">
      Cancel
    </Button>
    <Button type="submit" className="flex-1 py-6 text-base bg-purple-600 hover:bg-purple-700">
      Send Adoption Request
    </Button>
  </div>
</form>

            <p className="text-center text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1">
              🔒 Your information is safe and will only be shared with the pet owner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;

"use client"
import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { redirect } from 'next/navigation';
import React from 'react';
import { GrGoogle } from 'react-icons/gr';
import { toast } from 'react-toastify';


function LoginInPage() {
  
    const handleGoogleSignIn=async()=>{
     const data = await authClient.signIn.social({
    provider: "google",
  });
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const datas = Object.fromEntries(formData.entries());

   console.log(datas);
   
    
      const { data, error } = await authClient.signIn.email({
        email: datas.email,
        password: datas.passwords,
      });

      console.log(data, error);
      if(data){
        toast.success("login success")
        redirect("/")
       
    }else{
      toast.error("login failed")
    }
    
    // Convert FormData to plain object
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#0f0a1f] via-[#1a1038] to-[#2b145c] flex justify-center items-center p-6 overflow-hidden relative">
       <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-fuchsia-500/20 rounded-full blur-3xl"></div>
      <div  className='backdrop-blur-2xl bg-white/10 border border-white/10 rounded-3xl p-8 shadow-[0_0_40px_rgba(168,85,247,0.25)]'>
      <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 text-5xl rounded-2xl bg-linear-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
              🐾
            </div>

            <h2 className="text-3xl font-bold text-white mt-4">
              Welcome Back
            </h2>

            <p className="text-sm text-gray-300 mt-2 text-center">
              Login to continue your pet adoption journey 🐾
            </p>
          
          </div>

        <Form
          className="flex  flex-col gap-4 bg-[#f3e8ff] border rounded-2xl p-5 "
          render={(props) => <form {...props} data-custom="foo" />}
          onSubmit={onSubmit}
        >
          
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="passwords"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <div className="flex gap-2">
            <Button className={"bg-linear-to-r from-purple-600 to-fuchsia-600"} type="submit">
              <Check />
              Submit
            </Button>
            <Button
              type="reset"
              variant="outline"
              className={"border border-purple-400/30 text-[#980ffa] hover:bg-white/10 "}
            >
              Reset
            </Button>
          </div>
          <p className="text-center font-medium">OR</p>
          <div className="flex items-center justify-center ">
            <Button onClick={handleGoogleSignIn}  className="w-full bg-[#980ffa]">
              <GrGoogle />
              Sign with Google
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
export default LoginInPage;
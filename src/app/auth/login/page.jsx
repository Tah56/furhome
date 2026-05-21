"use client"
import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
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

    if (datas.passwords !== datas.password) {
      console.log(datas.password, datas.passwords);
      toast.error("passwords do not match");
      return;
    } else {
      const { data, err } = await authClient.signUp.email({
        email: datas.email,
        password: datas.password,
      });

      console.log(data, err);
      if(data){
        toast.success("login success")
        redirect("/")
       
    }else{
      toast.error("login failed")
    }
    }
    // Convert FormData to plain object
  };

  return (
    <div className="container h-screen backdrop-blur-2xl backdrop-brightness-80 mx-auto flex justify-center items-center p-6">
      <div>
        <Form
          className="flex w-96 flex-col gap-4 bg-white p-5 rounded-2xl shadow-orange-400 shadow-xs"
          render={(props) => <form {...props} data-custom="foo" />}
          onSubmit={onSubmit}
        >
          <h2 className="text-center font-bold">Log In</h2>
          
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
            <Button className={"bg-black"} type="submit">
              <Check />
              Submit
            </Button>
            <Button
              type="reset"
              variant="outline"
              className={"border border-orange-500"}
            >
              Reset
            </Button>
          </div>
          <p className="text-center font-medium">OR</p>
          <div className="flex items-center justify-center ">
            <Button onClick={handleGoogleSignIn}  className="w-full bg-black">
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
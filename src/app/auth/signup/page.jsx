"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { error } from "better-auth/api";
import { useRouter } from "next/navigation";
import { GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";

function signUpPage() {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const datas = Object.fromEntries(formData.entries());

    if (datas.passwords !== datas.password) {
      console.log(datas.password, datas.passwords);
      toast.error("passwords do not match");
      return;
    } else {
      const { data, error } = await authClient.signUp.email({
        name: datas.name,
        email: datas.email,
        password: datas.password,
      });

      console.log(data, error);
      if (!error) {
        toast.success("sign up success");
        router.push("/");
      } else {
        toast.error("sign up fail please try again");
      }
    }
    // Convert FormData to plain object
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#0f0a1f] via-[#1a1038] to-[#2b145c] flex justify-center items-center p-6 overflow-hidden relative">
       <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-fuchsia-500/20 rounded-full blur-3xl"></div>
      <div className="backdrop-blur-2xl bg-white/10 border border-white/10 rounded-3xl p-8 shadow-[0_0_40px_rgba(168,85,247,0.25)]">
      <div className="flex flex-col items-center mb-8">
  
  <div className="w-16 h-16 text-5xl rounded-2xl bg-linear-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
    🐾
  </div>

  <h2 className="text-3xl font-bold text-white mt-4">
    Create Account
  </h2>

  <p className="text-sm text-gray-300 mt-2 text-center leading-relaxed">
    Join our pet adoption community and find your new best friend 🐶
  </p>

</div>
        <Form
          className="flex  flex-col gap-4 bg-[#f3e8ff] p-5 rounded-2xl"
          render={(props) => <form {...props} data-custom="foo" />}
          onSubmit={onSubmit}
        >
         
          <TextField
            isRequired
            name="name"
            type="text"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="Enter Your Name" />
            <FieldError />
          </TextField>
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

          <TextField
            isRequired
            minLength={8}
            name="password"
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
            <Button className="w-full bg-[#980ffa]">
              <GrGoogle />
              Sign with Google
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default signUpPage;

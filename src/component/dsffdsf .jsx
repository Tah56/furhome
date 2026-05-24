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
import { useRouter } from "next/navigation";
import React from "react";
import { GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";
import { Sparkles } from "lucide-react";

function LoginInPage() {
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });

    router.refresh();
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const datas = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: datas.email,
      password: datas.passwords,
    });

    if (data) {
      toast.success("Login Success ✨");

      router.push("/");
      router.refresh();
    } else {
      toast.error(error?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#0f0a1f] via-[#1a1038] to-[#2b145c] flex justify-center items-center p-6 overflow-hidden relative">
      
      {/* Background Blur */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-fuchsia-500/20 rounded-full blur-3xl"></div>

      <div className="w-full max-w-md relative z-10">
        
        <div className="backdrop-blur-2xl bg-white/10 border border-white/10 rounded-3xl p-8 shadow-[0_0_40px_rgba(168,85,247,0.25)]">
          
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
              <Sparkles className="text-white" size={30} />
            </div>

            <h2 className="text-3xl font-bold text-white mt-4">
              Welcome Back
            </h2>

            <p className="text-sm text-gray-300 mt-2 text-center">
              Login to continue your pet adoption journey 🐾
            </p>
          </div>

          <Form
            className="flex flex-col gap-5"
            render={(props) => <form {...props} />}
            onSubmit={onSubmit}
          >
            {/* Email */}
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                ) {
                  return "Please enter a valid email address";
                }

                return null;
              }}
            >
              <Label className="text-gray-200">Email</Label>

              <Input
                placeholder="john@example.com"
                className="mt-2"
              />

              <FieldError className="text-red-400 text-sm" />
            </TextField>

            {/* Password */}
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
              <Label className="text-gray-200">Password</Label>

              <Input
                placeholder="Enter your password"
                className="mt-2"
              />

              <Description className="text-gray-400 text-xs mt-1">
                Must contain uppercase & number
              </Description>

              <FieldError className="text-red-400 text-sm" />
            </TextField>

            {/* Buttons */}
            <div className="flex gap-3 mt-2">
              <Button
                className="flex-1 bg-linear-to-r from-purple-600 to-fuchsia-600 text-white font-semibold py-6 shadow-lg hover:scale-105 transition-all duration-300"
                type="submit"
              >
                <Check />
                Login
              </Button>

              <Button
                type="reset"
                variant="outline"
                className="border border-purple-400/30 text-white hover:bg-white/10 py-6"
              >
                Reset
              </Button>
            </div>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-2">
              <div className="w-full border-t border-white/10"></div>

              <span className="px-3 text-sm text-gray-400 bg-transparent">
                OR
              </span>

              <div className="w-full border-t border-white/10"></div>
            </div>

            {/* Google Login */}
            <Button
              onClick={handleGoogleSignIn}
              className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/10 py-6 transition-all duration-300"
            >
              <GrGoogle size={20} />
              Continue with Google
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default LoginInPage;
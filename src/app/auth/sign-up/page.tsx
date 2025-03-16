'use client';
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import RegisterForm from "@/components/register-form";
import Link from "next/link";

import { GalleryVerticalEnd } from "lucide-react"


export default function LoginPage() {

  const  { register } = useAuth();
  const router = useRouter();

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevents default GET submission [do not touch]
    const formData = new FormData(e.currentTarget);
    const first_name = formData.get('first_name') as string;
    const last_name = formData.get('last_name') as string;
    const phone_number = formData.get('phone_number') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      await register({ first_name, last_name, phone_number, email, password });
      router.push('/auth/login'); 
    } catch (error) {
      console.error('Registration failed', error);
    }
  }


  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            GetSkills
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <RegisterForm onSubmit={handleRegister}/>
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/placeholder.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}

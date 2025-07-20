"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { api, setAuthToken } from "@/lib/api";
import { GalleryVerticalEnd } from "lucide-react";
import Image from "next/image";
import Banner from "../../../../public/assets/images/6.jpg";
import { LoginForm } from "@/components/Login";

export default function LoginPage() {
  return (
    <div className="bg-muted h-screen grid grid-cols-1 md:grid-cols-2 items-center justify-center">
      <div className="mx-auto flex col-span-1 items-center justify-center">
        <Image
          src={Banner}
          alt="Banner"
          className="object-cover mx-auto w-1/2 h-auto md:h-[70vh] rounded-full"
        />{" "}
      </div>

      <div className="flex w-full items-center justify-center flex-col gap-6">
        <>
          <a
            href="#"
            className="flex items-center gap-2 self-center font-medium"
          >
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Dessert
          </a>
          <LoginForm />
        </>
      </div>
    </div>
  );
}

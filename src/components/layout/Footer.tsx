"use client";

import { getPageData } from "@/lib/pageContent";
import { useEffect, useState } from "react";
import Logo from "../../../public/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
type FooterData = {
  copyright: string;
};
export default function Footer() {
  const [footer, setFooter] = useState<FooterData | null>(null);

  useEffect(() => {
    getPageData("footer").then((data) => {
      console.log("Fetched data:", data);
      setFooter(data?.footer);
    });
  }, []);

  if (!footer) return <p>Footer data is not available.</p>;

  return (
    <footer className="mt-15 bg-linear-to-t from-gray-300 to-white">
      <Separator />
      <div className="py-15 w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        <div className="flex flex-col text-right justify items-end">
          <Image
            src={Logo}
            alt="Banner"
            className="object-cover w-[240] h-[95]"
          />
          {/* <p className="mt-2">Learn, Master, Build</p> */}
        </div>
        <div className="flex flex-col text-right items-right">
          <h1 className="text-gray-900 font-bold text-2xl">Courses</h1>
          <p className="mt-2 text-sm">SEO</p>
          <p className="mt-2 text-sm">Social Media Marketing</p>
          <p className="mt-2 text-sm">AI enabled Marketing</p>
        </div>
        <div className="flex flex-col text-right items-right">
          <h1 className="text-gray-900 font-bold text-2xl">Quick Links</h1>
          <p className="mt-2 text-sm">About Us</p>
          <p className="mt-2 text-sm">Contact Us</p>{" "}
          <p className="mt-2 text-sm">Terms of Service</p>
          <p className="mt-2 text-sm">Refund Policy</p>
        </div>
        <div className="flex flex-col text-right">
          <h1 className="text-gray-900 font-bold text-2xl">User Links</h1>
          <Link href="/console/instructor" className="mt-2 text-sm">
            Instructor Login
          </Link>
          <Link href="/auth/login" className="mt-2 text-sm">
            Student Login
          </Link>
        </div>
      </div>
      <div className="text-center py-3 text-sm text-gray-600">
        {footer?.copyright}
      </div>
    </footer>
  );
}

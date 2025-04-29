"use client";

import { getPageData } from "@/lib/pageContent";
import { useEffect, useState } from "react";

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
    <footer className="bg-linear-to-t p-10 from-blue-200 to-grey-100">
      <div className="mt-15 w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <div className="flex flex-col items-left">
          <h1 className="text-blue-700 font-bold text-2xl">Mastry</h1>
          <p className="mt-2">Learn, Master, Build</p>
          <p className="mt-5">Privacy Policy</p>
          <p className="mt-2">Terms of Service</p>
          <p className="mt-2">Refund Policy</p>
        </div>
        <div className="flex flex-col text-right items-center">
          <h1 className="text-blue-700 font-bold text-2xl">Courses</h1>
          <p className="mt-2">SEO</p>
          <p className="mt-2">Social Media Marketing</p>
          <p className="mt-2">AI enabled Marketing</p>
        </div>
        <div className="flex flex-col text-right items-right">
          <h1 className="text-blue-700 font-bold text-2xl">Mastry</h1>
          <p className="mt-2">About Us</p>
          <p className="mt-2">Contact Us</p>
        </div>
      </div>
      <div className="text-center py-6 text-sm text-gray-600">
        {footer?.copyright}
      </div>
    </footer>
  );
}

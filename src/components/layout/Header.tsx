"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getPageData } from "@/lib/pageContent";

type HeaderData = {
  logo: string;
  contact: { phone: string; email: string };
  navLinks: { label: string; href: string }[];
  authLinks: { login: string; register: string };
  social: { icon: string; url: string }[];
};

export default function Header() {
  const [header, setHeader] = useState<HeaderData | null>(null);

  useEffect(() => {
    getPageData("home").then((data) => setHeader(data?.header));
  }, []);

  if (!header) return null;

  return (
    <header className="bg-white shadow-md py-3">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={header.logo} alt="Logo" className="h-10" />
          <div className="text-sm text-gray-600 hidden md:block">
            <p>{header.contact.phone}</p>
            <p>{header.contact.email}</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 text-sm">
          {header.navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="text-gray-700 hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-4 items-center text-sm">
          <Link
            href={header.authLinks.login}
            className="text-gray-600 hover:text-blue-600"
          >
            Log in
          </Link>
          <Link
            href={header.authLinks.register}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}

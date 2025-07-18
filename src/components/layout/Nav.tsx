// components/Navbar.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
// import Image from "next/image";
import { PackageCheck, Search, User, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { ClerkLoaded, useUser, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  // const { user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 bg-white shadow-md w-full z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 w-2/12">
            <Link href="/">
              <div className="flex items-center">
                <span className="ml-2 text-xl font-bold">Mastry</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center space-x-10 w-7/12">
            <Link
              href="/courses"
              className="text-gray-900 hover:text-black transition-colors"
            >
              Explore Courses
            </Link>
            <div className="w-150 h-12">
              <form className="">
                <span className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Learn something new today?"
                    className="border rounded-2xl px-3 py-1 w-150 h-12 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 flex items-center mr-3 focus:outline-none"
                    onClick={(e) => e.preventDefault()}
                    // Prevent form submission for demo
                  >
                    <Search className="h-5 w-5 text-gray-500" />
                  </button>
                </span>
              </form>
            </div>
           
          </div>

          {/* Shopping Cart & User Account */}
          <div className="hidden md:flex items-center justify-end space-x-7 w-3/12">
            <Link
              href="/about"
              className="text-gray-900 hover:text-black transition-colors"
            >
              My courses
            </Link>
            <Link href="/">
              <ShoppingCart />
            </Link>
            <Link
              href="/auth/login"
              className="text-gray-700 hover:text-red-400"
            >
              <span className="flex gap-3 items-center">
                <span className="pointer py-2 rounded-lg gap-2">Log In</span>{" "}
                <span className="bg-black text-white w-7 h-7 rounded-full flex items-center justify-center">
                  <User size={18} />
                </span>{" "}
              </span>
            </Link>
            {/* <ClerkLoaded>
              {user ? (
                <div className="flex items-center">
                  <Link
                    href="/orders"
                    className="mx-2 flex align-center justify-center"
                  >
                    <Button variant="link" className="text-black text-xs">
                      Orders
                    </Button>
                    <button className="">
                      <PackageCheck size={18} color="#475569" />
                    </button>
                  </Link>
                  <span className="text-black text-xs font-semibold mx-4">
                    {user.fullName?.toUpperCase()}
                  </span>
                  <UserButton />
                </div>
              ) : (
                <div className="flex flex-col">
                  <SignInButton mode="modal" />
                </div>
              )}
            </ClerkLoaded> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex justify-between items-center">
            <form className="">
              <span className="relative flex items-center">
                <input
                  type="text"
                  placeholder="want to tart with learning ?"
                  className="border rounded-lg px-3 py-1 w-70 h-8 focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-0 flex items-center mr-3 focus:outline-none"
                  onClick={(e) => e.preventDefault()}
                  // Prevent form submission for demo
                >
                  <Search className="h-5 w-5 text-gray-500" />
                </button>
              </span>
            </form>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          >
            Products
          </Link>
          <Link
            href="/categories"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          >
            Categories
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          >
            Contact
          </Link>
          <div className="flex space-x-4 px-3 py-2">
            <Link href="/cart" className="text-gray-700 hover:text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </Link>
            <Link href="/account" className="text-gray-700 hover:text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

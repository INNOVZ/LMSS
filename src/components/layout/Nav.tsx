"use client";
import { useState } from "react";
import Link from "next/link";
import { PackageCheck, Search, User, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/Cart";
import { Badge } from "@/components/ui/badge";

type NavbarProps = {
  // Add any props if needed
};

const Navbar = (props: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCartPopup, setShowCartPopup] = useState(false);

  const cartItems = useCartStore((state) => state.cart);

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

          {/* Desktop Menu - Hidden on tablet and mobile */}
          <div className="hidden lg:flex items-center justify-center space-x-10 w-7/12">
            <div className="relative group">
              <Link
                href="/courses"
                className="text-gray-900 hover:text-black transition-colors group-hover:text-gray-600 flex items-center gap-1"
              >
                Explore Courses
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:rotate-180"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Link>
              <div className="absolute left-0 mt-8 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <Link
                    href="/courses/development"
                    className="block px-4 py-2 text-sm active:text-black text-gray-700 hover:bg-gray-100 hover:text-gray-600"
                    role="menuitem"
                  >
                    Development
                  </Link>
                  <Link
                    href="/courses/business"
                    className="block px-4 py-2 text-sm active:text-black text-gray-700 hover:bg-gray-100 hover:text-gray-600"
                    role="menuitem"
                  >
                    Business
                  </Link>
                  <Link
                    href="/courses/design"
                    className="block px-4 py-2 text-sm active:text-black text-gray-700 hover:bg-gray-100 hover:text-gray-600"
                    role="menuitem"
                  >
                    Design
                  </Link>
                  <Link
                    href="/courses/marketing"
                    className="block px-4 py-2 text-sm active:text-black text-gray-700 hover:bg-gray-100 hover:text-gray-600"
                    role="menuitem"
                  >
                    Marketing
                  </Link>
                  <Link
                    href="/courses"
                    className="block px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100"
                    role="menuitem"
                  >
                    View All Categories →
                  </Link>
                </div>
              </div>
            </div>

            {/* Desktop Search */}
            <div className="w-80 h-12">
              <form className="">
                <span className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Learn something new today?"
                    className="border rounded-2xl px-3 py-1 w-80 h-12 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 flex items-center mr-3 focus:outline-none"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Search className="h-5 w-5 text-gray-500" />
                  </button>
                </span>
              </form>
            </div>
          </div>

          {/* Desktop Right Menu - Hidden on tablet and mobile */}
          <div className="hidden lg:flex items-center justify-end space-x-7 w-2/12 lg:w-3/12">
            <Link
              href="/learningprofile"
              className="text-gray-900 hover:text-black transition-colors"
            >
              My courses
            </Link>
            <div className="relative group">
              <Link
                href="/cart"
                className="text-gray-900 hover:text-black transition-colors group-hover:text-gray-600 flex items-center gap-1"
              >
                <div className="relative">
                  <ShoppingCart className="h-6 w-6 text-gray-700 group-hover:text-gray-600 transition-colors" />
                  {cartItems.length > 0 && (
                    <Badge className="absolute -top-2 right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                      {cartItems.length}
                    </Badge>
                  )}
                </div>
              </Link>
              {cartItems.length > 0 && (
                <div className="absolute right-0 mt-8 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-2 px-3" role="menu">
                    <p className="font-semibold mb-2 border-b pb-2">
                      Your Cart
                    </p>
                    <div className="max-h-64 overflow-y-auto">
                      {cartItems.map((item) => (
                        <Link
                          href={`/courses/${item.id}`}
                          key={item.id}
                          className="py-2 text-sm p-2 flex justify-between"
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div className="flex flex-col p-2 truncate">
                            <span className="truncate">{item.title}</span>
                            <span className="font-bold">
                              ${item.price.toFixed(2)}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 pt-2 border-t">
                      <Link
                        href="/cart"
                        className="block w-full py-2 text-center bg-gray-600 text-white rounded-md hover:bg-black transition-colors text-sm font-medium"
                      >
                        View Cart
                      </Link>
                      <Link
                        href="/checkout"
                        className="block w-full py-2 mt-2 text-center bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors text-sm font-medium"
                      >
                        Checkout
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link href="/auth/login" className="text-gray-700">
              <span className="flex gap-3 items-center">
                <span className="pointer py-2 rounded-lg gap-2">Log In</span>
                <span className="bg-black text-white w-7 h-7 rounded-full flex items-center justify-center">
                  <User size={18} />
                </span>
              </span>
            </Link>
          </div>

          {/* Mobile/Tablet menu button and search - Visible on tablet and mobile */}
          <div className="lg:hidden flex justify-between items-center space-x-4">
            {/* Mobile Search */}
            <form className="">
              <span className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border rounded-lg px-3 py-1 w-40 sm:w-50 h-8 focus:outline-none text-sm"
                />
                <button
                  type="submit"
                  className="absolute right-0 flex items-center mr-3 focus:outline-none"
                  onClick={(e) => e.preventDefault()}
                >
                  <Search className="h-4 w-4 text-gray-500" />
                </button>
              </span>
            </form>

            {/* Cart Icon for Mobile/Tablet */}
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {cartItems.length > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  {cartItems.length}
                </Badge>
              )}
            </Link>

            {/* Hamburger Menu Button */}
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

      {/* Mobile/Tablet Menu - Visible on tablet and mobile */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden absolute top-20 left-0 right-0 bg-white shadow-lg z-50`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3">
          {/* Navigation Links */}
          <Link
            href="/"
            className="block px-3 py-3 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/courses"
            className="block px-3 py-3 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Explore Courses
          </Link>

          {/* Course Categories */}
          <div className="pl-6 space-y-2">
            <Link
              href="/courses/development"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Development
            </Link>
            <Link
              href="/courses/business"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Business
            </Link>
            <Link
              href="/courses/design"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Design
            </Link>
            <Link
              href="/courses/marketing"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Marketing
            </Link>
          </div>

          <Link
            href="/learningprofile"
            className="block px-3 py-3 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            My Courses
          </Link>

          {/* User Actions */}
          <div className="border-t pt-4 mt-4">
            <Link
              href="/cart"
              className="flex items-center px-3 py-3 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingCart className="h-5 w-5 mr-3" />
              Cart
              {cartItems.length > 0 && (
                <Badge className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  {cartItems.length}
                </Badge>
              )}
            </Link>

            <Link
              href="/auth/login"
              className="flex items-center px-3 py-3 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="h-5 w-5 mr-3" />
              Log In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

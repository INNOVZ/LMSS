"use client";
import React from "react";
import { useCartStore } from "@/stores/Cart";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import { courses, categories } from "@/../public/assets/pages/learn.js";
import CourseCard from "@/components/CourseCard";

const CartPage: React.FC = () => {
  const { cart, removeFromCart } = useCartStore();

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="mt-15">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Your Learning Cart
          </h1>
          <div className=" bg-gray-100 rounded-lg shadow-md p-8 text-center">
            <div className="mb-6">
              <svg
                className="mx-auto h-24 w-24 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-6">Haven't added any course yet ?</p>
            <Link href="/courses">
              <Button className="pointer bg-gray-900 hover:bg-gray-800 text-white px-6 py-3">
                Browse Courses
              </Button>
            </Link>
          </div>

          {/* Show recommendations even when cart is empty */}
          {/* <RecommendedCourses maxCourses={4} /> */}
        </div>
        {/* Recommended Courses Section */}
        <div className="bg-gray-100 md:ml-15 py-15 mt-15 gap-4 rounded-l-3xl">
          <div className="ml-0 md:ml-18">
            <h1 className="text-3xl text-gray-800 px-5 font-bold">
              Recommended Courses
            </h1>
            <div className="mt-8 mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 z-[-1]">
              {courses.map((course) => (
                <Link
                  key={course.id}
                  href={`/courses/${course.id}`}
                  className="transition-transform duration-500 hover:-translate-y-1 hover:shadow-md"
                >
                  <CourseCard course={{ ...course, id: course.id.toString() }} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="px-4  sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Cart Items ({cart.length}{" "}
                  {cart.length === 1 ? "item" : "items"})
                </h2>
              </div>

              <div className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="p-6 flex items-center justify-between"
                  >
                    {/* Course Details */}
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Course ID: {item.id}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="text-right mr-4">
                      <p className="text-lg font-semibold text-gray-900">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    {/* Remove Button */}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-800 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Order Summary
              </h2>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    Subtotal ({cart.length} courses)
                  </span>
                  <span className="text-gray-900">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Discount</span>
                  <span className="text-green-600">-$0.00</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-900">$0.00</span>
                </div>

                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-base font-semibold">
                    <span className="text-gray-900">Total</span>
                    <span className="text-gray-900">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3">
                  Proceed to Checkout
                </Button>

                <Link href="/courses">
                  <Button variant="outline" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>
              </div>

              {/* Promo Code */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  Promo Code
                </h3>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                  <Button variant="outline" size="sm">
                    Apply
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Courses Section */}
        <div className="bg-gray-100 md:ml-10 py-15 mt-15 gap-4 rounded-l-3xl">
          <div className="md:container md:mx-auto ml-0 md:ml-18">
            <h1 className="text-3xl text-gray-800 px-5 font-bold">
              Recommended Courses
            </h1>
            <div className="container mt-8 mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 z-[-1]">
              {courses.map((course) => (
                <Link
                  key={course.id}
                  href={`/courses/${course.id}`}
                  className="transition-transform duration-500 hover:-translate-y-1 hover:shadow-md"
                >
                  <CourseCard
                    course={{ ...course, id: course.id.toString() }}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

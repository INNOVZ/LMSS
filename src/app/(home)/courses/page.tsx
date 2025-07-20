"use client";
import React, { useState } from "react";
import Image from "next/image";
import CourseCard from "@/components/CourseCard";
import { courses, categories } from "../../../../public/assets/pages/learn.js";
import Banner from "../../../../public/assets/images/Banner_3.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import {
  Loader,
  BookOpenCheck,
  TvMinimalPlay,
  Radio,
  Presentation,
  ChevronsLeftRightEllipsis,
  Component,
  Terminal,
  CircleArrowOutUpRight,
} from "lucide-react";

const CoursesPage = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  // Filter courses based on active category
  const filteredCourses = activeCategory
    ? courses.filter((course) => course.categoryId === activeCategory)
    : courses;

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setActiveCategory(value === "" ? null : parseInt(value));
  };

  return (
    <div className="">
      <div className="bg h-[50vh] container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto mt-15 rounded-xl shadow">
        <span className="text-left flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">Chase your Career</h1>
          <p className="text-left">Start learning</p>
        </span>
        <></>
      </div>

      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4 px-5 md:px-0">Browse by Category</h2>

        <div className="md:hidden px-5">
          <select
            value={activeCategory === null ? "" : activeCategory.toString()}
            onChange={handleCategoryChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="">All Courses</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.icon} {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="hidden md:flex flex-wrap gap-3">
          <button
            onClick={() => setActiveCategory(null)}
            className={`pointer px-4 py-2 rounded-lg text-sm font-medium transition-colors 
              ${
                activeCategory === null
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
          >
            All Courses
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`pointer px-4 py-2 rounded-lg text-sm font-medium transition-colors 
                ${
                  activeCategory === category.id
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-gray-100 md:ml-10 py-15 mt-8 gap-4 rounded-l-xl">
        <div className="container mx-auto md:ml-18">
          <h1 className="text-2xl text-gray-800 font-medium">
            {activeCategory
              ? `${
                  categories.find((c) => c.id === activeCategory)?.name
                } Courses`
              : "Popular Courses"}
          </h1>
          <Link
            href="/marketing"
            className="pointer text-sm text-gray-500 hover:underline"
          >
            View all...
          </Link>

          <div className="container mt-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 z-[-1]">
            {filteredCourses.map((course) => (
              <Link
                key={course.id}
                href={`/courses/${course.id}`}
                className="transition-transform duration-500 hover:-translate-y-1 hover:shadow-md"
              >
                <CourseCard course={{ ...course, id: course.id.toString() }} />
              </Link>
            ))}

            {filteredCourses.length === 0 && (
              <div className="col-span-4 py-20 text-center">
                <p className="text-gray-500 text-lg">
                  No courses found in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {!activeCategory && (
        <div className="bg-gray-100 md:mr-10 py-15 mt-15 gap-4 rounded-r-xl">
          <div className="container mx-auto md:mr-18">
            <h1 className="text-2xl text-gray-800 font-medium">
              Digital Marketing
            </h1>

            <Link
              href="/marketing"
              className="pointer text-sm text-gray-500 hover:underline"
            >
              View all...
            </Link>
            <div className="container mt-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 z-[-1]">
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
      )}
    </div>
  );
};

export default CoursesPage;

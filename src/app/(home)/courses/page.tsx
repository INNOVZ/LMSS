import React from "react";
import Image from "next/image";
import LearnCard from "@/components/home/LearnCard";
import { courses, categories } from "../../../../public/assets/pages/learn.js";
import Banner from "../../../../public/assets/images/Banner_3.png";
import { motion } from "framer-motion";
import Link from "next/link";
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

const coursesPage = () => {

  return (
    <div className="">
      <div className="bg h-[50vh] container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto mt-15 rounded-xl shadow">
        <span className="text-left flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">Chase your Career</h1>
          <p className="text-left">Start learning</p>
        </span>
        <></>
      </div>
      <div className="bg-gray-100 md:ml-10 py-15 mt-15 gap-4 rounded-l-xl">
        <div className="container mx-auto md:ml-18">
          <h1 className="text-2xl text-gray-800 font-medium">
            Popular Courses
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
                <LearnCard
                  title={course.title}
                  course_image={course.image}
                  length={course.duration}
                  description={course.description}
                  
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
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
            {courses.map((card) => (
              <div
                key={card.id}
                className="transition-transform duration-500 hover:-translate-y-1 hover:shadow-md"
              >
                <LearnCard
                  title={card.title}
                  course_image={card.image}
                  length={card.duration}
                  description={card.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default coursesPage;

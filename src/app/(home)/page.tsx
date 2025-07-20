"use client";

import { getPageData } from "@/lib/pageContent";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import Banner from "../../../public/assets/images/6.jpg";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import CourseCard from "@/components/CourseCard";
import { courses, categories } from "../../../public/assets/pages/learn.js";
import { Input } from "@/components/ui/input";
import Accordion from "@/components/Accordian";
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
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import HorizontalScroll from "@/components/HorizontalScroll";

const items = [
  { title: "Section 1", content: <p>Content 1</p> },
  { title: "Section 2", content: <p>Content 2</p> },
];

export default function HomePage() {
  const { scrollY } = useScroll();
  // Move image 0px at top, 200px right at 500px scroll
  const x = useTransform(scrollY, [0, 500], [0, 250]);

  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    getPageData("home").then(setContent);
  }, []);

  if (!content) return <Loader className="animate-spin text-blue-500" />;
  if (content?.error) {
    return <p>{content.error}</p>;
  }
  if (content?.home?.length === 0) {
    return <p>No content available.</p>;
  }
  if (content?.home?.length > 0) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-5xl text-[#4338ca] font-bold text-center">
          {content?.home[0]?.title}
        </h1>
        <p className="text-lg mt-5">{content?.home[0]?.description}</p>
      </div>
    );
  }

  return (
    <>
      <div className="mt-15 z-0 px-5 md:px-0">
        {/* Use grid-rows-[{size}] for custom sizes */}
        <div className="relative px-3 items-center justify-center">
          {/* Row 1 - 30% height */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              type: "tween",
              duration: 0.9,
              stiffness: 100,
              damping: 20,
              delay: 0.3,
            }}
            className="flex flex-col items-center justify-center"
          >
            {/* <motion.div style={{ x }}> */}
            <h1 className="text-5xl text-gray-800 font-bold text-center">
              Your Learning Journey Starts Here
            </h1>
            <p className="text-lg text-gray-800 text-center mt-4">
              {" "}
              Explore Courses. Unlock Skills. Advance Your Career.
            </p>
            <div className="pointer bg-black text-white mt-8 flex items-center gap-5 border border-black px-4 py-2 rounded-md hover:shadow">
              {" "}
              Start Learning
              <CircleArrowOutUpRight size={18} />
            </div>
            {/* </motion.div> */}
          </motion.div>
          {/* Row 2 - 70% height */}

          <div className="mt-15 rounded-l-xl">
            <Image
              src={Banner}
              alt="Banner"
              className="object-cover mx-auto w-[80vw] h-auto md:h-[80vh] rounded-3xl"
            />
          </div>
        </div>

        <div className="container flex flex-col items-center mx-auto mt-15 ">
          <h1 className="text-3xl text-center font-bold">
            Over 25 Courses and 100+ students
          </h1>

          <div className="flex justify-center mt-8">
            <span className="pointer flex text-xs px-5 rounded-lg transition-transform duration-300 hover:scale-105">
              <BookOpenCheck />
              <p className="ml-5 text-base"> Industry Specific courses</p>
            </span>

            <span className="pointer flex text-xs px-5 rounded-lg transition-transform duration-300 hover:scale-105">
              <TvMinimalPlay />
              <p className="ml-5 text-base"> Live on-demand</p>
            </span>
          </div>
          <div className="w-11/12 mt-15">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              <span className="pointer flex text-base border px-5 py-3 flex-row gap-5 rounded-lg hover:shadow">
                <Presentation />
                <span>Digital Marketing</span>
              </span>{" "}
              <span className="pointer flex text-base border px-5  py-3 flex-row gap-5 rounded-lg hover:shadow">
                <ChevronsLeftRightEllipsis />
                <span>Web Development</span>
              </span>{" "}
              <span className="pointer flex text-base border px-5 py-3 flex-row gap-5 rounded-lg hover:shadow">
                <Component />
                <span>Content Creation</span>
              </span>{" "}
              <span className="pointer flex text-base border px-5 py-3 flex-row gap-5 rounded-lg hover:shadow">
                <Terminal />
                <span>Prompt Engineering</span>
              </span>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            type: "tween",
            duration: 0.8,
            stiffness: 100,
            damping: 20,
            delay: 0.6,
          }}
          className="container mx-auto mt-24 rounded-lg"
        >
          <h1 className="text-5xl font-bold pb-3 inline-block border-b-2 border-black">
            On the mission to prepare you for the future
          </h1>
        </motion.div>
        <>
          <div className="container mx-auto pt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            <motion.div
              className=""
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                type: "tween",
                duration: 0.8,
                stiffness: 100,
                damping: 20,
                delay: 0.6,
              }}
            >
              <h1 className="text-4xl text-grey-800 font-bold text-left">
                Let's build the skills and confidence for your dream career.
              </h1>
            </motion.div>

            <p className="text-base text-grey-800 text-justify">
              Learning Should Be Personal, Practical, and Purposeful We are on a
              mission to redefine education by connecting learners with mentors
              who’ve been there and done that. At Mastry, education isn’t just
              about theory-it’s about transformation in your life. We focus on
              the skills that are in-demand in the industry right now and in the
              future. No fancy degrees required just your passion and a
              willingness to learn.
            </p>
          </div>
        </>
        <div className="bg-gray-100 md:ml-10 py-15 mt-24 gap-4 rounded-l-3xl">
          <div className="md:container md:mx-auto ml-0 md:ml-18">
            <h1 className="text-3xl text-gray-800 px-5 font-bold">
              Popular Courses
            </h1>
            <div className="container mx-auto mt-8 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 z-[-1]">
              <ScrollArea className="w-[82vw] h-auto rounded-md whitespace-nowrap">
                <div className="flex py-4 gap-5">
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
                  ))}{" "}
                </div>
                <ScrollBar orientation="horizontal" hidden />
              </ScrollArea>
            </div>
          </div>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto mt-24 bg-black  p-4 rounded-lg shadow z-[-1]">
          <div className="p-10 flex flex-col items-center justify-center">
            <h1 className="text-5xl text-white font-bold text-center">
              Join the Mastry Community
            </h1>

            <p className="text-base text-white text-center mt-5">
              Join our community of learners and mentors, and take the first
              step towards a successful career in digital marketing.
            </p>
          </div>
          <div className="p-20 flex flex-col items-end justify-items-end">
            <Input
              type="text"
              placeholder="Name"
              className="text-grey-700 pl-2 outline-none border-none bg-[#ffffff] rounded-lg p-2 w-full h-12 mb-4"
              onChange={(e) => {
                console.log(e.target.value);
              }}
              onFocus={(e) => {
                e.target.placeholder = "";
              }}
              onBlur={(e) => {
                e.target.placeholder = "Name";
              }}
              required
              autoComplete="on"
              autoCorrect="off"
            />
            <Input
              type="email"
              placeholder="Email"
              className="text-grey-700 pl-2 outline-none border-none bg-[#ffffff] rounded-lg p-2 w-full h-12 mb-4"
              onChange={(e) => {
                console.log(e.target.value);
              }}
              onFocus={(e) => {
                e.target.placeholder = "";
              }}
              onBlur={(e) => {
                e.target.placeholder = "Email";
              }}
              required
              autoComplete="off"
              autoCorrect="off"
            />
            <Button
              variant="secondary"
              className="mt-5 text-gray-900 text-center h-12 text-base pointer"
              onClick={() => {
                window.location.href = "/auth/signup";
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
        <div className="container mx-auto w-1/2 my-15">
          <h1 className="text-3xl text-center mb-15 font-medium">
            Frequently asked Questions
          </h1>
          <Accordion items={items} />
        </div>
      </div>
    </>
  );
}

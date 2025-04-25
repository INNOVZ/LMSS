"use client";

import { getPageData } from "@/lib/pageContent";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import Banner from "../../public/assets/images/banr.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionCard from "@/components/home/SectionCard";
import section from "../../public/assets/pages/home.json";
import { LearnCard } from "@/components/home/LearnCard";
import learn from "../../public/assets/pages/learn.json";
import Path from "../../public/assets/images/path.png";
export default function HomePage() {
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    getPageData("home").then(setContent);
  }, []);

  if (!content) return <p className="p-4">Loading homepage...</p>;

  return (
    <>
      <div className="container mx-auto p-4">
        {/* Use grid-rows-[{size}] for custom sizes */}
        <div className="grid grid-rows-[30%_70%] gap-4">
          {/* Row 1 - 30% height */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl text-[#4338ca] font-bold text-center">
              Dive into Digital Marketing Career
            </h1>
            <p className="text-lg mt-5"> Learn AI enabled Digital Marketing</p>
            {/* <Button variant="link" className="text-black text-center text-xl">
            Learn AI enabled Digital Marketing
          </Button> */}
          </div>
          {/* Row 2 - 70% height */}

          <div className="bg-gray-100 rounded-lg shadow">
            <Image
              src={Banner}
              alt="Banner"
              className="object-cover w-full h-full rounded-lg"
              width={1000}
              height={500}
            />
          </div>
        </div>
        <div className="mt-15 relative container mx-auto">
          {/* Use grid-rows-[{size}] for custom sizes */}
          {/* Row 1 - 30% height */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              type: "tween",
              duration: 0.8,
              stiffness: 100,
              damping: 20,
              delay: 0.3,
            }}
          >
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl text-[#4338ca] font-bold text-center">
                Why choose Us?
              </h1>
            </div>
          </motion.div>
          {/* Row 2 - 70% height */}
          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {section.map((item) => (
                <motion.div
                  key={item.key}
                  className=""
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    type: "tween",
                    duration: item.transitionDuration,
                    stiffness: 100,
                    damping: 20,
                    delay: item.delay,
                  }}
                >
                  <SectionCard
                    title={item.title}
                    description={item.description}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            type: "tween",
            duration: 1,
            stiffness: 100,
            damping: 20,
            delay: 0.6,
          }}
        >
          <div className="container mx-auto mt-15 bg-gradient-to-r from-indigo-700 to-from-indigo-100 p-4 rounded-lg ">
            <h1 className="text-6xl text-[#ffffff] font-bold text-left">
              AI Enabled Marketing
            </h1>
          </div>
        </motion.div>
        <>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
            <h1 className="text-4xl text-grey-900 font-bold text-left">
              Let's help you build the skills and confidence for your dream
              career.
            </h1>

            <p className="text-base text-grey-900 text-justify">
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
        <div className="mt-15 gap-4">
          <h1 className="text-4xl text-[#4338ca] font-bold text-center">
            What Will You Learn
          </h1>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {learn.map((card) => (
            <motion.div
              key={card.key}
              className=""
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                type: "tween",
                duration: card.transitionDuration,
                stiffness: 100,
                damping: 20,
                delay: card.delay,
              }}
            >
              <LearnCard
                title={card.title}
                course_details={card.course_details}
                description={card.description}
                buttomText={card.buttomText}
                link={card.link}
              />
            </motion.div>
          ))}
        </div>
        <div className="container mx-auto mt-15  p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <h1 className="text-6xl text-grey-600 font-bold text-left">
            Path to Success
          </h1>
          <Image
            src={Path}
            alt="Banner"
            className="object-cover w-1/2 h-full rounded-lg"
          />
        </div>
      </div>
    </>
  );
}

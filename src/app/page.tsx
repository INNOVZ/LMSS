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
import { Input } from "@/components/ui/input";
import { Loader } from "lucide-react";

export default function HomePage() {
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
      <div className="container mx-auto p-4">
        {/* Use grid-rows-[{size}] for custom sizes */}
        <div className="gap-4">
          {/* Row 1 - 30% height */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              type: "tween",
              duration: 0.8,
              stiffness: 100,
              damping: 20,
              delay: 0.3,
            }}
          >
            <div className="h-[25vh] flex flex-col items-center justify-center">
              <h1 className="text-5xl text-[#4338ca] font-bold text-center">
                Dive into Digital Marketing Career
              </h1>
              <p className="text-lg mt-5">
                {" "}
                Learn AI enabled Digital Marketing
              </p>
            </div>
          </motion.div>
          {/* Row 2 - 70% height */}

          <div className="bg-gray-100 mx-auto w-full h-[62vh] overflow-hidden flex flex-col items-center justify-center">
            <Image
              src={Banner}
              alt="Banner"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
        <div className="mt-24 relative container mx-auto">
          {/* Use grid-rows-[{size}] for custom sizes */}
          {/* Row 1 - 30% height */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
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
              <h1 className="text-5xl text-[#4338ca] font-bold text-center">
                Why choose Us?
              </h1>
            </div>
          </motion.div>
          {/* Row 2 - 70% height */}
          <div className="mt-15">
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
          <div className="container mx-auto mt-24 bg-gradient-to-r from-indigo-700 to-from-indigo-100 p-4 rounded-lg ">
            <h1 className="text-5xl text-[#ffffff] font-bold text-left">
              AI Enabled Marketing
            </h1>
          </div>
        </motion.div>
        <>
          <div className="mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
            <motion.div
              className=""
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                type: "tween",
                duration: 0.7,
                stiffness: 100,
                damping: 20,
                delay: 0.6,
              }}
            >
              <h1 className="text-4xl text-grey-900 font-bold text-left">
                Let's help you build the skills and confidence for your dream
                career.
              </h1>
            </motion.div>

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
        <div className="mt-24 gap-4">
          <motion.div
            className=""
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              type: "tween",
              duration: 0.7,
              stiffness: 100,
              damping: 20,
              delay: 0.6,
            }}
          >
            <h1 className="text-5xl text-[#4338ca] font-bold text-center">
              What Will You Learn
            </h1>
          </motion.div>
        </div>
        <div className="mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
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
                icon={card.icon}
              />
            </motion.div>
          ))}
        </div>
        <div className="container mx-auto mt-15 p-4 rounded-lg flex flex-col items-center justify-center">
          <Image
            src={Path}
            alt="Banner"
            className="object-cover w-1/3 h-auto rounded-lg"
          />
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto mt-15 bg-gradient-to-r from-indigo-500 to-blue-500  p-4 rounded-lg shadow">
          <div className="p-10 flex flex-col items-center justify-center">
            <h1 className="text-5xl text-white font-bold text-center">
              Join the Mastry Community
            </h1>

            <p className="text-base text-white text-center mt-5">
              Join our community of learners and mentors, and take the first
              step towards a successful career in digital marketing.
            </p>
          </div>
          <div className="p-20 flex flex-col items-center justify-center">
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
              className="mt-5 text-blue-500 text-center h-12 text-base pointer"
              onClick={() => {
                window.location.href = "/auth/signup";
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

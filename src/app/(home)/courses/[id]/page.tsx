"use client";
import React, { useState, use } from "react";
import {
  courses,
  categories,
} from "../../../../../public/assets/pages/learn.js";
import Image from "next/image";
import Teacher from "../../../../../public/assets/images/teacher.png";
import Python from "../../../../../public/assets/images/python.png";
import ScrollArea from "@/components/ScrollArea";
import { Loader, BookOpenCheck, TvMinimalPlay } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import CourseCard from "@/components/CourseCard";
import RecommendedCourses from "@/components/Recommends";
import Link from "next/link";
import {
  CheckCircle,
  Bell,
  PlayCircle,
  FileText,
  ChevronUp,
  ChevronDown,
  Gift,
  Globe,
  Clock,
  Download,
} from "lucide-react";
interface CourseDetailProps {
  params: any; // or { id: string } if not a promise in current version
}
interface Params {
  id: string;
}

export default function CourseDetail({ params }: CourseDetailProps) {
  const { id } = React.use(params) as Params;

  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  const course = courses.find((c) => String(c.id) === id);

  if (!course) return <div>Course not found</div>;

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="">
      <div className=" bg-gray-100 p-15">
        <span className="container mx-auto grid grid-cols-1 md:grid-col-reverse md:grid-cols-3 gap-5">
          <div className="order-2 md:order-1 md:pr-15 md:col-span-2">
            <span className="shadow border bg-black text-white inline-block px-3 py-1 text-xs rounded-lg">
              Web Development
            </span>
            <h1 className="text-3xl mt-3 font-bold mb-4">{course.title}</h1>
            <p className="pb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              pariatur recusandae soluta odio nostrum animi quod impedit, nisi
              reprehenderit quaerat nesciunt voluptate voluptatem amet maxime
              dolor sed, qui dolore architecto.
            </p>
            <div className="border-gray-500 my-2 flex items-center justify-between rounded-md">
              <div className="flex m-0">
                <p className="mr-3 text-base font-bold">Instructors</p>
                <div className="flex">
                  <Image
                    src={Teacher}
                    alt={course.title}
                    className="rounded-full mr-3"
                    width={25}
                    height={25}
                  />
                  <p>Lilian</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 w-full">
            <CourseCard course={{ ...course, id: String(course.id) }} />
          </div>
        </span>
      </div>
      <div className=" mx-auto shadow-lg grid p-2 grid-cols-2 md:grid-cols-4 rounded-xl">
        <span className="py-5 pointer flex flex-col items-center justify-center transition-transform duration-500 hover:-translate-y-1 border-r-2">
          <p className="text-xl font-bold">Beginner Level</p>
          <p className="text-xs">No prior Experience</p>
        </span>
        <span className="py-5 pointer flex flex-col items-center justify-center transition-transform duration-500 hover:-translate-y-1 border-r-2">
          <p className="font-bold">8 Chapters</p>
          <p className="text-xs">Structured Chapters</p>
        </span>
        <span className="py-5 pointer flex flex-col items-center justify-center transition-transform duration-500 hover:-translate-y-1 border-r-2">
          <p className="text-xl font-bold">11 Hours</p>
          <p className="text-xs">Time well spend</p>
        </span>
        <span className="py-5 pointer flex flex-col items-center justify-center transition-transform duration-500 hover:-translate-y-1">
          <p className="text-xl font-bold">Certification Included</p>
          <p className="text-xs">Certification over your knowledge</p>
        </span>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full pointer">
              <TabsList className="grid w-full grid-cols-4 pointer">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="course includes">
                  Course Includes
                </TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>What you'll learn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-3">
                      {course.learningPoints.map((point, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{point}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {course.requirements.map((req, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-gray-400">•</span>
                          <span className="text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Who this course is for</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {course.targetAudience.map((audience, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-gray-400">•</span>
                          <span className="text-sm">{audience}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="curriculum" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Course curriculum</CardTitle>
                    <p className="text-sm text-gray-600">
                      {course.curriculum.reduce(
                        (acc, section) => acc + section.lectures,
                        0
                      )}{" "}
                      lectures • {course.duration} total length
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {course.curriculum.map((section, index) => (
                      <div key={index} className="border rounded-lg">
                        <button
                          onClick={() => toggleSection(index)}
                          className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            <span className="font-medium">{section.title}</span>
                            <Badge variant="secondary" className="text-xs">
                              {section.lectures} lectures
                            </Badge>
                            <span className="text-sm text-gray-500">
                              {section.duration}
                            </span>
                          </div>
                          {expandedSection === index ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </button>

                        {expandedSection === index && (
                          <div className="px-4 pb-4 space-y-2">
                            {section.lessons.map((lesson, lessonIndex) => (
                              <div
                                key={lessonIndex}
                                className="flex items-center space-x-3 py-2"
                              >
                                {lesson.type === "video" ? (
                                  <PlayCircle className="h-4 w-4 text-gray-400" />
                                ) : (
                                  <FileText className="h-4 w-4 text-gray-400" />
                                )}
                                <span className="text-sm">{lesson.title}</span>
                                <span className="text-xs text-gray-500 ml-auto">
                                  {lesson.duration}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="instructor">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage
                          src={course.instructorImage}
                          alt={course.instructor}
                        />
                        <AvatarFallback>{course.instructor[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">
                          {course.instructor}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Senior React Developer
                        </p>

                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="text-center">
                            <div className="text-lg font-bold text-gray-900">
                              {course.rating}
                            </div>
                            <div className="text-sm text-gray-600">
                              Instructor Rating
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-gray-900">
                              {course.students.toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-600">
                              Students
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-gray-900">
                              12
                            </div>
                            <div className="text-sm text-gray-600">Courses</div>
                          </div>
                        </div>

                        <p className="text-sm text-gray-600">
                          John is a senior React developer with 8+ years of
                          experience building scalable web applications. He has
                          worked with companies like Google, Microsoft, and
                          several startups, helping them build amazing user
                          experiences.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="course includes">
                <Card>
                  <CardHeader>
                    <CardTitle>Course includes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span>{course.duration} on-demand video</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Download className="h-4 w-4 text-gray-500" />
                      <span>Downloadable resources</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Globe className="h-4 w-4 text-gray-500" />
                      <span>Full lifetime access</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Gift className="h-4 w-4 text-gray-500" />
                      <span>Certificate of completion</span>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <div className="col-span-1 p-5 bg-black flex flex-col rounded-xl">
            <p className="flex text-white items-center text-2xl text-center mb-8 font-bold gap-5">
              <TvMinimalPlay /> Upcoming live
            </p>
            <Image
              src={Python}
              alt={course.title}
              className="mb-4 cover rounded-lg w-full h-auto"
              width={200}
              height={250}
              style={{ width: "", height: 300 }}
            />
            <div className="flex justify-between px-5 py-3 border-b">
              <p className="flex text-white items-start font-bold">
                Web development in AI era
              </p>
              <span className="shadow border bg-white text-black inline-block px-3 py-1 text-xs rounded-lg">
                50 minutes
              </span>
            </div>
            <div className="flex items-center gap-5">
              <span className="pointer shadow flex mt-8 border bg-white text-black px-3 w-1/2 py-3 text-base rounded-lg gap-5">
                <Bell />
                Notify Me
              </span>{" "}
              <p className="text-white mt-8 ">21/12/25</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 md:ml-10 py-15 mt- gap-4 rounded-l-3xl">
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
                <CourseCard course={{ ...course, id: course.id.toString() }} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

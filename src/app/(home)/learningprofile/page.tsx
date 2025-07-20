"use client";
import React from "react";
import Link from "next/link";
import {
  Play,
  Clock,
  BookOpen,
  Award,
  TrendingUp,
  Calendar,
  User,
  Settings,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  courses,
  learningProgress,
  notifications,
} from "../../../../public/assets/pages/learn";

const Dashboard = () => {
  // Mock user data instead of using authentication
  const mockUser = {
    name: "John Doe",
    enrolledCourses: [1, 2], // IDs of courses from the courses array
    completedCourses: [3], // IDs of completed courses
  };

  // Use the mock user instead of the auth hook
  const user = mockUser;

  const enrolledCourses = courses.filter((course) =>
    user.enrolledCourses?.includes(course.id)
  );
  const completedCourses = courses.filter((course) =>
    user.completedCourses?.includes(course.id)
  );
  const totalProgress = enrolledCourses.reduce((acc, course) => {
    const progress = learningProgress[course.id as keyof typeof learningProgress];
    return acc + (progress?.percentage || 0);
  }, 0);
  const averageProgress =
    enrolledCourses.length > 0 ? totalProgress / enrolledCourses.length : 0;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-100 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome back, {user.name}! 👋
              </h1>
              <p className="text-gray-600 mt-1">
                Continue your learning journey
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" asChild>
                <Link href="/profile">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/settings">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="pointer hover:shadow-lg text-white transition-transform duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-black text-sm font-medium">
                    Enrolled Courses
                  </p>
                  <p className="text-3xl text-black font-bold">
                    {enrolledCourses.length}
                  </p>
                </div>
                <BookOpen className="h-8 w-8 text-black" />
              </div>
            </CardContent>
          </Card>

          <Card className="pointer hover:shadow-lg text-white transition-transform duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-black text-sm font-medium">Completed</p>
                  <p className="text-3xl text-black font-bold">
                    {completedCourses.length}
                  </p>
                </div>
                <Award className="h-8 w-8 text-black" />
              </div>
            </CardContent>
          </Card>

          <Card className="pointer hover:shadow-lg text-white transition-transform duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-black text-sm font-medium">
                    Average Progress
                  </p>
                  <p className="text-3xl text-black font-bold">
                    {Math.round(averageProgress)}%
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-black" />
              </div>
            </CardContent>
          </Card>

          <Card className="pointer hover:shadow-lg text-white transition-transform duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-black text-sm font-medium">
                    Learning Hours
                  </p>
                  <p className="text-3xl text-black font-bold">42</p>
                </div>
                <Clock className="h-8 w-8 text-black" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="learning" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="learning">Continue Learning</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="certificates">Certificates</TabsTrigger>
              </TabsList>

              <TabsContent value="learning" className="space-y-6 pointer">
                <Card>
                  <CardHeader>
                    <CardTitle>Continue Learning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {enrolledCourses.length === 0 ? (
                      <div className="text-center py-8">
                        <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                          No courses yet
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Start learning by enrolling in a course
                        </p>
                        <Button asChild>
                          <Link href="/courses">Browse Courses</Link>
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {enrolledCourses.map((course) => {
                          const progress = learningProgress[
                            course.id as keyof typeof learningProgress
                          ] || {
                            percentage: 0,
                            completedLessons: 0,
                            totalLessons: 42,
                          };
                          return (
                            <div
                              key={course.id}
                              className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                            >
                              <div className="flex items-start space-x-4">
                                <img
                                  src={course.image}
                                  alt={course.title}
                                  className="w-20 h-14 object-cover rounded"
                                />
                                <div className="flex-1">
                                  <h3 className="font-semibold text-lg mb-1">
                                    {course.title}
                                  </h3>
                                  <p className="text-sm text-gray-600 mb-2">
                                    by {course.instructor}
                                  </p>

                                  <div className="flex items-center space-x-4 mb-3">
                                    <div className="flex-1">
                                      <div className="flex items-center justify-between text-sm mb-1">
                                        <span>
                                          {progress.completedLessons} of{" "}
                                          {progress.totalLessons} lessons
                                        </span>
                                        <span>{progress.percentage}%</span>
                                      </div>
                                      <Progress
                                        value={progress.percentage}
                                        className="h-2"
                                      />
                                    </div>
                                  </div>

                                  <div className="flex items-center space-x-2">
                                    <Button size="sm" asChild>
                                      <Link
                                        href={`/courses/${course.id}/courseplayer`}
                                      >
                                        <Play className="h-4 w-4 mr-1" />
                                        Continue
                                      </Link>
                                    </Button>
                                    <Button variant="outline" size="sm" asChild>
                                      <Link href={`/courses/${course.id}`}>
                                        View Details
                                      </Link>
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="completed" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Completed Courses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {completedCourses.length === 0 ? (
                      <div className="text-center py-8">
                        <Award className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                          No completed courses yet
                        </h3>
                        <p className="text-gray-600">
                          Complete a course to earn your first certificate
                        </p>
                      </div>
                    ) : (
                      <div className="grid md:grid-cols-2 gap-4">
                        {completedCourses.map((course) => (
                          <div
                            key={course.id}
                            className="border rounded-lg p-4"
                          >
                            <img
                              src={course.image}
                              alt={course.title}
                              className="w-full h-32 object-cover rounded mb-3"
                            />
                            <h3 className="font-semibold mb-1">
                              {course.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                              by {course.instructor}
                            </p>
                            <div className="flex items-center space-x-2">
                              <Badge className="bg-green-100 text-green-800">
                                Completed
                              </Badge>
                              <Button variant="outline" size="sm">
                                <Award className="h-4 w-4 mr-1" />
                                Certificate
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="certificates" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Certificates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <Award className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        No certificates yet
                      </h3>
                      <p className="text-gray-600">
                        Complete courses to earn certificates
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.slice(0, 3).map((notification) => (
                    <div
                      key={notification.id}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm font-medium">
                          {notification.title}
                        </p>
                        <p className="text-xs text-gray-600">
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {notification.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Learning Goals */}
            <Card>
              <CardHeader>
                <CardTitle>Learning Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span>Weekly Goal</span>
                      <span>5/10 hours</span>
                    </div>
                    <Progress value={50} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span>Monthly Goal</span>
                      <span>15/40 hours</span>
                    </div>
                    <Progress value={37.5} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Courses */}
            <Card>
              <CardHeader>
                <CardTitle>Recommended for You</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {courses.slice(0, 2).map((course) => (
                    <Link
                      key={course.id}
                      href={`/courses/${course.id}`}
                      className="block"
                    >
                      <div className="flex space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-12 h-8 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-medium text-sm line-clamp-1">
                            {course.title}
                          </h4>
                          <p className="text-xs text-gray-600">
                            {course.instructor}
                          </p>
                          <p className="text-sm font-bold">${course.price}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

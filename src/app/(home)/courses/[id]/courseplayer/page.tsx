"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Maximize,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  PlayCircle,
  FileText,
  BookOpen,
  Settings,
  MessageSquare,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { useParams } from "next/navigation";
import {
  courses,
  learningProgress,
} from "../../../../../../public/assets/pages/learn";

const CoursePlayer = () => {
  const { id } = useParams();
  //   const { user } = useAuth();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(900); // 15 minutes in seconds
  const [currentLesson, setCurrentLesson] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  const course = courses.find((c) => c.id === parseInt(id as string));
  const progress = learningProgress[parseInt(id as string) as keyof typeof learningProgress] || {
    percentage: 0,
    completedLessons: 0,
    totalLessons: 42,
  };

  useEffect(() => {
    // Simulate video progress
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            return duration;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Course not found
          </h2>
          <p className="text-gray-600 mb-4">
            The course you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link href="/courses">Browse Courses</Link>
          </Button>
        </div>
      </div>
    );
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    setCurrentTime(Math.floor(newTime));
  };

  const goToNextLesson = () => {
    const currentSectionLessons = course.curriculum[currentSection].lessons;
    if (currentLesson < currentSectionLessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
    } else if (currentSection < course.curriculum.length - 1) {
      setCurrentSection(currentSection + 1);
      setCurrentLesson(0);
    }
    setCurrentTime(0);
    setIsPlaying(false);
  };

  const goToPrevLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
    } else if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      setCurrentLesson(
        course.curriculum[currentSection - 1].lessons.length - 1
      );
    }
    setCurrentTime(0);
    setIsPlaying(false);
  };

  const selectLesson = (sectionIndex: number, lessonIndex: number) => {
    setCurrentSection(sectionIndex);
    setCurrentLesson(lessonIndex);
    setCurrentTime(0);
    setIsPlaying(false);
  };

  const currentLessonData =
    course.curriculum[currentSection]?.lessons[currentLesson];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/learningprofile" className="text-gray-300 hover:text-white">
              <ChevronLeft className="h-5 w-5" />
            </Link>
            <div>
              <h1 className="font-semibold text-lg">{course.title}</h1>
              <p className="text-sm text-gray-400">by {course.instructor}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Progress value={progress.percentage} className="w-32 h-2" />
            <span className="text-sm text-gray-400">
              {progress.percentage}% complete
            </span>
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-73px)]">
        {/* Main Video Player */}
        <div className="flex-1 flex flex-col">
          {/* Video Container */}
          <div className="relative flex-1 bg-black">
            {/* Video Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="text-center">
                <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {currentLessonData?.title}
                </h3>
                <p className="text-gray-400">Video content would play here</p>
              </div>
            </div>

            {/* Video Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="space-y-3">
                {/* Progress Bar */}
                <div
                  className="w-full bg-gray-600 rounded-full h-2 cursor-pointer"
                  onClick={handleSeek}
                >
                  <div
                    className="bg-purple-600 h-2 rounded-full transition-all duration-200"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  />
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="sm" onClick={goToPrevLesson}>
                      <SkipBack className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={togglePlayPause}>
                      {isPlaying ? (
                        <Pause className="h-5 w-5" />
                      ) : (
                        <Play className="h-5 w-5" />
                      )}
                    </Button>
                    <Button variant="ghost" size="sm" onClick={goToNextLesson}>
                      <SkipForward className="h-4 w-4" />
                    </Button>
                    <div className="flex items-center space-x-2">
                      <Volume2 className="h-4 w-4" />
                      <div className="w-16 bg-gray-600 rounded-full h-1">
                        <div className="bg-white h-1 rounded-full w-3/4" />
                      </div>
                    </div>
                    <span className="text-sm text-gray-300">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>

                  <div className="flex items-center space-x-4">
                    <select
                      className="bg-gray-700 text-white border-gray-600 rounded px-2 py-1 text-sm"
                      value={playbackSpeed}
                      onChange={(e) =>
                        setPlaybackSpeed(parseFloat(e.target.value))
                      }
                    >
                      <option value={0.5}>0.5x</option>
                      <option value={0.75}>0.75x</option>
                      <option value={1}>1x</option>
                      <option value={1.25}>1.25x</option>
                      <option value={1.5}>1.5x</option>
                      <option value={2}>2x</option>
                    </select>
                    <Button variant="ghost" size="sm">
                      <Maximize className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lesson Info */}
          <div className="bg-gray-800 border-t border-gray-700 p-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-1">
                  {currentLessonData?.title}
                </h2>
                <p className="text-gray-400">
                  Section {currentSection + 1}:{" "}
                  {course.curriculum[currentSection]?.title}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Q&A
                </Button>
                <Button variant="outline" size="sm">
                  <Star className="h-4 w-4 mr-2" />
                  Rate
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div
          className={`${
            sidebarOpen ? "w-80" : "w-0"
          } transition-all duration-300 bg-gray-800 border-l border-gray-700 overflow-hidden`}
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Course Content</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <Tabs defaultValue="curriculum" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
              </TabsList>

              <TabsContent
                value="curriculum"
                className="space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto"
              >
                {course.curriculum.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="space-y-2">
                    <div className="font-medium text-sm text-gray-300 py-2">
                      {section.title}
                    </div>
                    {section.lessons.map((lesson, lessonIndex) => (
                      <button
                        key={lessonIndex}
                        onClick={() => selectLesson(sectionIndex, lessonIndex)}
                        className={`w-full text-left p-2 rounded-lg transition-colors ${
                          currentSection === sectionIndex &&
                          currentLesson === lessonIndex
                            ? "bg-purple-600 text-white"
                            : "bg-gray-700 hover:bg-gray-600 text-gray-300"
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          {lesson.type === "video" ? (
                            <PlayCircle className="h-4 w-4 flex-shrink-0" />
                          ) : (
                            <FileText className="h-4 w-4 flex-shrink-0" />
                          )}
                          <span className="text-sm line-clamp-2">
                            {lesson.title}
                          </span>
                          <span className="text-xs text-gray-400 ml-auto flex-shrink-0">
                            {lesson.duration}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="notes" className="space-y-4">
                <div className="text-center py-8">
                  <BookOpen className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-300 mb-2">
                    No notes yet
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Take notes while watching to remember key points
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Sidebar Toggle Button */}
        {!sidebarOpen && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-4 right-4 z-10"
            onClick={() => setSidebarOpen(true)}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default CoursePlayer;



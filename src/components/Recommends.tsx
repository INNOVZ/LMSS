"use client";
import React, { useState, useEffect } from "react";
import LearnCard from "@/components/CourseCard";
import { useCartStore } from "@/stores/Cart";
import { courses, categories } from "@/../public/assets/pages/learn.js";
import Link from "next/link";
// Mock recommended courses data - replace with actual API call

interface RecommendedCoursesProps {
  maxCourses?: number;
}

const RecommendedCourses: React.FC<RecommendedCoursesProps> = ({
  maxCourses = 4,
}) => {
  const [recommendedCourses, setRecommendedCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { cart, isInCart } = useCartStore();

  useEffect(() => {
    // Simulate API call
    const fetchRecommendations = async () => {
      setLoading(true);

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Filter out courses already in cart
      const filtered = courses
        .filter((course) => !isInCart(String(course.id)))
        .slice(0, maxCourses);

      setRecommendedCourses(filtered);
      setLoading(false);
    };

    fetchRecommendations();
  }, [cart, maxCourses, isInCart]);

  if (loading) {
    return (
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Courses You May Like
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (recommendedCourses.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Courses You May Like
        </h2>
        <p className="text-sm text-gray-600">Based on your interests</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendedCourses.map((course) => (
          <div
            key={course.id}
            className="transition-transform duration-200 hover:scale-105"
          >
            <LearnCard course={course} />
          </div>
        ))}
      </div>

      {/* Mobile horizontal scroll version */}
      <div className="md:hidden mt-6">
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {recommendedCourses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="transition-transform duration-500 hover:-translate-y-1 hover:shadow-md"
            >
              <LearnCard course={{ ...course, id: course.id.toString() }} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedCourses;

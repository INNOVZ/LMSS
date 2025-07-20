"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useCartStore } from "@/stores/Cart";
import { toast } from "sonner";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
// Keep the Course type's id as string.
export type Course = {
  id: string;
  title: string;
  price: number;
  image: string;
  duration: string;
  description: string;
};

interface LearnCardProps {
  course: Course;
}

const CourseCard = React.memo(({ course }: LearnCardProps) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    // Convert id to string if it is not already
    const courseToAdd = {
      ...course,
      id: String(course.id),
    };
    addToCart(courseToAdd);
    toast(`${course.title} added to cart!` ,{
      className:"bg-black text-white"
    });
  };

  return (
    <div className="pointer h-[400px] md:h-auto p-2 shadow hover:shadow-lg bg-white border hover:border hover duration-100 rounded-lg  gap-5">
      {course.image ? (
        <Image
          src={course.image}
          alt={course.title}
          width={400}
          height={150}
          className="rounded-t-lg h-[180px] md:h-auto"
        />
      ) : null}
      <div className="py-3 px-2">
        <div className="pt-3 h-15 flex items-center justify-between">
          <h1 className="font-bold">{course.title}</h1>
        </div>
        <div className="pt-5 flex items-center justify-between">
          <p className="text-xs py-1 inline-block">Beginner friendly</p>
          <span className="shadow border inline-block px-2 py-1 text-xs rounded-md">
            {course.duration}
          </span>
        </div>
        <p className="mt-2  text-md font-semibold border-b border-black inline-block">
          ${course.price.toFixed(2)}
        </p>
      </div>
      <div className="mx-2 relative -bottom-6 flex justify-start">
        <Button
          onClick={handleAddToCart}
          className="pointer bg-gray-900 inline-block text-white px-5 rounded-lg"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
});

CourseCard.displayName = "LearnCard";
export default CourseCard;

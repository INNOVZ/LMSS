import React, { createElement } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import * as LucideIcons from "lucide-react";
import Image from "next/image";

interface LearnCardProps {
  title: string;
  length: string;
  course_image: string | any;
  description: string;
}

const LearnCard = React.memo(
  ({
    title,
    course_image,
    length,
    description,
  }: // icon,
  LearnCardProps) => {
    // const IconComponent = LucideIcons[icon as keyof typeof LucideIcons];

    return (
      <div className="pointer p-2 shadow hover:shadow-lg bg-white border hover:border hover duration-100 rounded-lg">
        <Image
          src={course_image}
          alt={title}
          width={400}
          className="rounded-t-lg"
          height={100}
        />
        <div className=" ">
          <div className="pt-3 px-2 flex align-center w-[full-35] justify-between">
            <h1 className="font-medium">{title}</h1>
          </div>
          <div className="pt-5 px-2 flex align-center justify-between">
            <p className="text-xs py-1 inline-block">Beginner friendly</p>
            <span className="shadow border inline-block px-2 py-1 text-xs rounded-md">
              {length}
            </span>
          </div>{" "}
          <p className="px-2 py-3 text-md font-semibold">$ 9.99</p>
        </div>

        <div className="mx-2 relative bottom-[-25] flex justify-start">
          <Button className="pointer bg-gray-900 inline-block text-white px-5 rounded-lg">
            Enroll Now
          </Button>
        </div>
      </div>
    );
  }
);

// Add a display name for better debugging in React DevTools
LearnCard.displayName = "LearnCard";

export default LearnCard;

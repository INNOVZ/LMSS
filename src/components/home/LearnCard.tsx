import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
interface LearnCardProps {
  title: string;
  course_details: string;
  description: string;
  buttomText: string;
  link: string;
}

export function LearnCard({
  title,
  course_details,
  description,
  buttomText,
  link,
}: LearnCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{course_details}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-base text-justify">{description}</p>
      </CardContent>
      <CardFooter>
        <p>{buttomText}</p>
      </CardFooter>
    </Card>
  );
}

import { createElement } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Rss } from "lucide-react";
interface LearnCardProps {
  title: string;
  course_details: string;
  description: string;
  buttomText: string;
  link: string;
  icon: string;
}
import * as LucideIcons from "lucide-react";

export function LearnCard({
  title,
  course_details,
  description,
  buttomText,
  link,
  icon,
}: LearnCardProps) {
  const IconComponent = LucideIcons[icon as keyof typeof LucideIcons];
  return (
    <Card>
      <CardHeader>
        {IconComponent && (
          <span className="text-indigo-500">
            <IconComponent size={24} />
          </span>
        )}
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

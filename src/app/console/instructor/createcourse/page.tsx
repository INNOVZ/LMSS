"use client";
import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { categories } from "../../../../../public/assets/pages/learn.js";


const formSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters long",
  }),
  description: z.string().min(20, {
    message: "Description must be at least 20 characters long",
  }),
  categoryId: z.string().min(1, "Please select a category"),
  price: z.number().min(0, {
    message: "Price must be a positive number",
  }),
  duration: z.string().min(1, {
    message: "Duration is required",
  }),
  level: z.enum(["beginner", "intermediate", "advanced"], {
    message: "Please select a level",
  }),
  image: z.string().url().optional().or(z.literal("")),
});


type FormValues = z.infer<typeof formSchema>;

const CreateCoursePage = () => {
  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      categoryId: "",
      price: 0,
      duration: "",
      level: "beginner",
      image: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: FormValues) => {
    try {
      console.log("Course data:", values);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast("Course created successfully!", {
        className: "bg-green-500 text-white",
      });

      // Redirect to course management or created course
      // router.push(`/console/instructor/courses/${newCourseId}`);
    } catch (error) {
      toast("Something went wrong. Please try again.", {
        className: "bg-red-500 text-white",
      });
    }
  };

  return (
    <div className="w-[40vw] mx-8 bg-gray-50 py-8">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Create New Course
          </h1>
          <p className="text-gray-600 mt-2">
            Fill in the details below to create your course
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Course Information</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Title */}
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Course Title *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter course title"
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormDescription>
                        This will be the main title of your course
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Description */}
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Course Description *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe what students will learn in this course..."
                          className="min-h-[120px]"
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormDescription>
                        Provide a detailed description of your course content
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Category and Level */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="categoryId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category *</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          disabled={isSubmitting}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem
                                key={category.id}
                                value={category.id.toString()}
                              >
                                {category.icon} {category.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="level"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Course Level *</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          disabled={isSubmitting}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="beginner">Beginner</SelectItem>
                            <SelectItem value="intermediate">
                              Intermediate
                            </SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Price and Duration */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Price (USD) *</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="0.00"
                            {...field}
                            onChange={(e) =>
                              field.onChange(Number(e.target.value))
                            }
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormDescription>
                          Set to 0 for free courses
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Duration *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., 2 hours, 5 weeks"
                            {...field}
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormDescription>
                          Estimated time to complete
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Course Image URL */}
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Course Image URL</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://example.com/image.jpg"
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormDescription>
                        Optional: URL to course thumbnail image
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Action Buttons */}
                <div className="flex justify-between pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.back()}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>

                  <div className="space-x-4">
                    <Button
                      type="button"
                      variant="ghost"
                      disabled={isSubmitting || !isValid}
                      onClick={() => {
                        // Save as draft functionality
                        toast("Draft saved!", {
                          className: "bg-blue-500 text-white",
                        });
                      }}
                    >
                      Save as Draft
                    </Button>

                    <Button
                      type="submit"
                      disabled={isSubmitting || !isValid}
                      className="min-w-[120px]"
                    >
                      {isSubmitting ? "Creating..." : "Create Course"}
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateCoursePage;

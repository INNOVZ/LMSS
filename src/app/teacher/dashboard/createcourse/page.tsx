"use client";
import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
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

const formSchema = z.object({
  title: z.string().min(5, {
    message: "title required",
  }),
});

const page = () => {
  // const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });
  const { isSubmitting, isValid } = form.formState;

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="p-15 w-screen">
      <h1 className="text-2xl font-bold">Create Course</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/2  my-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Course title" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
                
            )}
          />
          <div className="py-10 text-right">
            <Button
              variant="ghost"
              type="button"
              disabled={isSubmitting || !isValid}
            >
              Create
            </Button>
            <Button type="submit" disabled={isSubmitting || !isValid}>
              Conitnue
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default page;

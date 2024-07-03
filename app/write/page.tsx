"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const PostSchema = z.object({
  title: z.string().min(1),
  body: z.string().min(1),
  imageUrl: z.string().optional(),
});

const page = () => {
  const form = useForm<z.infer<typeof PostSchema>>({
    resolver: zodResolver(PostSchema),
    defaultValues: {
      title: "",
      body: "",
      imageUrl: "",
    },
  });

  const imageUrl = form.watch("imageUrl");

  const handleSubmit = async (values: z.infer<typeof PostSchema>) => {
    console.log(values);
  };

  return (
    <div className="w-full h-full flex justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-full flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-full h-16 placeholder:text-2xl border-none text-xl outline-none focus-visible:ring-1 focus-visible:ring-blue-400"
                    placeholder="Title"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="w-full h-44 border-none text-xl outline-none focus-visible:ring-1 focus-visible:ring-blue-400"
                    placeholder="Tell your story..."
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <button type="submit">pusblis</button>
        </form>
      </Form>
    </div>
  );
};

export default page;

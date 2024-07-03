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
});

const page = () => {
  const form = useForm<z.infer<typeof PostSchema>>({
    resolver: zodResolver(PostSchema),
    defaultValues: {
      title: "",
      body: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof PostSchema>) => {
    console.log(values);
  };

  return (
    <div className="w-full flex justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="w-full border-none"
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
                    className="w-full border-none"
                    placeholder="Title"
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

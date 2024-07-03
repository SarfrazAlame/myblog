"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { UploadButton } from "@/utils/uploadthing";
import Image from "next/image";
import toast from "react-hot-toast";
import { PostSchema } from "@/types/alltypes";
import { CreatePost } from "@/lib/action";

const page = () => {
  const form = useForm<z.infer<typeof PostSchema>>({
    resolver: zodResolver(PostSchema),
    defaultValues: {
      title: "",
      body: "",
      imageUrl: undefined,
    },
  });

  const imageUrl = form.watch("imageUrl");

  const handleSubmit = async (values: z.infer<typeof PostSchema>) => {
    try {
      await CreatePost(values);
      toast.success("Blog Created");
    } catch (error) {
      toast.error("Something went wrong");
    }
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
          {!!imageUrl ? (
            <>
              <div>
                <Image src={imageUrl} alt="" width={300} height={300} />
              </div>
            </>
          ) : (
            <>
              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field, fieldState }) => (
                  <FormControl>
                    <UploadButton
                      endpoint="imageUploader"
                      onClientUploadComplete={(res) => {
                        form.setValue("imageUrl", res[0].url);
                      }}
                      onUploadError={(error: Error) => {
                        toast.error("Something went wrong");
                      }}
                    />
                  </FormControl>
                )}
              />
            </>
          )}
          <div className="flex justify-center">
            <button
              type="submit"
              className="border py-2 px-6 rounded-md  bg-green-600 text-white"
            >
              pusblis
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default page;

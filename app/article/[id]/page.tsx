import Timestamp from "@/components/Timestamp";
import { getBlogById } from "@/lib/data";
import Image from "next/image";
import React from "react";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const blog = await getBlogById(id);

  return (
    <div className="w-full flex flex-col gap-y-4">
      <div className="w-1/3 mx-auto flex flex-col gap-y-4">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div>
              {blog?.user.image && (
                <Image
                  src={blog.user.image!}
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              )}
            </div>
            <div>
              <p className="text-[12px] text-gray-600 dark:text-gray-300">
                Written by:
              </p>
              <p className="font-bold text-gray-600 dark:text-gray-200">
                {blog?.user.name}
              </p>
            </div>
          </div>
          <div className="">
            <Timestamp createAt={blog?.createdAt!} className="" />.
            <p className="text-sm">4 min read</p>
          </div>
        </div>

        <div className="flex flex-col gap-y-3">
          <h1 className="text-2xl font-extrabold text-gray-600 dark:text-gray-300">
            {blog?.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {blog?.body.slice(0, 50)}
          </p>
          <div>
            {blog?.imageUrl && (
              <Image
                src={blog.imageUrl!}
                alt=""
                width={500}
                height={500}
                className="w-full"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

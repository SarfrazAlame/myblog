import { getBlog } from "@/lib/data";
import Image from "next/image";
import React from "react";

const Blogs = async () => {
  const blogs = await getBlog();
  return (
    <div className="my-12 w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="flex flex-col w-3/4 mx-auto items-center cursor-pointer gap-5 bg-zinc-100 dark:bg-black rounded shadow-lg dark:bg-transparent"
        >
          {blog?.imageUrl && (
            <Image
              src={blog?.imageUrl!}
              alt=""
              width={300}
              height={300}
              className="rounded w-full h-1/2"
            />
          )}
          {blog.title && (
            <div className="w-full flex flex-col gap-y-3 px-5">
              <p className="text-2xl font-bold text-gray-800 dark:text-slate-300">
                {blog?.title}
              </p>
              <p className=" text-slate-800 dark:text-slate-300">
                {blog?.body.slice(0, 100)}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Blogs;

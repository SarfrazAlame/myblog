import { getBlog } from "@/lib/data";
import Image from "next/image";
import React from "react";
import DeletePost from "./DeletePost";

const Blogs = async () => {
  const blogs = await getBlog();
  return (
    <div className="my-12 h-full w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="flex flex-col w-3/4 mx-auto cursor-pointer gap-5 bg-zinc-100 dark:bg-black rounded-2xl shadow-lg dark:bg-transparent"
        >
          {blog?.imageUrl && (
            <Image
              src={blog?.imageUrl!}
              alt=""
              width={300}
              height={300}
              className="w-full h-1/2 rounded-2xl"
            />
          )}
          {blog.title && (
            <div className="w-full flex flex-col gap-y-3 px-5">
              <p className="text-2xl font-bold text-gray-800 dark:text-slate-300">
                {blog?.title}
              </p>
              <p className=" text-slate-800 dark:text-slate-300">
                {blog?.body.slice(0, 50)}
              </p>
            </div>
          )}
          <div className="flex">
            <div className="flex px-4 gap-3">
              <div>
                {blog.imageUrl && (
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
                <p className="text-sm text-gray-600">Written by:</p>
                <p className="font-bold text-gray-700">{blog.user.name}</p>
              </div>
            </div>
            <div>
                <DeletePost blog={blog}/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;

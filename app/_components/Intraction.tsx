"use client";
import { LikePost } from "@/lib/action";
import { BlogWithAll } from "@/types/schema";
import { Like } from "@prisma/client";
import { HeartIcon } from "lucide-react";
import React from "react";
import { FaRegComments } from "react-icons/fa6";

const Intraction = ({
  blog,
  like,
  userId,
}: {
  blog: BlogWithAll;
  like: Like;
  userId: string;
}) => {
  return (
    <div className="flex justify-around bg-gray-200 py-1 rounded">
      <div className="flex gap-1 items-center">
        <HeartIcon
          size={20}
          className={
            blog.userId === like?.userId && userId
              ? "cursor-pointer fill-red-600 text-red-600"
              : "cursor-pointer text-gray-600"
          }
          onClick={() => LikePost(blog.id, userId)}
        />
        <p className="dark:text-gray-700">{blog.like.length}</p>
      </div>
      <div>
        <FaRegComments size={20} className="cursor-pointer text-gray-600" />
      </div>
    </div>
  );
};

export default Intraction;

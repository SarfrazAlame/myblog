"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DeleteBlog } from "@/lib/action";
import { BlogWithAll } from "@/types/schema";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import React from "react";
import { BsThreeDots } from "react-icons/bs";

const DeletePost = ({
  blog,
  userId,
}: {
  blog: BlogWithAll;
  userId: string;
}) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <BsThreeDots />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {blog.user.id === userId ? (
            <DropdownMenuItem
              className="text-sm text-red-600 cursor-pointer"
              onClick={() => DeleteBlog(blog.id)}
            >
              delete blog
            </DropdownMenuItem>
          ) : (
            "node"
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DeletePost;

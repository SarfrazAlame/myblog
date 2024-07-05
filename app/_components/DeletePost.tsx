"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DeleteBlog } from "@/lib/action";
import { BlogWithAll } from "@/types/schema";
import { User } from "@prisma/client";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import React from "react";
import { BsThreeDots } from "react-icons/bs";

const DeletePost = ({ blog }: { blog: BlogWithAll }) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <BsThreeDots />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            className="text-sm text-red-600 cursor-pointer"
            onClick={() => DeleteBlog(blog.id)}
          >
            delete blog
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DeletePost;

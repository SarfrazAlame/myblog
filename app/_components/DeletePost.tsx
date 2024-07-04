'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "@prisma/client";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import React from "react";
import { BsThreeDots } from "react-icons/bs";


const DeletePost = ({ blog }: { blog: User }) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <BsThreeDots />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
        <DropdownMenuItem className="text-sm text-red-600">delete blog</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DeletePost;

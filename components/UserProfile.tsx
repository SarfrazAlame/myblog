"use client";
import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { signOut } from "next-auth/react";
import Link from "next/link";

type User =
  | {
      id: string;
      name: string | null | undefined;
      email: string | null | undefined;
      image: string | null | undefined;
      username: string | null | undefined;
    }
  | undefined;

const UserProfile = ({ user }: { user: User }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {" "}
        <div>
          <Image
            src={user?.image!}
            alt=""
            width={45}
            height={45}
            className="rounded-full"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72">
        <DropdownMenuItem>
          <Link href={`/profile/${user?.id}`} className="flex gap-3">
            <div>
              <Image
                src={user?.image!}
                alt=""
                width={45}
                height={45}
                className="rounded-full"
              />
            </div>
            <div>
              <p className="text-lg font-bold text-gray-700 dark:text-gray-300">
                {user?.name}
              </p>
              <p>{user?.email}</p>
            </div>
          </Link>
        </DropdownMenuItem>
          <DropdownMenuSeparator/>
        <DropdownMenuItem>
          <Link href={"/write"}>Write</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfile;

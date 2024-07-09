"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { CommentBlog, LikePost } from "@/lib/action";
import { BlogWithAll } from "@/types/schema";
import { Like, User } from "@prisma/client";
import { HeartIcon } from "lucide-react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaGoogle, FaRegComments } from "react-icons/fa6";

const Intraction = ({
  blog,
  like,
  userId,
  user,
}: {
  blog: BlogWithAll;
  like: Like;
  userId: string;
  user: User;
}) => {
  const [response, setResponse] = useState("");
  const id = blog?.like.filter((l) => l.userId === like?.id);
  return (
    <div className="flex justify-around bg-gray-200 py-1 rounded">
      <div className="flex gap-1 items-center">
        {userId ? (
          <HeartIcon
            size={20}
            className={
              id && userId && blog.like.length > 0
                ? "cursor-pointer fill-red-600 text-red-600"
                : "cursor-pointer text-gray-600"
            }
            onClick={() => LikePost(blog.id, userId)}
          />
        ) : (
          <>
            <Dialog>
              <DialogTrigger>
                {" "}
                <HeartIcon
                  size={20}
                  className={
                    id && userId && blog.like.length > 0
                      ? "cursor-pointer fill-red-600 text-red-600"
                      : "cursor-pointer text-gray-600"
                  }
                  onClick={() => LikePost(blog.id, userId)}
                />
              </DialogTrigger>
              <DialogContent>
                <div className="text-center text-xl font-bold text-gray-700 dark:text-gray-200">
                  Please Login to like and comment
                </div>
                <DialogHeader>
                  <Button onClick={() => signIn("google")}>
                    <FaGoogle className="mx-3 text-xl" />
                    Login With Google
                  </Button>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </>
        )}
        <p className="dark:text-gray-700">{blog?.like.length}</p>
      </div>
      <div className="flex gap-1 items-center">
        {userId ? (
          <Sheet>
            <SheetTrigger>
              <FaRegComments
                size={20}
                className="cursor-pointer text-gray-600"
              />
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-y-3">
                <div className="flex gap-1 items-center">
                  <Image
                    src={user?.image!}
                    alt=""
                    width={35}
                    height={35}
                    className="rounded-full"
                  />
                  <p className="text-sm">{user?.name}</p>
                </div>
                <Textarea
                  placeholder="Your Response..."
                  value={response}
                  onChange={(e) => setResponse(e.target.value)}
                />
                <Button
                  className="bg-green-600 text-gray-200"
                  onClick={() => {
                    CommentBlog(blog.id, userId, response);
                    toast.success("response sent");
                  }}
                >
                  Submit
                </Button>

                <div>
                  {blog.comment.map((com) => (
                    <div key={com.id} className="flex flex-col border p-2 my-2 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Image
                          src={com.user.image!}
                          alt=""
                          width={35}
                          height={35}
                          className="rounded-full"
                        />
                        <p className="text-sm">{com.user.name}</p>
                      </div>
                      <div>
                        <p className="mx-12 text-sm">{com.response}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <>
            <Dialog>
              <DialogTrigger>
                {" "}
                <FaRegComments
                  size={20}
                  className={
                    id && userId && blog.comment.length > 0
                      ? "cursor-pointer fill-red-600 text-red-600"
                      : "cursor-pointer text-gray-600"
                  }
                  onClick={() => LikePost(blog.id, userId)}
                />
              </DialogTrigger>
              <DialogContent>
                <div className="text-center text-xl font-bold text-gray-700 dark:text-gray-200">
                  Please Login to like and comment
                </div>
                <DialogHeader>
                  <Button onClick={() => signIn("google")}>
                    <FaGoogle className="mx-3 text-xl" />
                    Login With Google
                  </Button>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </>
        )}
        <p className="dark:text-gray-700">{blog?.comment.length}</p>
      </div>
    </div>
  );
};

export default Intraction;

'use client'
import React from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import ThemeSwitch from "./ThemeSwitch";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa6";

const Login = () => {
  return (
    <div className="flex items-center gap-4">
      <Dialog>
        <DialogTrigger className="border px-3 py-2 rounded-md text-gray-100 bg-gray-800 dark:text-gray-700 dark:bg-gray-100">
          Login
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <div className="flex  flex-col justify-center">
                <h1 className="text-center my-2">
                  Join Blog and Start Writing
                </h1>
                <Button onClick={() => signIn("google")}>
                  <FaGoogle className="mx-3 text-xl" />
                  Login With Google
                </Button>
              </div>
            </DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Login;

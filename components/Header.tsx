import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { BsMedium } from "react-icons/bs";
import { GithubIcon, LinkedinIcon, XIcon } from "lucide-react";
import { FaGoogle, FaHashnode } from "react-icons/fa6";
import Link from "next/link";

import { signIn } from "next-auth/react";
import Login from "./Login";
import { getUserId } from "@/lib/userId";
import { getAuthOptions } from "@/lib/auth";
import Image from "next/image";

const Header = async () => {
  const session = await getAuthOptions();
  const user = session?.user;
  const text = 'Login'
  return (
    <div className="h-28 w-full flex items-center dark:bg-inherit">
      <div className="flex w-full mx-auto items-center justify-around">
        <div>
          <Link
            href={"/"}
            className="text-2xl text-green-700 font-serif dark:text-gray-300"
          >
            SB
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href={"https://x.com/sarfrazk7858"}>
            <XIcon
              size={32}
              className="border bg-black text-white rounded-md cursor-pointer hover:bg-gray-600"
            />
          </Link>
          <Link href={"https://github.com/SarfrazAlame"}>
            <GithubIcon
              size={32}
              className="border bg-black text-white rounded-md cursor-pointer hover:bg-gray-600"
            />
          </Link>
          <Link href={"https://medium.com/@sarfrazk7858"}>
            <BsMedium
              size={32}
              className="text-2xl px-1 border bg-black text-white rounded-md cursor-pointer hover:bg-gray-600"
            />
          </Link>
          <Link href={"https://hashnode.com/@MohammedSarfraz"}>
            <FaHashnode
              size={32}
              className="text-2xl px-1 border bg-blue-800 text-white rounded-md cursor-pointer hover:bg-gray-600"
            />
          </Link>
          <Link href={"https://www.linkedin.com/in/sarfraz-alam-25a262236/"}>
            <LinkedinIcon
              size={32}
              className="border bg-blue-600 px-1 text-white rounded-md cursor-pointer hover:bg-gray-600"
            />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <ThemeSwitch />
          </div>
          {!user ? (
            <Login text={text}/>
          ) : (
            <>
              <div>
                <Image
                  src={user.image!}
                  alt=""
                  width={45}
                  height={45}
                  className="rounded-full"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

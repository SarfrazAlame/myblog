import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { BsHash, BsMedium, BsTwitter, BsX } from "react-icons/bs";
import { GithubIcon, Linkedin, LinkedinIcon, X, XIcon } from "lucide-react";
import { FaHashnode } from "react-icons/fa6";
import Link from "next/link";

const Header = () => {
  return (
    <div className="h-28 flex items-center dark:bg-inherit">
      <div className="flex w-full justify-between">
        <div>
          <Link
            href={"/"}
            className="text-2xl text-green-700 font-serif dark:text-gray-300"
          >
            SB
          </Link>
        </div>
        <div className="flex gap-4">
          <XIcon
            size={32}
            className="border bg-black text-white rounded-md cursor-pointer hover:bg-gray-600"
          />
          <GithubIcon
            size={32}
            className="border bg-black text-white rounded-md cursor-pointer hover:bg-gray-600"
          />
          <BsMedium
            size={32}
            className="text-2xl px-1 border bg-black text-white rounded-md cursor-pointer hover:bg-gray-600"
          />
          <FaHashnode
            size={32}
            className="text-2xl px-1 border bg-blue-800 text-white rounded-md cursor-pointer hover:bg-gray-600"
          />
          <LinkedinIcon
            size={32}
            className="border bg-blue-600 px-1 text-white rounded-md cursor-pointer hover:bg-gray-600"
          />
        </div>
        <div>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};

export default Header;

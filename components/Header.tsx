import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { BsHash, BsMedium, BsTwitter, BsX } from "react-icons/bs";
import { GithubIcon, Linkedin, LinkedinIcon, X, XIcon } from "lucide-react";
import { FaHashnode } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="w-full h-20 items-center  bg-zinc-200 dark:bg-inherit flex justify-center">
      <div className="w-1/2 flex justify-between">
        <div>
          <p className="text-xl text-green-700 font-sans dark:text-gray-300">
            Sarfraz's Blog
          </p>
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

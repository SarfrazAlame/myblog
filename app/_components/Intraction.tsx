'use client'
import { HeartIcon } from "lucide-react";
import React from "react";
import { FaRegComments } from "react-icons/fa6";

const Intraction = () => {
  return (
    <div className="flex justify-around bg-gray-200 py-1 rounded">
      <div>
        <HeartIcon size={20} className="cursor-pointer text-gray-600"/>
      </div>
      <div>
        <FaRegComments size={20}  className="cursor-pointer text-gray-600"/>
      </div>
    </div>
  );
};

export default Intraction;

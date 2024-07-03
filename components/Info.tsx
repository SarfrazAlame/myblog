"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Info = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between">
      <p className="text-5xl font-extrabold text-gray-800 dark:text-gray-200">
        Sarfraz's <span className="text-pink-600">Blog</span>
      </p>
      <button
        className="border px-4 rounded-md bg-blue-500 text-gray-100"
        onClick={() => router.push("/write")}
      >
        write
      </button>
    </div>
  );
};

export default Info;

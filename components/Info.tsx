import Link from "next/link";
import React from "react";

const Info = () => {
  return (
    <div className="flex justify-between">
      <p className="text-5xl font-extrabold text-gray-800 dark:text-gray-200">
        Sarfraz's <span className="text-pink-600">Blog</span>
      </p>
      <div className="flex items-center">
        <Link
          href={"/write"}
          className="border px-4 py-2 items-center rounded-md bg-blue-500 text-gray-100"
        >
          write
        </Link>
      </div>
    </div>
  );
};

export default Info;

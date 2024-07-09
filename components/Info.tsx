import { getAuthOptions } from "@/lib/auth";
import Link from "next/link";
import React from "react";
import Login from "./Login";

const Info = async () => {
  const session = await getAuthOptions();
  const user = session?.user;
  const text = "Write";
  return (
    <div className="flex justify-around">
      <p className="md:text-5xl text-3xl font-extrabold text-gray-800 dark:text-gray-200">
        Sarfraz <span className="text-pink-600">Blog</span>
      </p>
      <div className="flex items-center">
        {user ? (
          <Link
            href={"/write"}
            className="border px-4 py-2 items-center rounded-md bg-blue-500 text-gray-100"
          >
            write
          </Link>
        ) : (
          <>
            <Login text={text} />
          </>
        )}
      </div>
    </div>
  );
};

export default Info;

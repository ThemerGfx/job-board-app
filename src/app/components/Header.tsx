import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        <div className=" container flex items-center justify-between my-4">
          <Link href={"/"} className="font-bold text-xl">
            Job Board
          </Link>
          <nav className="flex gap-2 *:py-2 *:px-4 *:rounded-md">
            <Link href={"/login"} className="bg-gray-200">
              Login
            </Link>
            <Link href={"/new-listing"} className="bg-blue-600 text-white">
              Post a job
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;

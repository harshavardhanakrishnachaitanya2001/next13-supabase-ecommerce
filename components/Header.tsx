import Image from "next/image";
import React from "react";
import logo from "../public/logo.jpeg";
import Navbar from "./Navbar";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="py-3 text-center font-bold text-4xl">
          Krishna Chaitanya Stores
        </h1>
        <Image
          src={logo}
          alt="my pic"
          className="rounded-full"
          width={50}
          height={50}
        />

        <Link className="px-5 py-3 rounded-md bg-blue-300" href="/signin">
          Sign in
        </Link>
      </div>
      <Navbar />
    </>
  );
};

export default Header;

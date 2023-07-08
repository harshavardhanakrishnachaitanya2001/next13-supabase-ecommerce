import Image from "next/image";
import React from "react";
import logo from "../public/logo.jpeg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-evenly">
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
      </div>
        <Navbar />
    </>
  );
};

export default Header;

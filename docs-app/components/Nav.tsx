import Image from "next/image";
import React from "react";
import logo from "../public/logo.svg";

export const Nav = () => {
  return (
    <nav className="flex items-center px-6 justify-between border-b-2 h-[8%]">
      <div className="flex gap-x-3 items-center font-semibold text-sm">
        <Image src={logo} alt="logo" className="h-5 w-5" />
        <p>React Daraja</p>
      </div>
    </nav>
  );
};

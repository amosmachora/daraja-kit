import Image from "next/image";
import React from "react";
import logo from "../public/icon_large.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Nav = () => {
  return (
    <nav className="flex items-center px-6 justify-between border-b-2 h-[8%]">
      <div className="flex gap-x-3 items-center font-semibold text-sm">
        <Image src={logo} alt="logo" className="h-5 w-5 rounded-full" />
        <p>React Daraja</p>
      </div>
      <a
        href="https://github.com/amosmachora/react-daraja"
        className="font-semibold hover:text-myPurple"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github <FontAwesomeIcon icon={faGithub} />{" "}
      </a>
    </nav>
  );
};

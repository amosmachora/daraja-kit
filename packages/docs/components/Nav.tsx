import Image from "next/image";
import React from "react";
import logo from "../public/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export const Nav = () => {
  return (
    <nav className="flex items-center px-6 justify-between border-b-2 py-3 h-[8%]">
      <Link href="/" className="flex gap-x-3 items-center">
        <Image src={logo} alt="logo" className="h-10 w-10 object-cover" />
        <p className="font-semibold text-sm">Daraja Kit Docs</p>
      </Link>
      <a
        href="https://github.com/amosmachora/daraja-kit"
        className="font-semibold hover:text-myPurple"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github <FontAwesomeIcon icon={faGithub} />{" "}
      </a>
    </nav>
  );
};

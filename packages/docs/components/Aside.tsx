"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const links = [
  { text: "introduction", link: "/" },
  { text: "installation", link: "/installation" },
  { text: "api", link: "/api" },
  { text: "utils", link: "/utils" },
];

export const Aside = () => {
  const pathName = usePathname();

  return (
    <aside className="p-1 w-1/6 flex flex-col border-r text-sm text-[#606770]">
      {links.map((l) => {
        const isActive =
          pathName.includes(l.text) ||
          (l.text === "introduction" ? pathName.length === 1 : false);

        return (
          <Link
            href={l.link}
            key={l.text}
            className={`capitalize px-6 py-1 mb-2 ${
              isActive && "text-[#dd4add] bg-[#f2f2f2] rounded"
            }`}
          >
            {l.text}
          </Link>
        );
      })}
    </aside>
  );
};

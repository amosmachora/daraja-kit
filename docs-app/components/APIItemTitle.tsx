"use client";

import React, { useState } from "react";

export const APIItemTitle = ({ text }: { text: string }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <h3
      id={text.replaceAll(" ", "")}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex gap-x-2"
    >
      <p className="bg-gray-100 font-semibold border px-2">{text}</p>
      {hovered && (
        <button
          className="text-myPurple hover:underline"
          onClick={() =>
            navigator.clipboard.writeText(
              `${document.location}/api#${text.replace(" ", "")}`
            )
          }
        >
          #
        </button>
      )}
    </h3>
  );
};

"use client";

import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const tabs = ["npm", "pnpm", "yarn"];

export const InstallCommands = () => {
  const [activeTab, setActiveTab] = useState<"npm" | "pnpm" | "yarn">("npm");

  const command = (() => {
    switch (activeTab) {
      case "pnpm":
        return "pnpm add daraja-kit";
      case "yarn":
        return "yarn add daraja-kit";
      default:
        return "npm install daraja-kit";
    }
  })();

  return (
    <div className="mt-5">
      <div className="flex gap-x-5 mb-3">
        {tabs.map((tab) => (
          <p
            key={tab}
            className={`${
              activeTab === tab &&
              "text-myPurple border-b-2 border-myPurple font-semibold"
            } hover:bg-gray-100 cursor-pointer p-3 rounded font-semibold text-sm`}
            //   @ts-ignore
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </p>
        ))}
      </div>
      <Commands command={command} />
    </div>
  );
};

const Commands = ({ command }: { command: string }) => {
  return (
    <div className="py-3 px-5 rounded bg-gray-200 flex justify-between">
      <p>
        <span className="text-myPurple">
          {command.split(" ").slice(0, 2).join(" ")}
        </span>{" "}
        {command.split(" ").at(-1)}
      </p>
      <FontAwesomeIcon
        icon={faCopy}
        onClick={() => navigator.clipboard.writeText(command)}
        className="cursor-pointer w-3 h-3"
      />
    </div>
  );
};

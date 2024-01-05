import { InstallCommands } from "@/components/InstallCommands";
import { NextPage } from "@/components/NextPage";
import { PageNavSmall } from "@/components/PageNavSmall";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Installation",
};

const Page = () => {
  return (
    <main className="w-4/5 p-5">
      <PageNavSmall />
      <h1>Installation</h1>
      <p className="mt-2">
        In the directory containing package.json, run your package manager`s
        install command:
      </p>
      <InstallCommands />
      <div className="mt-5 rounded-md overflow-clip bg-blue-200 flex">
        <div className="bg-blue-500 w-2" />
        <div className="p-5">
          <div className="flex items-center gap-x-2">
            <FontAwesomeIcon icon={faCircleInfo} />
            <p>INFO</p>
          </div>
          React Daraja has a peer dependency on React 18. If you use the node
          apis you don`t need to have react installed.
        </div>
      </div>
      <h2 className="mt-5">Basic usage</h2>
      <p className="text-sm mt-2">
        The library consists of a collection of typescript functions, types and
        some react components. If you want to use the react components they are
        under /react and for nextjs they are under /next
      </p>
      <NextPage nextHref="api" prevHref="introduction" />
    </main>
  );
};

export default Page;

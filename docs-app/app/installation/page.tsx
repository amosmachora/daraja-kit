import { CopyPastableSpan } from "@/components/CopyPastableSpan";
import { InstallCommands } from "@/components/InstallCommands";
import { NextPage } from "@/components/NextPage";
import { PageNavSmall } from "@/components/PageNavSmall";
import { ScrollArea } from "@/components/ui/scroll-area";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Installation",
};

const links = ["installation", "basic-usage"];

const Page = () => {
  return (
    <>
      <ScrollArea className="w-4/6 h-full p-5">
        <PageNavSmall />
        <h1 id="installation">Installation</h1>
        <p className="mt-5">
          In the directory containing package.json, run your package manager`s
          install command:
        </p>
        <InstallCommands />
        <p className="mt-5">
          Before using the library, make sure to set up the required environment
          variables in the .env file. These variables include:
        </p>
        <div className="mt-5 flex flex-col gap-2 pl-5">
          <p>
            <CopyPastableSpan text="ENVIRONMENT" />: Set the environment to
            either <CopyPastableSpan text="production" /> or
            <CopyPastableSpan text="development." />
          </p>
          <p>
            <CopyPastableSpan text="MPESA_CONSUMER_KEY" />: Consumer Key
            obtained from Safaricom Daraja.
          </p>
          <p>
            <CopyPastableSpan text="MPESA_CONSUMER_SECRET" />: Consumer Secret
            obtained from Safaricom Daraja.
          </p>
          <p>
            <CopyPastableSpan text="MPESA_BUSINESS_SHORT_CODE" />: Your M-Pesa
            business short code. For Sandbox use the code{" "}
            <CopyPastableSpan text="174379" />
          </p>
          <p>
            <CopyPastableSpan text="MPESA_TRANSACTION_TYPE" /> : Set the
            transaction type, either{" "}
            <CopyPastableSpan text="CustomerPayBillOnline" /> or
            <CopyPastableSpan text="CustomerBuyGoodsOnline" />
          </p>
          <p>
            <CopyPastableSpan text="MPESA_API_PASS_KEY" />: Your M-Pesa API pass
            key. For sandbox use
            <CopyPastableSpan text="bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919" />
          </p>
        </div>
        <p className="mt-5">
          The library throws errors if any of this values are missing from your
          .env file.
        </p>
        <div className="mt-8 rounded-md overflow-clip bg-blue-200 flex">
          <div className="bg-blue-500 w-2" />
          <div className="p-5">
            <div className="flex items-center gap-x-2 text-sm">
              <FontAwesomeIcon icon={faCircleInfo} />
              <p className="font-semibold text-base">INFO</p>
            </div>
            React Daraja has a peer dependency on React 18. If you use the node
            apis you don`t need to have react installed.
          </div>
        </div>
        <h2 className="mt-8" id="basic-usage">
          Basic usage
        </h2>
        <p className="text-sm mt-5">
          The library consists of a collection of typescript functions, types
          and some react components. To use them just import the function you
          want from the library and use it in your app.
        </p>
        <NextPage nextHref="api" prevHref="introduction" />
      </ScrollArea>
      <aside className="w-1/6 border-l p-5 flex flex-col gap-3">
        <p className="text-myPurple font-semibold">On this page</p>
        {links.map((l) => (
          <a
            href={`https://react-daraja.vercel.app/installation#${l}`}
            className="bg-gray-100 text-sm font-semibold px-2 hover:text-myPurple ml-2 overflow-clip"
            key={l}
          >
            {l.replace("-", " ")}
          </a>
        ))}
      </aside>
    </>
  );
};

export default Page;

import { APIItemTitle } from "@/components/APIItemTitle";
import { CopyPastableSpan } from "@/components/CopyPastableSpan";
import { PageNavSmall } from "@/components/PageNavSmall";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Utils",
};

const Utils = () => {
  return (
    <div className="w-5/6 h-full p-5">
      <PageNavSmall />
      <h1 id="installation">Utilities</h1>
      <p className="mt-5">
        We understand that migrating is hard :). For this purpose the library
        offers some functions to help you easily integrate daraja-kit to your
        app while still enjoying the stability of your existing code.
      </p>
      <section>
        <APIItemTitle text="generateAccessToken" />
        <p className="mt-5">
          The lib offers a <CopyPastableSpan text="generateAccessToken" />{" "}
          function that helps give you accurate non-expired access tokens with
          all the advantages of daraja-kit built in!
        </p>
      </section>
      <section>
        <APIItemTitle text="generatePassword" />
        <p className="mt-5">
          The <CopyPastableSpan text="generatePassword" /> function can be used
          to get passwords to include in your daraja api requests
        </p>
      </section>
      <section>
        <APIItemTitle text="generateTimestamp" />
        <p className="mt-5">
          The <CopyPastableSpan text="generateTimestamp" /> function can be used
          to get accurate timestamps for using alongside your daraja api calls.
        </p>
      </section>
    </div>
  );
};

export default Utils;

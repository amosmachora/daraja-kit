import React from "react";
import { APIItemTitle } from "./APIItemTitle";
import { CopyPastableSpan } from "./CopyPastableSpan";

export const RegisterC2BUrl = () => {
  return (
    <section>
      <APIItemTitle text="RegisterURLS" />
      <p className="mt-5">
        You can use this api to register validation and confirmation URLs. You
        can read the official docs{" "}
        <a
          href="https://developer.safaricom.co.ke/APIs/CustomerToBusinessRegisterURL"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:underline"
        >
          here.
        </a>{" "}
        The gist is that the URLs you register will be used to confirm or
        validate a transaction each time it is executed.
      </p>
      <p className="mt-5">
        You can use the <CopyPastableSpan text="registerC2BUrl" /> function to
        make the request. It takes in an object as an argument of type{" "}
        <CopyPastableSpan text="RegisterUrlBody" /> and returns a{" "}
        <CopyPastableSpan text="RegisterUrlResponse" />
      </p>
    </section>
  );
};

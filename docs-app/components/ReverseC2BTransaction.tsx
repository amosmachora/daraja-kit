import React from "react";
import { APIItemTitle } from "./APIItemTitle";
import { CopyPastableSpan } from "./CopyPastableSpan";

export const ReverseC2BTransaction = () => {
  return (
    <section>
      <APIItemTitle text="ReverseC2BTransaction" />
      <p className="mt-5">
        Reverses a C2B M-Pesa transaction. Once a customer pays and there is a
        need to reverse the transaction, the organization will use this API to
        reverse the amount. You can read the official docs{" "}
        <a
          href="https://developer.safaricom.co.ke/APIs/Reversal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:underline"
        >
          here.
        </a>
      </p>
      <p className="mt-5">
        You can use the <CopyPastableSpan text="reverseC2BTransaction" />{" "}
        function to make the API call. It takes in an arguement of type
        <CopyPastableSpan text="ReverseC2BTransactionBody" /> and returns an
        awaitable promise of type{" "}
        <CopyPastableSpan text="ReverseC2BTransactionResponse" />
      </p>
    </section>
  );
};

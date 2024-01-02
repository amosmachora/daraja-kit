import React from "react";
import { APIItemTitle } from "./APIItemTitle";
import { CopyPastableSpan } from "./CopyPastableSpan";

export const TransactionStatus = () => {
  return (
    <section>
      <APIItemTitle text="Transaction Status" />
      <p className="mt-5">
        Check the status of a transaction. Read the official docs{" "}
        <a
          href="https://developer.safaricom.co.ke/APIs/TransactionStatus"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:underline"
        >
          here.
        </a>
      </p>
      <p className="mt-5">
        You can use the getTransactionStatus function to make the api call. The
        function takes a <CopyPastableSpan text="TransactionStatusBody" /> and
        returns a promise of{" "}
        <CopyPastableSpan text="TransactionStatusResponse" />.
      </p>
    </section>
  );
};

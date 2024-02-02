import React from "react";
import { APIItemTitle } from "./APIItemTitle";
import { CopyPastableSpan } from "./CopyPastableSpan";

export const AccountBalance = () => {
  return (
    <section>
      <APIItemTitle text="Account balance" />
      <p className="mt-5">
        The Account Balance API is used to request the account balance of a
        short code. This can be used for both B2C, buy goods and pay bill
        accounts. Read the official docs{" "}
        <a
          href="https://developer.safaricom.co.ke/APIs/AccountBalance"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:underline"
        >
          here.
        </a>{" "}
      </p>
      <div className="mt-5">
        You can use the <CopyPastableSpan text="getAccountBalance" /> function
        to make the call. It takes an object of type{" "}
        <CopyPastableSpan text="AccountBalanceBody" /> and returns an awaitable
        promise of type <CopyPastableSpan text="AccountBalanceResponse" />
      </div>
    </section>
  );
};

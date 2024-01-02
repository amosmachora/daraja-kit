import React from "react";
import { APIItemTitle } from "./APIItemTitle";
import { CopyPastableSpan } from "./CopyPastableSpan";

export const B2CPaymentRequest = () => {
  return (
    <section>
      <APIItemTitle text="B2CPaymentRequest" />
      <p className="mt-5">
        B2C API is an API used to make payments from a Business to Customers
        (Pay Outs), also known as Bulk Disbursements. B2C API is used in several
        scenarios by businesses that require to either make Salary Payments,
        Cashback payments, Promotional Payments(e.g. betting winning payouts),
        winnings, financial institutions withdrawal of funds, loan
        disbursements, etc. You can read the official docs{" "}
        <a
          href="https://developer.safaricom.co.ke/APIs/BusinessToCustomer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:underline"
        >
          here.
        </a>
      </p>
      <p className="mt-5">
        You can use the <CopyPastableSpan text="b2cPaymentRequest" /> function
        to make that call. It takes a <CopyPastableSpan text="B2CRequestBody" />{" "}
        and returns a Promise of type{" "}
        <CopyPastableSpan text="B2CRequestResponse" />.
      </p>
    </section>
  );
};

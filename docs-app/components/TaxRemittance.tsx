import React from "react";
import { APIItemTitle } from "./APIItemTitle";
import { CopyPastableSpan } from "./CopyPastableSpan";

export const TaxRemittance = () => {
  return (
    <section>
      <APIItemTitle text="Tax Remittance" />
      <p className="mt-5">
        This API enables businesses to remit tax to Kenya Revenue Authority
        (KRA). To use this API, prior integration is required with KRA for tax
        declaration, payment registration number (PRN) generation, and exchange
        of other tax-related information. You can read the official docs{" "}
        <a
          href="https://developer.safaricom.co.ke/APIs/TaxRemittance"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-underline"
        >
          here.
        </a>
      </p>
      <p className="mt-5">
        You can use the <CopyPastableSpan text="remitTax" /> function to make
        the api call. It takes in an arguement of type{" "}
        <CopyPastableSpan text="TaxRemittanceBody" /> and returns an awaitable
        promise of type <CopyPastableSpan text="TaxRemittanceResponse" />
      </p>
    </section>
  );
};

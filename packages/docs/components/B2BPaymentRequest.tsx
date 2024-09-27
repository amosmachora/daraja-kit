import React from "react";
import { APIItemTitle } from "./APIItemTitle";
import { CopyPastableSpan } from "./CopyPastableSpan";

export const B2BPaymentRequest = () => {
  return (
    <section>
      <APIItemTitle text="B2BPayment Request" />
      <p className="mt-5">
        This API enables you to pay bills directly from your business account to
        a pay bill number, or a paybill store. You can use this API to pay on
        behalf of a consumer/requester.
      </p>
      <p className="mt-5">
        You can use the <CopyPastableSpan text="b2bPaymentRequest" /> function
        to make that call. It takes an arguement of type{" "}
        <CopyPastableSpan text="BusinessRequestBody" /> and returns an awaitable
        promise of type <CopyPastableSpan text="BusinessRequestResponse" />.
      </p>
    </section>
  );
};

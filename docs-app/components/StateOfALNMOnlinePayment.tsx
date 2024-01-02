import React from "react";
import { APIItemTitle } from "./APIItemTitle";
import { CopyPastableSpan } from "./CopyPastableSpan";

export const StateOfALNMOnlinePayment = () => {
  return (
    <section>
      <APIItemTitle text="State Of A Lipa Na Mpesa Online Payment" />
      <p className="mt-5">
        You can use the <CopyPastableSpan text="getStateOfALNMOnlinePayment" />{" "}
        to get the state of a lipa na mpesa online payment. You can use the
        types <CopyPastableSpan text="StateOfALNMOnlinePaymentParam" /> and{" "}
        <CopyPastableSpan text="StateOfALNMOnlinePaymentResponse" /> to handle
        the response.
      </p>
      {/* <p className="mt-5">
        You can read the official docs{" "}
        <a href="http://" target="_blank" rel="noopener noreferrer">
          here.
        </a>{" "}
      </p> */}
    </section>
  );
};

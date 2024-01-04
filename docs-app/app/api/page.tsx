import { AccountBalance } from "@/components/AccountBalance";
import { B2CPaymentRequest } from "@/components/B2CPaymentRequest";
import { B2BPaymentRequest } from "@/components/B2BPaymentRequest";
import { B2BExpressCheckout } from "@/components/B2BExpressCheckout";
import { NextPage } from "@/components/NextPage";
import { PageNavSmall } from "@/components/PageNavSmall";
import { QrCode } from "@/components/QrCode";
import { RegisterC2BUrl } from "@/components/RegisterC2BUrl";
import { ReverseC2BTransaction } from "@/components/ReverseC2BTransaction";
import { STKPush } from "@/components/STKPush";
import { StateOfALNMOnlinePayment } from "@/components/StateOfALNMOnlinePayment";
import { TaxRemittance } from "@/components/TaxRemittance";
import { TransactionStatus } from "@/components/TransactionStatus";
import React from "react";

const links = [
  "STKPush",
  "QRCode",
  "State Of A Lipa Na Mpesa Online Payment",
  "RegisterURLS",
  "B2CPaymentRequest",
  "TransactionStatus",
  "Accountbalance",
  "ReverseC2BTransaction",
  "TaxRemittance",
  "B2BPaymentRequest",
  "B2BExpressCheckout",
];

const Page = () => {
  return (
    <>
      <main className="w-4/6 p-5 h-full overflow-y-scroll">
        <PageNavSmall />
        <h1>API</h1>
        <p>The documentation of all available functions and types.</p>
        <STKPush />
        <QrCode />
        <StateOfALNMOnlinePayment />
        <RegisterC2BUrl />
        <B2CPaymentRequest />
        <TransactionStatus />
        <AccountBalance />
        <ReverseC2BTransaction />
        <TaxRemittance />
        <B2BPaymentRequest />
        <B2BExpressCheckout />
        <NextPage prevHref="installation" />
      </main>
      <aside className="w-1/6 border-l p-5 flex flex-col gap-3">
        {links.map((l) => (
          <a
            href={`http://localhost:3000/api#${l}`}
            className="bg-gray-100 text-sm font-semibold px-2 hover:text-myPurple"
            key={l}
          >
            {l}
          </a>
        ))}
      </aside>
    </>
  );
};

export default Page;

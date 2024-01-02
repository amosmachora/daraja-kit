import { AccountBalance } from "@/components/AccountBalance";
import { B2CPaymentRequest } from "@/components/B2CPaymentRequest";
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

const Page = () => {
  return (
    <main className="w-5/6 p-5 h-full overflow-y-scroll">
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
      <NextPage prevHref="installation" />
    </main>
  );
};

export default Page;

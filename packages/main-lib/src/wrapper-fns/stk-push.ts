import axios from "axios";
import {
  AccountReference,
  Amount,
  CallBackURL,
  PhoneNumber,
  STKPushBody,
  STKPushResponse,
  TransactionDesc,
  TransactionType,
} from "../types/types";
import { generateTimestamp, generatePassword } from "../util/utils";
import {
  BASE_URL,
  BUSINESS_SHORT_CODE,
  ENVIRONMENT,
  MPESA_TILL_OR_PAYBILL_NO,
  PASSKEY,
} from "../env";
import { generateAccessToken } from "./access-token";

export type STKPushRequestParam = {
  phoneNumber: PhoneNumber;
  amount: Amount;
  callbackURL: CallBackURL;
  transactionDesc: TransactionDesc;
  accountReference: AccountReference;
};

export const stkPushRequest = async ({
  phoneNumber,
  amount,
  callbackURL,
  transactionDesc,
  accountReference,
}: STKPushRequestParam) => {
  try {
    const timestamp = generateTimestamp();

    const password = generatePassword();

    const stkPushBody: STKPushBody = {
      BusinessShortCode: BUSINESS_SHORT_CODE!,
      PartyB: MPESA_TILL_OR_PAYBILL_NO!,
      Timestamp: timestamp,
      Password: password,
      PartyA: phoneNumber,
      PhoneNumber: phoneNumber,
      Amount: ENVIRONMENT === "production" ? amount : "1",
      CallBackURL: callbackURL,
      TransactionDesc: transactionDesc,
      TransactionType: process.env
        .MPESA_TRANSACTION_TYPE as unknown as TransactionType,
      AccountReference: accountReference,
    };

    const accessTokenResponse = await generateAccessToken();

    const res = await axios.post<STKPushResponse>(
      `${BASE_URL}/mpesa/stkpush/v1/processrequest`,
      stkPushBody,
      {
        headers: {
          Authorization: `Bearer ${accessTokenResponse.access_token}`,
        },
      }
    );

    return res.data;
  } catch (err: any) {
    console.error(err);

    throw new Error(
      `Error occurred with status code ${err.response?.status}, ${err.response?.statusText}`
    );
  }
};

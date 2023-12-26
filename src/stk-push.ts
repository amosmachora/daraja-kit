import axios from "axios";
import { STKPushBody, STKPushResponse } from "../types";
import { generateTimestamp, generatePassword } from "../util/utils";
import {
  BASE_URL,
  BUSINESS_SHORT_CODE,
  ENVIRONMENT,
  PRODUCTION_PASS_KEY,
} from "./env";
import { generateAccessToken } from "./access-token";

export const stkPushRequest = async (
  phoneNumber: string,
  amount: string,
  callbackURL: string,
  transactionDesc: string,
  transactionType: "CustomerPayBillOnline" | "CustomerBuyGoodsOnline"
) => {
  try {
    const timestamp = generateTimestamp();
    const password =
      ENVIRONMENT === "production"
        ? generatePassword(
            BUSINESS_SHORT_CODE!,
            PRODUCTION_PASS_KEY!,
            timestamp
          )
        : "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMTYwMjE2MTY1NjI3";

    const stkPushBody: STKPushBody = {
      BusinessShortCode: BUSINESS_SHORT_CODE!,
      PartyB: BUSINESS_SHORT_CODE!,
      Timestamp: timestamp,
      Password: password,
      PartyA: phoneNumber,
      PhoneNumber: phoneNumber,
      Amount: amount,
      CallBackURL: callbackURL,
      TransactionDesc: transactionDesc,
      TransactionType: transactionType,
    };

    const accessToken = generateAccessToken();

    const res: STKPushResponse = await axios.post(
      `${BASE_URL}/mpesa/stkpush/v1/processrequest`,
      stkPushBody,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return res;
  } catch (err: any) {
    throw new Error(
      `Error occurred with status code ${err.response?.status}, ${err.response?.statusText}`
    );
  }
};

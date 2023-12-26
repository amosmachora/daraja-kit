import "../index.css";
import axios from "axios";
import {
  AccountBalanceBody,
  AccountBalanceResponse,
  B2CRequestBody,
  B2CRequestResponse,
  BusinessRequestBody,
  BusinessRequestResponse,
  RegisterUrlBody,
  RegisterUrlResponse,
  ReverseC2BTransactionBody,
  ReverseC2BTransactionResponse,
  StateOfALNMOnlinePaymentBody,
  StateOfALNMOnlinePaymentResponse,
  TaxRemittanceBody,
  TaxRemittanceResponse,
  TransactionStatusBody,
  TransactionStatusResponse,
} from "../types";
import { BASE_URL } from "./env";
import { generateAccessToken } from "./access-token";

/**
 * Use this API to check the status of a Lipa Na M-Pesa Online Payment.
 */
export const getStateOfALNMOnlinePayment = async (
  stateOfALNMOnlinePaymentBody: StateOfALNMOnlinePaymentBody
): Promise<StateOfALNMOnlinePaymentResponse> => {
  const accessToken = await generateAccessToken();

  try {
    const res: StateOfALNMOnlinePaymentResponse = await axios.post(
      `${BASE_URL}/mpesa/stkpushquery/v1/query`,
      stateOfALNMOnlinePaymentBody,
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

export const registerC2BUrl = async (
  registerUrlBody: RegisterUrlBody
): Promise<RegisterUrlResponse> => {
  const accessToken = await generateAccessToken();

  try {
    const res: RegisterUrlResponse = await axios.post(
      `${BASE_URL}/mpesa/c2b/v1/registerurl`,
      registerUrlBody,
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

export const b2cPaymentRequest = async (
  b2CBody: B2CRequestBody
): Promise<B2CRequestResponse> => {
  const accessToken = await generateAccessToken();

  try {
    const res: B2CRequestResponse = await axios.post(
      `${BASE_URL}/mpesa/b2c/v1/paymentrequest`,
      b2CBody,
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

export const b2bPaymentRequest = async (
  body: BusinessRequestBody
): Promise<BusinessRequestResponse> => {
  const accessToken = await generateAccessToken();

  try {
    const res: BusinessRequestResponse = await axios.post(
      `${BASE_URL}/mpesa/b2b/v1/paymentrequest`,
      body,
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

export const getTransactionStatus = async (
  transactionStatusBody: TransactionStatusBody
): Promise<TransactionStatusResponse> => {
  const accessToken = await generateAccessToken();

  try {
    const res: TransactionStatusResponse = await axios.post(
      `${BASE_URL}/mpesa/transactionstatus/v1/query`,
      transactionStatusBody,
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

export const getAccountBalance = async (
  accountBalance: AccountBalanceBody
): Promise<AccountBalanceResponse> => {
  const accessToken = await generateAccessToken();

  try {
    const res: AccountBalanceResponse = await axios.post(
      `${BASE_URL}/mpesa/accountbalance/v1/query`,
      accountBalance,
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

export const reverseC2BTransaction = async (
  body: ReverseC2BTransactionBody
): Promise<ReverseC2BTransactionResponse> => {
  const accessToken = await generateAccessToken();

  try {
    const res: ReverseC2BTransactionResponse = await axios.post(
      `${BASE_URL}/mpesa/reversal/v1/request`,
      body,
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

export const remitTax = async (
  body: TaxRemittanceBody
): Promise<TaxRemittanceResponse> => {
  const accessToken = await generateAccessToken();

  try {
    const res: TaxRemittanceResponse = await axios.post(
      `${BASE_URL}/mpesa/b2b/v1/remittax`,
      body,
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

export { stkPushRequest } from "./stk-push";
export { QRCodeDisplay } from "../components/QRCodeDisplay";

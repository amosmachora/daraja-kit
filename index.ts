import "./index.css";
import axios from "axios";
import {
  AccountBalanceBody,
  AccountBalanceResponse,
  B2CRequestBody,
  B2CRequestResponse,
  BusinessRequestBody,
  BusinessRequestResponse,
  InitializeAppResponse,
  InitOptions,
  RegisterUrlBody,
  RegisterUrlResponse,
  ReverseC2BTransactionBody,
  ReverseC2BTransactionResponse,
  ScannableQrCodeResponse,
  ScannableQrParams,
  StateOfALNMOnlinePaymentBody,
  StateOfALNMOnlinePaymentResponse,
  STKPushBody,
  STKPushResponse,
  TaxRemittanceBody,
  TaxRemittanceResponse,
  TransactionStatusBody,
  TransactionStatusResponse,
} from "./types";
import { useReactDaraja } from "./hooks/useReactDaraja";
import { generatePassword, generateTimestamp } from "./util/utils";

export const InitializeApp = async (
  initOptions: InitOptions
): Promise<InitializeAppResponse> => {
  const { consumerKey, consumerSecret } = initOptions;
  const credentials = `${consumerKey}:${consumerSecret}`;
  const encodedCredentials = btoa(credentials);

  const { baseURL } = useReactDaraja();

  try {
    const res = await axios.get(
      `${baseURL}/oauth/v1/generate?grant_type=client_credentials`,
      {
        headers: {
          Authorization: `Bearer ${encodedCredentials}`,
        },
      }
    );
    return res.data;
  } catch (err: any) {
    throw new Error(
      `Error occurred with status code ${err.response?.status}, ${err.response?.statusText}`
    );
  }
};

/**
 * Use this API to check the status of a Lipa Na M-Pesa Online Payment.
 */
export const StateOfALNMOnlinePayment = async (
  stateOfALNMOnlinePaymentBody: StateOfALNMOnlinePaymentBody,
  accessToken: string
): Promise<StateOfALNMOnlinePaymentResponse> => {
  const { baseURL } = useReactDaraja();
  try {
    const res: StateOfALNMOnlinePaymentResponse = await axios.post(
      `${baseURL}/mpesa/stkpushquery/v1/query`,
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

export const C2BRegisterURL = async (
  registerUrlBody: RegisterUrlBody,
  accessToken: string
): Promise<RegisterUrlResponse> => {
  const { baseURL } = useReactDaraja();

  try {
    const res: RegisterUrlResponse = await axios.post(
      `${baseURL}/mpesa/c2b/v1/registerurl`,
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

export const BusinessToCustomer = async (
  b2CBody: B2CRequestBody,
  accessToken: string
): Promise<B2CRequestResponse> => {
  const { baseURL } = useReactDaraja();

  try {
    const res: B2CRequestResponse = await axios.post(
      `${baseURL}/mpesa/b2c/v1/paymentrequest`,
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

export const GetTransactionStatus = async (
  transactionStatusBody: TransactionStatusBody,
  accessToken: string
): Promise<TransactionStatusResponse> => {
  const { baseURL } = useReactDaraja();
  try {
    const res: TransactionStatusResponse = await axios.post(
      `${baseURL}/mpesa/transactionstatus/v1/query`,
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

export const GetAccountBalance = async (
  accountBalance: AccountBalanceBody,
  accessToken: string
): Promise<AccountBalanceResponse> => {
  const { baseURL } = useReactDaraja();

  try {
    const res: AccountBalanceResponse = await axios.post(
      `${baseURL}/mpesa/accountbalance/v1/query`,
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

export const ReverseC2BTransaction = async (
  body: ReverseC2BTransactionBody,
  accessToken: string
): Promise<ReverseC2BTransactionResponse> => {
  const { baseURL } = useReactDaraja();

  try {
    const res: ReverseC2BTransactionResponse = await axios.post(
      `${baseURL}/mpesa/reversal/v1/request`,
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

export const RemitTax = async (
  body: TaxRemittanceBody,
  accessToken: string
): Promise<TaxRemittanceResponse> => {
  const { baseURL } = useReactDaraja();

  try {
    const res: TaxRemittanceResponse = await axios.post(
      `${baseURL}/mpesa/b2b/v1/remittax`,
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

export const BusinessPaybill = async (
  body: BusinessRequestBody,
  accessToken: string
): Promise<BusinessRequestResponse> => {
  const { baseURL } = useReactDaraja();

  try {
    const res: BusinessRequestResponse = await axios.post(
      `${baseURL}/mpesa/b2b/v1/paymentrequest`,
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

export const BusinessBuyGoods = async (
  body: BusinessRequestBody,
  accessToken: string
) => {
  const { baseURL } = useReactDaraja();

  try {
    const res: BusinessRequestResponse = await axios.post(
      `${baseURL}/mpesa/b2b/v1/paymentrequest`,
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

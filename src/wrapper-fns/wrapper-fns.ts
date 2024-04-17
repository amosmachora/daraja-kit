import axios, { AxiosError, AxiosResponse } from "axios";
import {
  ScannableQrParamsInternal,
  ScannableQrCodeResponse,
  StateOfALNMOnlinePaymentBody,
  StateOfALNMOnlinePaymentResponse,
  RegisterUrlBody,
  RegisterUrlResponse,
  B2CRequestBody,
  B2CRequestResponse,
  BusinessRequestBody,
  BusinessRequestResponse,
  TransactionStatusBody,
  TransactionStatusResponse,
  AccountBalanceBody,
  AccountBalanceResponse,
  ReverseC2BTransactionBody,
  ReverseC2BTransactionResponse,
  TaxRemittanceBody,
  TaxRemittanceResponse,
  B2BExpressCheckoutBody,
  B2BBuyGoodsBody,
  B2BBuyGoodsResponse,
  BillManagerOptin,
  BillManagerOptInResponse,
  BillManagerSingleInvoicingBody,
  BillManagerSingleInvoicingResponse,
} from "../types/types";
import { generateTimestamp, generatePassword } from "../util/utils";
import { generateAccessToken } from "./access-token";
import { BASE_URL, BUSINESS_SHORT_CODE, PASSKEY } from "../env";

export const fetchQrCode = async (
  scannableQrParams: ScannableQrParamsInternal
): Promise<ScannableQrCodeResponse> => {
  const { access_token } = await generateAccessToken();
  try {
    const res: AxiosResponse<ScannableQrCodeResponse> = await axios.post(
      `${BASE_URL}/mpesa/qrcode/v1/generate`,
      scannableQrParams,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
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

export type StateOfALNMOnlinePaymentParam = Omit<
  StateOfALNMOnlinePaymentBody,
  "password"
>;

export const getStateOfALNMOnlinePayment = async (
  stateOfALNMOnlinePaymentBody: StateOfALNMOnlinePaymentParam
): Promise<StateOfALNMOnlinePaymentResponse> => {
  const { access_token } = await generateAccessToken();
  const password = generatePassword();

  try {
    const res: AxiosResponse<StateOfALNMOnlinePaymentResponse> =
      await axios.post(
        `${BASE_URL}/mpesa/stkpushquery/v1/query`,
        { ...stateOfALNMOnlinePaymentBody, password },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
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

export const registerC2BUrl = async (
  registerUrlBody: RegisterUrlBody
): Promise<RegisterUrlResponse> => {
  const { access_token } = await generateAccessToken();

  try {
    const res: AxiosResponse<RegisterUrlResponse> = await axios.post(
      `${BASE_URL}/mpesa/c2b/v1/registerurl`,
      {
        ...registerUrlBody,
        ShortCode: BUSINESS_SHORT_CODE,
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
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

export const b2cPaymentRequest = async (
  b2CBody: B2CRequestBody
): Promise<B2CRequestResponse> => {
  const { access_token } = await generateAccessToken();

  try {
    const res: AxiosResponse<B2CRequestResponse> = await axios.post(
      `${BASE_URL}/mpesa/b2c/v1/paymentrequest`,
      b2CBody,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
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

export const b2bPaymentRequest = async (
  body: BusinessRequestBody
): Promise<BusinessRequestResponse> => {
  const { access_token } = await generateAccessToken();

  try {
    const res: AxiosResponse<BusinessRequestResponse> = await axios.post(
      `${BASE_URL}/mpesa/b2b/v1/paymentrequest`,
      body,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
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

export const getTransactionStatus = async (
  transactionStatusBody: TransactionStatusBody
): Promise<TransactionStatusResponse> => {
  const { access_token } = await generateAccessToken();

  try {
    const res: AxiosResponse<TransactionStatusResponse> = await axios.post(
      `${BASE_URL}/mpesa/transactionstatus/v1/query`,
      transactionStatusBody,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
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

export const getAccountBalance = async (
  accountBalance: AccountBalanceBody
): Promise<AccountBalanceResponse> => {
  const { access_token } = await generateAccessToken();

  try {
    const res: AxiosResponse<AccountBalanceResponse> = await axios.post(
      `${BASE_URL}/mpesa/accountbalance/v1/query`,
      accountBalance,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
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

export const reverseC2BTransaction = async (
  body: ReverseC2BTransactionBody
): Promise<ReverseC2BTransactionResponse> => {
  const { access_token } = await generateAccessToken();

  try {
    const res: AxiosResponse<ReverseC2BTransactionResponse> = await axios.post(
      `${BASE_URL}/mpesa/reversal/v1/request`,
      body,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
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

export const remitTax = async (
  body: TaxRemittanceBody
): Promise<TaxRemittanceResponse> => {
  const { access_token } = await generateAccessToken();

  try {
    const res: AxiosResponse<TaxRemittanceResponse> = await axios.post(
      `${BASE_URL}/mpesa/b2b/v1/remittax`,
      body,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
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

export const b2bExpressCheckout = async (data: B2BExpressCheckoutBody) => {
  const { access_token } = await generateAccessToken();

  try {
    const res = await axios.post(`${BASE_URL}/v1/ussdpush/get-msisdn`, data, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    return res.data;
  } catch (error) {
    const err = error as AxiosError;
    console.error(error);
    throw new Error(
      `Error occurred with status code ${err.response?.status}, ${err.response?.statusText}`
    );
  }
};

export const b2bBuyGoods = async (
  data: B2BBuyGoodsBody
): Promise<B2BBuyGoodsResponse> => {
  const { access_token } = await generateAccessToken();
  try {
    const res = await axios.post(
      `${BASE_URL}/mpesa/b2b/v1/paymentrequest`,
      { ...data, PartyA: BUSINESS_SHORT_CODE },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    return res.data;
  } catch (error) {
    const err = error as AxiosError;
    console.error(error);
    throw new Error(
      `Error occurred with status code ${err.response?.status}, ${err.response?.statusText}`
    );
  }
};

export const b2bPayBill = async (
  data: B2BBuyGoodsBody
): Promise<B2BBuyGoodsResponse> => {
  return await b2bBuyGoods(data);
};

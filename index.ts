import "./index.css";
import axios from "axios";
import {
  InitializeAppResponse,
  InitOptions,
  ScannableQrCodeResponse,
  ScannableQrParams,
  StateOfALNMOnlinePaymentBody,
  StateOfALNMOnlinePaymentResponse,
  STKPushBody,
  STKPushResponse,
} from "./types";

export const initializeApp = async (
  initOptions: InitOptions
): Promise<InitializeAppResponse> => {
  const { consumerKey, consumerSecret } = initOptions;
  const credentials = `${consumerKey}:${consumerSecret}`;
  const encodedCredentials = btoa(credentials);

  try {
    const res = await axios.get(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      {
        headers: {
          Authorization: `Bearer ${encodedCredentials}`,
        },
      }
    );
    return res.data;
  } catch (err) {
    throw new Error(
      `Error occurred with status code ${err.response?.status}, ${err.response?.statusText}`
    );
  }
};

export const getScannableQRCode = async (
  scannableQrParams: ScannableQrParams,
  accessToken: string
): Promise<ScannableQrCodeResponse> => {
  try {
    const res: ScannableQrCodeResponse = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/qrcode/v1/generate",
      scannableQrParams,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res;
  } catch (err) {
    throw new Error(
      `Error occurred with status code ${err.response?.status}, ${err.response?.statusText}`
    );
  }
};

export const STKPush = async (
  stkPushBody: STKPushBody,
  accessToken: string
): Promise<STKPushResponse> => {
  try {
    const res: STKPushResponse = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      stkPushBody,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return res;
  } catch (err) {
    throw new Error(
      `Error occurred with status code ${err.response?.status}, ${err.response?.statusText}`
    );
  }
};

/**
 * Use this API to check the status of a Lipa Na M-Pesa Online Payment.
 */
export const stateOfALNMOnlinePayment = async (
  stateOfALNMOnlinePaymentBody: StateOfALNMOnlinePaymentBody,
  accessToken: string
): Promise<StateOfALNMOnlinePaymentResponse> => {
  try {
    const res: StateOfALNMOnlinePaymentResponse = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpushquery/v1/query",
      stateOfALNMOnlinePaymentBody,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return res;
  } catch (err) {
    throw new Error(
      `Error occurred with status code ${err.response?.status}, ${err.response?.statusText}`
    );
  }
};

import axios from "axios";
import { InitOptions, ScannableQrParams } from "./types";

export const initializeApp = async (initOptions: InitOptions) => {
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
    return res;
  } catch (err) {
    throw new Error(
      `Error occurred with status code ${err.response?.status}, ${err.response?.statusText}`
    );
  }
};

export const getScannableQRCode = async (
  scannableQrParams: ScannableQrParams
) => {};

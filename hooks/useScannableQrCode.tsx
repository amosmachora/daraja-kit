import axios from "axios";
import { ScannableQrParams, ScannableQrCodeResponse } from "../types";
import { useReactDaraja } from "./useReactDaraja";

export const useScannableQrCode = (
  scannableQrParams: ScannableQrParams
): (() => Promise<ScannableQrCodeResponse>) => {
  const { baseURL, accessToken } = useReactDaraja();

  const fetchQrCode = async (): Promise<ScannableQrCodeResponse> => {
    try {
      const res: ScannableQrCodeResponse = await axios.post(
        `${baseURL}/mpesa/qrcode/v1/generate`,
        scannableQrParams,
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

  return fetchQrCode;
};

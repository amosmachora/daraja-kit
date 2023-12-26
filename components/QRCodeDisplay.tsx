import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { ScannableQrCodeResponse, ScannableQrParams } from "../types";
import axios from "axios";
import { BASE_URL } from "../src/env";
import { generateAccessToken } from "../src/access-token";

export const QRCodeDisplay = ({
  scannableQrParams,
}: {
  scannableQrParams: ScannableQrParams;
}) => {
  const [qrString, setQrString] = useState<string | null>(null);
  const [fetchError, setFetchError] = useState(false);

  const accessToken = generateAccessToken();

  const fetchQrCode = async (): Promise<ScannableQrCodeResponse> => {
    try {
      const res: ScannableQrCodeResponse = await axios.post(
        `${BASE_URL}/mpesa/qrcode/v1/generate`,
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

  useEffect(() => {
    fetchQrCode()
      .then((res) => setQrString(res.QRCode))
      .catch((err) => setFetchError(true));
  }, []);

  const qrImage = new Image();
  qrImage.src = `data:image/png;base64,${qrString}`;

  return (
    <div
      className={`w-[${scannableQrParams.Size}] h-[${scannableQrParams.Size}]`}
    >
      {fetchError ? (
        <p>An error occurred!</p>
      ) : qrString ? (
        <img src={qrImage.src} alt="QR Code" className="w-full h-full" />
      ) : (
        <FontAwesomeIcon
          icon={faCircleNotch}
          className="center-absolutely text-green-500"
          spin
        />
      )}
    </div>
  );
};

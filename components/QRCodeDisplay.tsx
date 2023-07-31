import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { getScannableQRCode } from "..";
import { useReactDaraja } from "../hooks/useReactDaraja";
import { ScannableQrParams } from "../types";

export const QRCodeDisplay = ({
  scannableQrParams,
}: {
  scannableQrParams: ScannableQrParams;
}) => {
  const [qrString, setQrString] = useState<string | null>(null);
  const { accessToken } = useReactDaraja();

  useEffect(() => {
    getScannableQRCode(scannableQrParams, accessToken!).then((res) =>
      setQrString(res.QRCode)
    );
  }, []);

  const qrImage = new Image();
  qrImage.src = `data:image/png;base64,${qrString}`;

  return (
    <div
      className={`w-[${scannableQrParams.Size}] h-[${scannableQrParams.Size}]`}
    >
      {qrString ? (
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

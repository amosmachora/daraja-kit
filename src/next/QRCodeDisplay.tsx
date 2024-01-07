"use server";

import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { twMerge } from "tailwind-merge";
import { fetchQrCode } from "../wrapper-fns/wrapper-fns";
import { ScannableQrParams } from "../types/types";

export const QRCodeDisplay = async ({
  className,
  scannableQRParams,
}: {
  className?: string;
  scannableQRParams: ScannableQrParams;
}) => {
  const res = await fetchQrCode(scannableQRParams);
  const { QRCode } = res;

  return (
    <div className={twMerge(`w-[100px] aspect-square`, className)}>
      {QRCode ? (
        <img
          src={`data:image/png;base64,${QRCode}`}
          alt="QR Code"
          className="w-full h-full"
        />
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

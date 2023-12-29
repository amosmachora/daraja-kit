import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { twMerge } from "tailwind-merge";

export const QRCodeDisplay = ({
  qrString,
  className,
}: {
  qrString: string;
  className?: string;
}) => {
  const qrImage = new Image();
  qrImage.src = `data:image/png;base64,${qrString}`;

  return (
    <div className={twMerge(`w-16 aspect-square`, className)}>
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

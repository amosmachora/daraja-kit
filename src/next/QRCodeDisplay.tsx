"use server";

import {BUSINESS_SHORT_CODE} from "../env";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {ScannableQrParamsInternal} from "../types";
import {faCircleNotch} from "@fortawesome/free-solid-svg-icons";
import {fetchQrCode} from "../wrapper-fns/wrapper-fns";
import {twMerge} from "tailwind-merge";

export type ScannableQrParams = Omit<ScannableQrParamsInternal, "CPI">;

export const QRCodeDisplay = async ({
    className,
    scannableQRParams,
}: {
    className?: string;
    scannableQRParams: ScannableQrParams;
}) => {
    const res = await fetchQrCode({
        ...scannableQRParams,
        CPI: BUSINESS_SHORT_CODE,
    });
    const {QRCode} = res;

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

import React from "react";
import { APIItemTitle } from "./APIItemTitle";
import { CopyPastableSpan } from "./CopyPastableSpan";
import { CodeBlockWrapper } from "./CodeBlockWrapper";
import { QRCodeDisplay, ScannableQrParams } from "daraja-kit";

export const QrCode = async () => {
  const nextJSCodeExample = `
    import React from "react";
    import { QRCodeDisplay } from "daraja-kit";
    import { ScannableQrParams } from "daraja-kit";
    import { BUSINESS_SHORT_CODE } from "daraja-kit";

    export const QRCodeExample = () => {
      
      const qrCodeParams: ScannableQrParams = {
        Amount: 100,
        MerchantName: "Daraja Kit docs",
        RefNo: "REF100",
        Size: "100",
        TrxCode: "PB",
      };

    return (
      <> 
        <div className="w-[100px] aspect-square mt-5 mx-auto">
      <QRCodeDisplay scannableQRParams={qrCodeParams} />
        </div>
      </>
      );
};`;

  const backendQRCode = `
    import { NextRequest, NextResponse } from "next/server";
    import { fetchQrCode } from "daraja-kit";
    import { BUSINESS_SHORT_CODE } from "daraja-kit";
    import { ScannableQrParams } from "daraja-kit";

    export const GET = async (req: NextRequest, res: NextResponse) => {
      const scannableQRParams: ScannableQrParams = {
        Amount: 100,
        MerchantName: "KISS KISS Adventures",
        RefNo: "Your REF NO",
        Size: "100", //square pixels,
        TrxCode: "BG", //for buy goods. others are "BG" | "WA" | "PB" | "SM" | "SB",
      };

      try {
        const { QRCode } = await fetchQrCode(scannableQRParams);

        return NextResponse.json({ data: QRCode }, { status: 200 });
      } catch (err: any) {
        console.error(err);

        return NextResponse.json(
          {
            message: "An error occurred",
          },
          {
            status: 500,
          }
        );
      }
    };

  `;

  const frontendVanillaReactCode = `
    import React, { useEffect, useState } from "react";
    import { QRCodeDisplayReact } from "daraja-kit";
    import axios from "axios";

    const VanillaReactQRCodeExample = () => {
      const [qrString, setQrString] = useState(null);

      useEffect(() => {
        axios
          .get('your backend route')
          .then((res) => setQrString(res.data.QRCode))
          .catch((err) => {
            //handle errors here
          });
      }, []);

      return (
        <>
          {qrString ? (
            <div className="w-[100px] aspect-square mt-5 mx-auto">
              <QRCodeDisplayReact qrString={qrString} />
            </div>
          ) : (
            "show loading spinner or something"
          )}
        </>
      );
    };

    export default VanillaReactQRCodeExample;

  `;

  const qrCodeParams: ScannableQrParams = {
    Amount: 100,
    MerchantName: "Daraja Kit docs",
    RefNo: "REF100",
    Size: "100",
    TrxCode: "PB",
  };

  return (
    <section>
      <APIItemTitle text="QR Code" />
      <p className="mt-5">
        The library exports three QRCode helpers. Lets start with a NextJS
        example. You can import <CopyPastableSpan text="QRCodeDisplay" /> from
        the library to display a QRcode on your website that people will scan to
        pay. Example
      </p>
      {/* <p className="mt-5">
        Here is an example of a QRcode created by the library in NextJS.{" "}
        <span className="italic text-sm">
          PS: I used the library to generate the QRCode
        </span>
      </p>
      <div className="w-[100px] aspect-square mt-5 mx-auto">
        <QRCodeDisplay scannableQRParams={qrCodeParams} />
      </div> */}
      <CodeBlockWrapper code={nextJSCodeExample} />
      <div className="mt-5">
        Now if you use vanilla react i.e create-react-app or vite maybe you can
        import <CopyPastableSpan text="QRCodeDisplayReact" /> from react but you
        have to fetch the QRString yourself from your backend. For that use case
        here is how you might fetch the string in your node backend or next api
        route.
      </div>
      <CodeBlockWrapper code={backendQRCode} />
      <p className="mt-5">
        After fetching your QRCode in your backend you can then use the{" "}
        <CopyPastableSpan text="QRCodeDisplayReact" /> from{" "}
        <CopyPastableSpan text="daraja-kit" /> to display your QRCode . Example
      </p>
      <CodeBlockWrapper code={frontendVanillaReactCode} />
      <p className="mt-5">
        You can use the <CopyPastableSpan text="className" /> prop to adjust the
        size and appearance of the QRcode. However it is best practice to use
        the same size as the size you defined when making the request to daraja
        api.
      </p>
    </section>
  );
};

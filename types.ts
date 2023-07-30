import React from "react";

export type InitOptions = {
  consumerKey: string;
  consumerSecret: string;
};

export interface InitializeAppResponse {
  access_token: string;
  expires_in: string;
}

export interface ContextData {
  initializeAppResponse: InitializeAppResponse | null;
  setInitializeAppResponse: React.Dispatch<
    React.SetStateAction<InitializeAppResponse | null>
  >;
}

/**
 * Scannable QR Parameters
 */
export interface ScannableQrParams {
  /**
   * Name of the Company/M-Pesa Merchant Name
   */
  MerchantName: string;

  /**
   * Transaction Reference
   */
  RefNo: string;

  /**
   * The total amount for the sale/transaction.
   */
  Amount: number;

  /**
   * Transaction Type. The supported types are:
   * - BG: Pay Merchant (Buy Goods).
   * - WA: Withdraw Cash at Agent Till.
   * - PB: Paybill or Business number.
   * - SM: Send Money(Mobile number)
   * - SB: Sent to Business. Business number CPI in MSISDN format.
   */
  TrxCode: "BG" | "WA" | "PB" | "SM" | "SB";

  /**
   * Credit Party Identifier. Can be a Mobile Number, Business Number, Agent Till, Paybill or Business number, or Merchant Buy Goods.
   */
  CPI: string;

  /**
   * Size of the QR code image in pixels. QR code image will always be a square image.
   */
  Size: string;
}

export interface ScannableQrCodeResponse {}

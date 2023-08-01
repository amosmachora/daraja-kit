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
  accessToken: string | null;
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

export interface ScannableQrCodeResponse {
  ResponseCode: string;
  RequestID: string;
  ResponseDescription: string;
  QRCode: string;
}

/**
 * Request Parameter Definition
 * @interface StateOfALNMOnlinePaymentBody
 */
export interface StateOfALNMOnlinePaymentBody {
  /**
   * This is the organization's shortcode (Paybill or Buygoods - a 5 to 7-digit account number)
   * used to identify an organization and receive the transaction.
   * @type {string}
   * @example "654321"
   */
  BusinessShortCode: string;

  /**
   * This is the password used for encrypting the request sent: a base64 encoded string.
   * (The base64 string is a combination of Shortcode+Passkey+Timestamp).
   * @type {string}
   * @example "base64.encode(Shortcode+Passkey+Timestamp)"
   */
  Password: string;

  /**
   * This is the Timestamp of the transaction, normally in the format of YEAR+MONTH+DATE+HOUR+MINUTE+SECOND (YYYYMMDDHHMMSS).
   * Each part should be at least two digits, apart from the year which takes four digits.
   * @type {string}
   * @example "YYYYMMDDHHmmss"
   */
  Timestamp: string;

  /**
   * This is a global unique identifier of the processed checkout transaction request.
   * @type {string}
   * @example "ws_CO_DMZ_123212312_23423"
   */
  CheckoutRequestID: string;
}

/**
 * Response Parameter Definition
 * @typedef {Object} StateOfALNMOnlinePaymentResponse
 * @property {string} ResponseCode - This is a numeric status code that indicates the status of the transaction submission. 0 means successful submission and any other code means an error occurred.
 * @property {string} ResponseDescription - Response description is an acknowledgment message from the API that gives the status of the request submission usually maps to a specific ResponseCode value. It can be a "Success" submission message or an error description.
 * @property {string} MerchantRequestID - This is a global unique Identifier for any submitted payment request.
 * @property {string} CheckoutRequestID - This is a global unique identifier of the processed checkout transaction request.
 * @property {string} ResultCode - This is a numeric status code that indicates the status of the transaction processing. 0 means successful processing and any other code means an error occurred or the transaction failed.
 * @property {string} ResultDesc - Result description is a message from the API that gives the status of the request processing, usually maps to a specific ResultCode value. It can be a success processing message or an error description message.
 */

/**
 * @type {StateOfALNMOnlinePaymentResponse}
 */
export interface StateOfALNMOnlinePaymentResponse {
  /**
   * This is a numeric status code that indicates the status of the transaction submission.
   * 0 means successful submission and any other code means an error occurred.
   * @type {string}
   * @example "0"
   */
  ResponseCode: string;

  /**
   * Response description is an acknowledgment message from the API that gives the status of the request submission usually maps to a specific ResponseCode value.
   * It can be a "Success" submission message or an error description.
   * @type {string}
   * @example "The service request has failed."
   */
  ResponseDescription: string;

  /**
   * This is a global unique Identifier for any submitted payment request.
   * @type {string}
   * @example "16813-1590513-1"
   */
  MerchantRequestID: string;

  /**
   * This is a global unique identifier of the processed checkout transaction request.
   * @type {string}
   * @example "ws_CO_DMZ_123212312_2342347678234"
   */
  CheckoutRequestID: string;

  /**
   * This is a numeric status code that indicates the status of the transaction processing.
   * 0 means successful processing and any other code means an error occurred or the transaction failed.
   * @type {string}
   * @example "0"
   */
  ResultCode: string;

  /**
   * Result description is a message from the API that gives the status of the request processing, usually maps to a specific ResultCode value.
   * It can be a success processing message or an error description message.
   * @type {string}
   * @example "0: The service request is processed successfully."
   */
  ResultDesc: string;
}

/**
 * Request Parameter Description
 * @interface STKPushBody
 */
export interface STKPushBody {
  /**
   * This is the organization's shortcode (Paybill or Buygoods - A 5 to 6-digit account number)
   * used to identify an organization and receive the transaction.
   * @type {string}
   * @example "654321"
   */
  BusinessShortCode: string;

  /**
   * This is the password used for encrypting the request sent: A base64 encoded string.
   * (The base64 string is a combination of Shortcode+Passkey+Timestamp)
   * @type {string}
   * @example "base64.encode(Shortcode+Passkey+Timestamp)"
   */
  Password: string;

  /**
   * This is the Timestamp of the transaction, normally in the format of YEAR+MONTH+DATE+HOUR+MINUTE+SECOND (YYYYMMDDHHMMSS)
   * Each part should be at least two digits apart from the year which takes four digits.
   * @type {string}
   * @example "YYYYMMDDHHmmss"
   */
  Timestamp: string;

  /**
   * This is the transaction type that is used to identify the transaction when sending the request to M-PESA.
   * The transaction type for M-PESA Express is "CustomerPayBillOnline" for PayBill Numbers and "CustomerBuyGoodsOnline" for Till Numbers.
   * @type {"CustomerPayBillOnline" | "CustomerBuyGoodsOnline"}
   * @example "CustomerPayBillOnline"
   */
  TransactionType: "CustomerPayBillOnline" | "CustomerBuyGoodsOnline";

  /**
   * This is the Amount transacted normally a numeric value. Money that the customer pays to the Shortcode.
   * Only whole numbers are supported.
   * @type {string}
   * @example "10"
   */
  Amount: string;

  /**
   * The phone number sending money. The parameter expected is a Valid Safaricom Mobile Number that is M-PESA registered
   * in the format 2547XXXXXXXX
   * @type {string}
   * @example "2547XXXXXXXX"
   */
  PartyA: string;

  /**
   * The organization that receives the funds. The parameter expected is a 5 to 6-digit as defined in the Shortcode description above.
   * This can be the same as the BusinessShortCode value above.
   * @type {string}
   * @example "654321"
   */
  PartyB: string;

  /**
   * The Mobile Number to receive the STK Pin Prompt. This number can be the same as PartyA value above.
   * @type {string}
   * @example "2547XXXXXXXX"
   */
  PhoneNumber: string;

  /**
   * A CallBack URL is a valid secure URL that is used to receive notifications from M-Pesa API.
   * It is the endpoint to which the results will be sent by M-Pesa API.
   * @type {string}
   * @example "https://mydomain.com/path"
   */
  CallBackURL: string;

  /**
   * Account Reference: This is an Alpha-Numeric parameter that is defined by your system as an Identifier
   * of the transaction for the CustomerPayBillOnline transaction type.
   * Along with the business name, this value is also displayed to the customer in the STK Pin Prompt message.
   * Maximum of 12 characters.
   * @type {string}
   * @example "ABC123456789"
   */
  AccountReference: string;

  /**
   * This is any additional information/comment that can be sent along with the request from your system.
   * Maximum of 13 Characters.
   * @type {string}
   * @example "Payment for Order"
   */
  TransactionDesc: string;
}

/**
 * Response Parameter Description
 * @interface STKPushResponse
 */
export interface STKPushResponse {
  /**
   * This is a global unique Identifier for any submitted payment request.
   * @type {string}
   * @example "16813-1590513-1"
   */
  MerchantRequestID: string;

  /**
   * This is a global unique identifier of the processed checkout transaction request.
   * @type {string}
   * @example "ws_CO_DMZ_12321_23423476"
   */
  CheckoutRequestID: string;

  /**
   * Response description is an acknowledgment message from the API that gives the status of the request submission.
   * It usually maps to a specific ResponseCode value. It can be a Success submission message or an error description.
   * @type {string}
   * @example "-The service request has failed"
   * @example "-The service request has been accepted successfully."
   * @example "- Invalid Access Token"
   */
  ResponseDescription: string;

  /**
   * This is a Numeric status code that indicates the status of the transaction submission.
   * 0 means successful submission and any other code means an error occurred.
   * @type {string}
   * @example "0"
   * @example "404.001.03"
   */
  ResponseCode: string;

  /**
   * This is a message that your system can display to the customer as an acknowledgment of the payment request submission.
   * @type {string}
   * @example "Success. Request accepted for processing."
   */
  CustomerMessage: string;
}

/**
 * Results Parameter Description
 * @interface STKPushSuccessfulCallbackBody
 */
export interface STKPushSuccessfulCallbackBody {
  /**
   * This is the root key for the entire Callback message.
   * @type {Object}
   * @property {Object} stkCallback - This is the first child of the Body.
   */
  Body: {
    stkCallback: {
      /**
       * This is a global unique Identifier for any submitted payment request.
       * This is the same value returned in the acknowledgment message of the initial request.
       * @type {string}
       * @example "29115-34620561-1"
       */
      MerchantRequestID: string;

      /**
       * This is a globally unique identifier of the processed checkout transaction request.
       * This is the same value returned in the acknowledgment message of the initial request.
       * @type {string}
       * @example "ws_CO_191220191020363925"
       */
      CheckoutRequestID: string;

      /**
       * This is a numeric status code that indicates the status of the transaction processing.
       * 0 means successful processing and any other code means an error occurred or the transaction failed.
       * @type {number}
       * @example 0
       * @example 1032
       */
      ResultCode: number;

      /**
       * The result description is a message from the API that gives the status of the request processing.
       * It usually maps to a specific ResultCode value. It can be a Success processing message or an error description message.
       * @type {string}
       * @example "0: The service request is processed successfully."
       * @example "1032: Request canceled by the user"
       */
      ResultDesc: string;

      /**
       * This is the JSON object that holds more details for the transaction.
       * It is only returned for successful transactions.
       * @type {Object}
       * @property {Object[]} Item - This is a JSON Array, within the CallbackMetadata, that holds additional transaction details in JSON objects.
       */
      CallbackMetadata: {
        Item: {
          /**
           * This is the Amount that was transacted.
           * @type {number}
           * @example 10500.5
           */
          Amount?: number;

          /**
           * This is the unique M-PESA transaction ID for the payment request.
           * The same value is sent to the customer by SMS upon successful processing.
           * @type {string}
           * @example "LHG31AA5TX"
           */
          MpesaReceiptNumber?: string;

          /**
           * This is the Balance of the account for the shortcode used as partyB.
           * @type {number}
           * @example 32009.9
           */
          Balance?: number;

          /**
           * This is a timestamp that represents the date and time that the transaction was completed in the format YYYYMMDDHHmmss.
           * @type {string}
           * @example "20170827163400"
           */
          TransactionDate?: string;

          /**
           * This is the number of the customer who made the payment.
           * @type {string}
           * @example "0722000000"
           */
          PhoneNumber?: string;
        }[];
      };
    };
  };
}

/**
 * Unsuccessful results body structure.
 * Whenever you receive an error in your callback URL, the unsuccessful transaction will have a body results as below,
 * and the error details will be captured under the Items ResultCode and ResultDesc.
 * You can view a list of possible Lipa na M-PESA online errors on the errors tab.
 * @interface STKPushErrorCallbackBody
 */
export interface STKPushErrorCallbackBody {
  /**
   * This is the root key for the entire Callback message.
   * @type {Object}
   * @property {Object} stkCallback - This is the first child of the Body.
   */
  Body: {
    stkCallback: {
      /**
       * This is a global unique Identifier for any submitted payment request.
       * @type {string}
       * @example "29115-34620561-1"
       */
      MerchantRequestID: string;

      /**
       * This is a globally unique identifier of the processed checkout transaction request.
       * @type {string}
       * @example "ws_CO_191220191020363925"
       */
      CheckoutRequestID: string;

      /**
       * This is a numeric status code that indicates the status of the transaction processing.
       * 0 means successful processing and any other code means an error occurred or the transaction failed.
       * @type {number}
       * @example 1032
       */
      ResultCode: number;

      /**
       * The result description is a message from the API that gives the status of the request processing.
       * It usually maps to a specific ResultCode value. It can be an error description message.
       * @type {string}
       * @example "Request canceled by user."
       */
      ResultDesc: string;
    };
  };
}

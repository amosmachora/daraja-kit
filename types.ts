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

/**
 * Request Parameter Definition
 * @interface RegisterUrlBody
 */
export interface RegisterUrlBody {
  /**
   * This is the URL that receives the validation request from the API upon payment submission.
   * The validation URL is only called if the external validation on the registered shortcode is enabled.
   * (By default External Validation is disabled).
   * @type {string}
   * @example "https://mydomain.com/validation"
   */
  ValidationURL?: string;

  /**
   * This is the URL that receives the confirmation request from API upon payment completion.
   * @type {string}
   * @example "https://mydomain.com/confirmation"
   */
  ConfirmationURL?: string;

  /**
   * This parameter specifies what is to happen if for any reason the validation URL is not reachable.
   * Note that, this is the default action value that determines what M-PESA will do in the scenario that your endpoint is unreachable or is unable to respond on time.
   * Only two values are allowed: Completed or Cancelled.
   * Completed means M-PESA will automatically complete your transaction, whereas Cancelled means M-PESA will automatically cancel the transaction,
   * in the event M-PESA is unable to reach your Validation URL.
   * @type {"Cancelled" | "Completed"}
   * @example "Cancelled"
   * @example "Completed"
   */
  ResponseType: "Cancelled" | "Completed";

  /**
   * Usually, a unique number is tagged to an M-PESA pay bill/till number of the organization.
   * @type {string}
   * @example "123456"
   */
  ShortCode: string;
}

/**
 * Response Parameters Definition
 * @interface RegisterUrlResponse
 */
export interface RegisterUrlResponse {
  /**
   * This is a global unique identifier for the transaction request returned by the API proxy upon successful request submission.
   * @type {string}
   * @example "abc123"
   */
  OriginatorCoversationID: string;

  /**
   * It indicates whether Mobile Money accepts the request or not.
   * @type {string}
   * @example "0"
   */
  ResponseCode: string;

  /**
   * This is the status of the request.
   * @type {string}
   * @example "success"
   */
  ResponseDescription: string;
}

/**
 * Results Parameter Definition
 * @interface ValidationRequest
 */
export interface ValidationOrConfirmationRequest {
  /**
   * The transaction type specified during the payment request.
   * @type {string}
   * @example "Buy Goods or Pay Bill"
   */
  TransactionType: string;

  /**
   * This is the unique M-Pesa transaction ID for every payment request.
   * This is sent to both the call-back messages and a confirmation SMS sent to the customer.
   * @type {string}
   * @example "LHG31AA5TX"
   */
  TransID: string;

  /**
   * This is the Timestamp of the transaction, normally in the format of YEAR+MONTH+DATE+HOUR+MINUTE+SECOND (YYYYMMDDHHMMSS).
   * Each part should be at least two digits apart from the year which takes four digits.
   * @type {string}
   * @example "20170813154301"
   */
  TransTime: string;

  /**
   * This is the amount transacted (normally a numeric value), money that the customer pays to the Shortcode.
   * Only whole numbers are supported.
   * @type {string}
   * @example "100"
   */
  TransAmount: string;

  /**
   * This is the organization's shortcode (Paybill or Buygoods - a 5 to 6-digit account number)
   * used to identify an organization and receive the transaction.
   * @type {string}
   * @example "654321"
   */
  BusinessShortCode: string;

  /**
   * This is the account number for which the customer is making the payment.
   * This is only applicable to Customer PayBill Transactions.
   * @type {string}
   * @example "ABC123456"
   */
  BillRefNumber: string;

  /**
   * The current utility account balance of the payment-receiving organization shortcode.
   * For validation requests, this field is usually blank whereas, for the confirmation message,
   * the value represents the new balance after the payment has been received.
   * @type {string}
   * @example "30671"
   */
  OrgAccountBalance: string;

  /**
   * This is a transaction ID that the partner can use to identify the transaction.
   * When a validation request is sent, the partner can respond with ThirdPartyTransID,
   * and this will be sent back with the Confirmation notification.
   * @type {string}
   * @example "1234567890"
   */
  ThirdPartyTransID: string;

  /**
   * This is a masked mobile number of the customer making the payment.
   * @type {string}
   * @example "25470****149"
   */
  MSISDN: string;

  /**
   * The customer's first name is as per the M-Pesa register. This parameter can be empty.
   * @type {string}
   * @example "John"
   */
  FirstName: string;

  /**
   * The customer's middle name is as per the M-Pesa register. This parameter can be empty.
   * @type {string}
   * @example "Doe"
   */
  MiddleName: string;

  /**
   * The customer's last name is as per the M-Pesa register. This parameter can be empty.
   * @type {string}
   * @example "Smith"
   */
  LastName: string;
}

/**
 * Validation Response - Expected from your validation URL.
 * @interface ValidationResponse
 */
export interface ValidationResponse {
  /**
   * A code indicating whether to complete the transaction.
   * 0(Zero) always means complete. Other values mean canceling the transaction,
   * which also determines the customer notification SMS type.
   * @type {string}
   * @example "0"
   */
  ResultCode: string;

  /**
   * Short validation result description.
   * @type {string}
   * @example "Validation successful."
   */
  ResultDesc: string;

  /**
   * An optional value that can be used to identify the payment during a confirmation callback.
   * If a value is set, it would be passed back in a confirmation callback.
   * @type {string}
   * @example "1234567890"
   */
  ThirdPartyTransID?: string;
}

/**
 * Confirmation acknowledgment - Expected from your Confirmation URL.
 * @interface ConfirmationResponse
 */
export interface ConfirmationResponse {
  /**
   * A code indicating the receipt status of the confirmation callback. Always 0(zero).
   * @type {string}
   * @example "0"
   */
  ResultCode: "0";

  /**
   * A short confirmation receipt description. Usually "Success".
   * @type {string}
   * @example "Success"
   */
  ResultDesc: string | "Success";
}

/**
 * Validation or Confirmation Error Response.
 * @interface ValidationOrConfirmationErrorResponse
 */
export interface ValidationOrConfirmationErrorResponse {
  /**
   * The error code indicating the reason for the rejection.
   *
   */
  ResultCode:
    | "C2B00011"
    | "C2B00012"
    | "C2B00013"
    | "C2B00014"
    | "C2B00015"
    | "C2B00016";

  /**
   * The description of the error result. Always "Rejected" for error responses.
   * @type {string}
   * @example "Rejected"
   */
  ResultDesc: string | "Rejected";
}

/**
 * Represents the request body for M-Pesa B2C (Business to Customer) transactions.
 * @interface B2CRequestBody
 */
export interface B2CRequestBody {
  /*
  The username of the M-Pesa B2C account API operator.
  NOTE: The access channel for this operator must be API, and the account must be in active status.
  @type {string}
  @example "initiator_1"
  @example "John_Doe"
  */
  InitiatorName: string;
  /**
  
  This is the value obtained after encrypting the API initiator password.
  The process for encrypting the initiator password has been described under docs,
  and an online encryption process is available under get test credential.
  @type {string}
  @example "32SzVdmCvjpmQfw3X2RK8UAv7xuhh304dXxFC5+3lslkk2TDJY/Lh6ESVwtqMxJzF7qA=="
  */
  SecurityCredential: string;
  /**
  
  This is a unique command that specifies the B2C transaction type.
  "SalaryPayment": Supports sending money to both registered and unregistered M-Pesa customers.
  "BusinessPayment": A normal business to customer payment, supports only M-Pesa registered customers.
  "PromotionPayment": A promotional payment to customers. The M-Pesa notification message is a congratulatory message. Supports only M-Pesa registered customers.
  @type {string}
  @example "SalaryPayment"
  */
  CommandID: string;
  /**
  
  The amount of money being sent to the customer.
  @type {number}
  @example 30671
  */
  Amount: number;
  /**
  
  This is the B2C organization shortcode from which the money is to be sent.
  @type {number}
  @example 123454
  */
  PartyA: number;
  /**
  
  This is the customer mobile number to receive the amount.
  The number should have the country code (254) without the plus sign.
  @type {number}
  @example 254722000000
  */
  PartyB: number;
  /**
  
  Any additional information to be associated with the transaction.
  @type {string}
  @example "Payment for services"
  */
  Remarks: string;
  /**
  
  This is the URL to be specified in your request that will be used by the API Proxy
  to send a notification in case the payment request is timed out while awaiting processing in the queue.
  @type {string}
  @example "https://example.com/queue-timeout"
  */
  QueueTimeOutURL: string;
  /**
  
  This is the URL to be specified in your request that will be used by M-Pesa to send a notification
  upon processing of the payment request.
  @type {string}
  @example "https://example.com/payment-result"
  */
  ResultURL: string;
  /**
  
  Any additional information to be associated with the transaction.
  @type {string}
  @example "Monthly salary payment"
  */
  Occasion: string;
}

/**
 * @interface B2CRequestResponse
 */
export interface B2CRequestResponse {
  /*
  This is a global unique identifier for the transaction request returned by the API proxy upon successful request submission.
  @type {string}
  @example "29115-34620561-1"
  */
  OriginatorConversationID: string;
  /**
  
  This is a global unique identifier for the transaction request returned by M-Pesa upon successful request submission.
  @type {string}
  @example "ws_CO_191220191020363925"
  */
  ConversationID: string;
  /**
  
  This is the status of the request.
  @type {string}
  @example "Success"
  */
  ResponseDescription: string;
}

/**
 * Represents the response body for M-Pesa B2C (Business to Customer) transaction request errors.
 * @interface B2CRequestError
 */
export interface B2CRequestError {
  /*
  This is a unique requestID for the payment request.
  @type {string}
  @example "29115-34620561-1"
  */
  requestId: string;
  /**
  
  This is a predefined code that indicates the reason for request failure. The error codes are defined in the Response Error Details.
  @type {string}
  @example "404.001.04"
  */
  errorCode: string;
  /**
  
  This is a short descriptive message of the failure reason.
  @type {string}
  @example "Invalid Access Token"
  */
  errorMessage: string;
}

/**
 * Represents the response result of the B2C transaction.
 */
export interface B2CRequestResult {
  Result: {
    /**
     * This is a global unique identifier for the transaction request returned by the M-Pesa upon successful request submission.
     */
    ConversationId: string;
    /**
     * This is a global unique identifier for the transaction request returned by the API proxy upon successful request submission.
     */
    OriginatorConversationId: string;
    /**
     * This is a message from the API that gives the status of the request processing and usually maps to a specific result code value.
     */
    ResultDesc: string;
    /**
     * This is a status code that indicates whether the transaction was already sent to your listener. Usual value is 0.
     */
    ResultType: number;
    /**
     * This is a numeric status code that indicates the status of the transaction processing. 0 means success and any other code means an error occurred or the transaction failed.
     */
    ResultCode: number;
    /**
     * This is a unique M-PESA transaction ID for every payment request. Same value is sent to customer over SMS upon successful processing.
     */
    TransactionID: string;
    /**
     * This is a JSON object that holds more details for the transaction.
     */
    ResultParameters: {
      /**
       * This is a JSON array within the ResultParameters that holds additional transaction details as JSON objects.
       */
      ResultParameter: B2CResultParameter[];
    };
  };
  /**
   * This is a unique M-PESA transaction ID for every payment request. Same value is sent to customer over SMS upon successful processing. It is usually returned under the ResultParameter array.
   */
  TransactionReceipt: string;
  /**
   * This is the amount that was transacted. It is usually returned under the ResultParameter array.
   */
  TransactionAmount: number;
  /**
   * This is the available balance of the Working account under the B2C shortcode used in the transaction.
   */
  B2CWorkingAccountAvailableFunds: number;
  /**
   * This is the available balance of the Utility account under the B2C shortcode used in the transaction.
   */
  B2CUtilityAccountAvailableFunds: number;
  /**
   * This is the date and time that the transaction completed M-PESA.
   */
  TransactionCompletedDateTime: string;
  /**
   * This is the name and phone number of the customer who received the payment.
   */
  ReceiverPartyPublicName: string;
  /**
   * This is the available balance of the Charges Paid account under the B2C shortcode used in the transaction.
   */
  B2CChargesPaidAccountAvailableFunds: number;
  /**
   * This is a key that indicates whether the customer is a M-PESA registered customer or not.
   * "Y" for Yes, "N" for No.
   */
  B2CRecipientIsRegisteredCustomer: "Y" | "N";
}

/**
 * Interface representing the JSON objects within the ResultParameter array of the B2C request result.
 */
export interface B2CResultParameter {
  /**
   * Unique M-PESA transaction ID for every payment request. Same value is sent to customer over SMS upon successful processing.
   */
  TransactionReceipt: string;
  /**
   * Amount that was transacted.
   */
  TransactionAmount: number;
  /**
   * Available balance of the Working account under the B2C shortcode used in the transaction.
   */
  B2CWorkingAccountAvailableFunds: number;
  /**
   * Available balance of the Utility account under the B2C shortcode used in the transaction.
   */
  B2CUtilityAccountAvailableFunds: number;
  /**
   * Date and time that the transaction completed M-PESA.
   */
  TransactionCompletedDateTime: string;
  /**
   * Name and phone number of the customer who received the payment.
   */
  ReceiverPartyPublicName: string;
  /**
   * Available balance of the Charges Paid account under the B2C shortcode used in the transaction.
   */
  B2CChargesPaidAccountAvailableFunds: number;
  /**
   * Key that indicates whether the customer is a M-PESA registered customer or not ("Y" for Yes, "N" for No).
   */
  B2CRecipientIsRegisteredCustomer: "Y" | "N";
}

/**
 * Interface representing the request parameters for querying transaction status.
 */
export interface TransactionStatusBody {
  /**
   * The name of the initiator initiating the request.
   */
  Initiator: string;
  /**
   * Encrypted credential of the user getting transaction status.
   */
  SecurityCredential: string;
  /**
   * Takes only the 'TransactionStatusQuery' Command ID.
   */
  "Command ID": "TransactionStatusQuery";
  /**
   * Unique identifier to identify a transaction on Mpesa.
   */
  "Transaction ID": string;
  /**
   * This is a global unique identifier for the transaction request returned by the API proxy upon successful request submission. If you don’t have the M-PESA transaction ID you can use this to query.
   */
  OriginatorConversationID: string;
  /**
   * Organization/MSISDN receiving the transaction.
   */
  PartyA: string;
  /**
   * Type of organization receiving the transaction.
   * 4 – Organization shortcode
   */
  IdentifierType: string;
  /**
   * The path that stores information of a transaction.
   */
  ResultURL: string;
  /**
   * The path that stores information of timeout transaction.
   */
  QueueTimeOutURL: string;
  /**
   * Comments that are sent along with the transaction.
   */
  Remarks: string;
  /**
   * Optional parameter.
   */
  Occasion: string;
}

/**
 * Interface representing the response parameters for the transaction status query.
 */
export interface TransactionStatusResponse {
  /**
   * The unique request ID for tracking a transaction.
   * Alpha-Numeric String of less than 20 characters e.g: 1236-7134259-1
   */
  OriginatorConversationID: string;
  /**
   * The unique request ID returned by M-PESA for each request made.
   * Alpha Numeric String of less than 20 characters e.g: AG_20210709_1234409f86436c583e3f
   */
  ConversationID: string;
  /**
   * The numeric status code indicating the status of the transaction processing.
   * 0 means success and any other code means an error occurred or the transaction failed.
   * Sample values: 0, 1, 2001, 21
   */
  ResponseCode: string;
  /**
   * Response description message.
   * Sample value: "Accept the service request successfully"
   */
  ResponseDescription: string;
}

/**
 * Interface representing the result of the transaction status query.
 */
 export interface TransactionStatusResult {
  /**
   * The unique identifier generated by M-PESA for a request.
   * Sample value: "AG_20180223_0000493344ae97d86f75"
   */
  ConversationID: string;
  /**
   * The unique identifier of the request message.
   * This is auto-generated by M-PESA for third-party/Organizations.
   * Its value comes from the response message and can be used to check the status of the transaction.
   * Sample value: "3213-416199-2"
   */
  OriginatorConversationID: string;
  /**
   * Reference data that M-PESA needs not analyze but needs to record into the transaction log.
   */
  ReferenceData?: {
    /**
     * Reference data item that carries some reference data that M-PESA needs not analyze but needs to record in the transaction log.
     */
    ReferenceItem?: {
      /**
       * The parameter name indicating the reference data key.
       * Sample value: "Occasion"
       */
      Key: string;
    };
  };
  /**
   * Indicates whether M-PESA processes the request successfully or not.
   * Sample value: "0"
   */
  ResultCode: string;
  /**
   * A description of the parameter ResultCode.
   * Sample value: "The service request is processed successfully."
   */
  ResultDesc: string;
  /**
   * Specific parameters for reversals API.
   */
  ResultParameters?: {
    /**
     * Array of result parameters.
     */
    ResultParameter: {
      /**
       * The parameter name.
       * Sample value: "DebitPartyName"
       */
      Key: string;
      /**
       * The parameter value.
       * Sample value: "600310 - Safaricom333"
       */
      Value: string;
    }[];
  };
  /**
   * Indicates the status of the transaction.
   * 0: completed, 1: waiting for further messages.
   * Sample value: 0
   */
  ResultType: number;
  /**
   * Unique identifier for the transaction (only for transactions).
   * When the request is a transaction request, M-PESA will generate a unique identifier for the transaction.
   * Sample value: "MBN0000000"
   */
  TransactionID?: string;
}


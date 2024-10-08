export interface ContextData {
  accessToken: string | null;
  mode: "development" | "production";
  businessShortCode: BusinessShortCode | null;
  baseURL: string;
  productionPassKey: string | null;
}

export type InitOptions = {
  consumerKey: string;
  consumerSecret: string;
};

export interface AccessTokenResponse {
  access_token: string;
  expires_in: string;
}

/**
 * Type alias for the organization's shortcode (Paybill or Buygoods - A 5 to 6-digit account number)
 * used to identify an organization and receive the transaction.
 * @typedef {string} BusinessShortCode
 * @example "654321"
 */
export type BusinessShortCode = string;

/**
 * Scannable QR Parameters
 */
export interface ScannableQrParamsInternal {
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
 * This is the transaction type that is used to identify the transaction when sending the request to M-PESA.
 * The transaction type for M-PESA Express is "CustomerPayBillOnline" for PayBill Numbers and "CustomerBuyGoodsOnline" for Till Numbers.
 * @type {"CustomerPayBillOnline" | "CustomerBuyGoodsOnline"}
 * @example "CustomerPayBillOnline"
 */
export type TransactionType =
  | "CustomerPayBillOnline"
  | "CustomerBuyGoodsOnline";

/**
 * The Mobile Number to receive the STK Pin Prompt. This number can be the same as PartyA value above.
 * @type {string}
 * @example "2547XXXXXXXX"
 */
export type PhoneNumber = string;

/**
 * This is the Amount transacted normally a numeric value. Money that the customer pays to the Shortcode.
 * Only whole numbers are supported.
 * @type {string}
 * @example "10"
 */
export type Amount = string;

/**
 * A CallBack URL is a valid secure URL that is used to receive notifications from M-Pesa API.
 * It is the endpoint to which the results will be sent by M-Pesa API.
 * @type {string}
 * @example "https://mydomain.com/path"
 */
export type CallBackURL = string;

/**
 * This is any additional information/comment that can be sent along with the request from your system.
 * Maximum of 13 Characters.
 * @type {string}
 * @example "Payment for Order"
 */
export type TransactionDesc = string;

/**
 * Account Reference: This is an Alpha-Numeric parameter that is defined by your system as an Identifier
 * of the transaction for the CustomerPayBillOnline transaction type.
 * Along with the business name, this value is also displayed to the customer in the STK Pin Prompt message.
 * Maximum of 12 characters.
 * @type {string}
 * @example "ABC123456789"
 */
export type AccountReference = string;

/**
 * Request Parameter Description
 * @interface STKPushBody
 */
export interface STKPushBody {
  BusinessShortCode: BusinessShortCode;

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

  TransactionType: TransactionType;

  Amount: Amount;

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

  PhoneNumber: PhoneNumber;

  CallBackURL: CallBackURL;

  AccountReference: AccountReference;

  TransactionDesc: TransactionDesc;
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
 * This is the Amount transacted normally a numeric value. Money that the customer pays to the Shortcode.
 * Only whole numbers are supported.
 * @type {string}
 * @example "10"
 */
type AmountItem = "Amount";

/**
 * This is the unique M-PESA transaction ID for the payment request.
 * The same value is sent to the customer by SMS upon successful processing.
 * @type {string}
 * @example "LHG31AA5TX"
 */
type MpesaReceiptNumber = "MpesaReceiptNumber";

/**
 * This is the Balance of the account for the shortcode used as partyB.
 * @type {number}
 * @example 32009.9
 */
type Balance = number;

/**
 * This is a timestamp that represents the date and time that the transaction was completed in the format YYYYMMDDHHmmss.
 * @type {string}
 * @example "20170827163400"
 */
type TransactionDate = "TransactionDate";

/**
 * This is the number of the customer who made the payment.
 * @type {string}
 * @example "0722000000"
 */
type PhoneNumberItem = "PhoneNumber";

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
          Name: AmountItem | MpesaReceiptNumber | TransactionDate | PhoneNumber;
          Value: string | number;
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
}
// /**
//  * Usually, a unique number is tagged to an M-PESA pay bill/till number of the organization.
//  * @type {string}
//  * @example "123456"
//  */
// ShortCode: string;

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

/**
 * Interface representing the request body parameters for querying account balance.
 */
export interface AccountBalanceBody {
  /**
   * The credential/username used to authenticate the transaction request.
   * Sample value: "Testapi772"
   */
  Initiator: string;
  /**
   * Base64 encoded string of the M-PESA short code and password, encrypted using M-PESA public key.
   * It validates the transaction on the M-PESA Core system and must match the inputted value of the parameter IdentifierType.
   * Sample value: "EToK4lNRxdIhQjhPXi/FGxt061viOjh4hfAAwb17gaeP1JfKu4T/ui/6qB9IW9IfN/Y6S1O8U/c2s/ZqKxe+6WrFMFeYMC803hVgULln/8taf+8NE5JAib5B6qULSo7KcM2Uu5teiGTZOBL/Dy39DDeprNrtxcaYPmLcOfRDmU4hiMwZ6GLy95uVsOvGJGcK1OwTkPLIo5VKAnKaFe2C0DXXAdZRua0l4pCto17JM6OKihM2KIcPXQ8H4nr0fammyy502DvCQ=="
   */
  SecurityCredential: string;
  /**
   * A unique command passed to the M-PESA system to query the account balance.
   * Max length is 64.
   * Sample value: "AccountBalance"
   */
  "Command ID": string;
  /**
   * The shortcode of the organization querying for the account balance.
   * Numeric value.
   * Sample value: "600772"
   */
  PartyA: string;
  /**
   * Type of organization querying for the account balance.
   * Numeric value (Till Number Organization shortcode).
   * Sample value: 4
   */
  IdentifierType: string;
  /**
   * Comments that are sent along with the transaction.
   * String sequence of characters up to 100.
   * Sample value: "tests"
   */
  Remarks: string;
  /**
   * The end-point that receives a timeout message.
   * Sample value: "https://ip:port/path" or "domain:port/path"
   */
  QueueTimeOutURL: string;
  /**
   * The destination URL to which Daraja should send the result message.
   * Sample value: "https://ip:port/path" or "domain:port/path"
   */
  ResultURL: string;
}

/**
 * Interface representing the response parameters for the account balance query.
 */
export interface AccountBalanceResponse {
  /**
   * The unique identifier of the request message.
   * This is auto-generated by M-PESA for a third party/Organization.
   * It can be used to check the status of the transaction.
   * Must be unique for every transaction.
   * Max length is 128.
   * Sample value: "515-5258779-3"
   */
  OriginatorConversationID: string;
  /**
   * The unique identifier generated by M-Pesa for a previous request message.
   * It is used to support communication multiple times between the third party and M-Pesa for one operation/transaction.
   * Sample value: "AG_20200123_0000417fed8ed666e976"
   */
  ConversationID: string;
  /**
   * It indicates whether Mobile Money accepts the request or not.
   * Sample value: "0"
   */
  ResponseCode: string;
  /**
   * A description of the parameter Response Code.
   * Sample value: "Accept the service request successfully"
   */
  ResponseDescription: string;
}

/**
 * Interface representing the response parameters for the account balance query result.
 */
export interface AccountBalanceResult {
  /**
   * It indicates whether Mobile Money accepts the request or not.
   * 0: completed, 1: waiting for further messages.
   * Sample value: 0
   */
  ResultType: number;
  /**
   * It indicates whether Mobile Money processes the request successfully or not.
   * Max length is 10.
   * Sample value: "0"
   */
  ResultCode: string;
  /**
   * A description of the result code.
   * Max length is 1024.
   * Sample value: "The service request is processed successfully"
   */
  ResultDesc: string;
  /**
   * The unique identifier of the request message.
   * This is auto-generated by M-PESA for third-party/Organizations.
   * Its value comes from the response message and can be used to check the status of the transaction.
   * Max length is 128.
   * Sample value: "16917-22577599-3"
   */
  OriginatorConversationID: string;
  /**
   * The unique identifier generated by M-Pesa for the request.
   * Max length is 256.
   * Sample value: "AG_20200206_00005e091a8ec6b9eac5"
   */
  ConversationID: string;
  /**
   * It’s only for transactions. When the request is a transaction request, M-Pesa will generate a unique identifier for the transaction.
   * Max length is 100.
   * Sample value: "OA90000000"
   */
  TransactionID: string;
  /**
   * It is used to carry specific parameters for the account balance query.
   */
  ResultParameter: {
    /**
     * It indicates a parameter name.
     * Sample value: "AccountBalance"
     */
    Key: string;
    /**
     * It indicates a parameter value.
     * Format: <Account Type Alias>|<Currency>|<Current Balance>|<Available Balance>|<Reserved Balance>|<Unclear Balance>
     * Sample value: "Working Account|KES|700000.00|700000.00|0.00|0.00&Float Account|KES|0.00|0.00|0.00|0.00&Utility Account|KES|228037.00|228037.00|0.00|0.00&Charges Paid Account|KES|-1540.00|-1540.00|0.00|0.00&Organization Settlement Account|KES|0.00|0.00|0.00|0.00"
     */
    Value: string;
  }[];
  /**
   * It is used to carry some reference data that M-Pesa needs to record in the transactions log.
   */
  ReferenceData: {
    /**
     * It is used to carry some reference data that M-Pesa need not analyze but needs to record in the transaction log.
     */
    ReferenceItem: {
      /**
       * It indicates a parameter name.
       * Sample value: "QueueTimeoutURL"
       */
      Key: string;
      /**
       * It indicates a parameter value.
       * Sample value: "https://internalsandbox.safaricom.co.ke/mpesa/abresults/v1/submit"
       */
      Value: string;
    };
  };
}

/**
 * Interface for the ReverseC2BTransaction request body.
 */
export interface ReverseC2BTransactionBody {
  /**
   * TransactionID - Organization Receiving the funds.
   *
   * String
   * Example: "LKXXXX1234"
   */
  TransactionID: string;

  /**
   * Amount - The transaction amount.
   *
   * String
   * Example: "100.00"
   */
  Amount: string;

  /**
   * ReceiverParty - The organization that receives the transaction.
   *
   * Numeric
   * Example: "123456789" (Shortcode with 6-9 digits)
   */
  ReceiverParty: string;

  /**
   * Initiator - The name of the initiator to initiate the request.
   *
   * Alpha-Numeric
   * Example: "JohnDoe123"
   */
  Initiator?: string;

  /**
   * SecurityCredential - Encrypted Credential of the user getting the transaction amount.
   *
   * String
   * Example: "********" (Encrypted password for the initiator to authenticate the transaction request)
   */
  SecurityCredential?: string;

  /**
   * CommandID - Takes only the 'TransactionReversal' Command id.
   *
   * String
   * Example: "TransactionReversal"
   */
  CommandID?: string;

  /**
   * ReceiverIdentifierType - Type of organization that receives the transaction.
   *
   * String
   * Example: "11"
   */
  ReceiverIdentifierType?: string;

  /**
   * ResultURL - The path that stores information about the transaction.
   *
   * URL
   * Example: "https://ip or domain:port/path"
   */
  ResultURL?: string;

  /**
   * QueueTimeOutURL - The path that stores information about the time-out transaction.
   *
   * URL
   * Example: "https://ip or domain:port/path"
   */
  QueueTimeOutURL?: string;

  /**
   * Remarks - Comments that are sent along with the transaction.
   *
   * String
   * Example: "test"
   */
  Remarks?: string;

  /**
   * Occasion - Optional Parameter.
   *
   * String
   * Example: "Special Occasion"
   */
  Occasion?: string;
}

/**
 * Interface for the ReverseC2BTransaction response body.
 */
export interface ReverseC2BTransactionResponse {
  /**
   * OriginatorConversationID - The unique request ID for tracking a transaction.
   *
   * Alpha-Numeric
   * Example: "71840-27539181-07" (an alpha-numeric string of less than 20 characters)
   */
  OriginatorConversationID: string;

  /**
   * ConversationID - The unique request ID returned by mpesa for each request made.
   *
   * Alpha-Numeric
   * Example: "AG_20210709_12346c8e6f8858d7b70a"
   */
  ConversationID: string;

  /**
   * ResponseCode - Response code indicating the result of the service request.
   *
   * Numeric
   * Example: "0"
   */
  ResponseCode: string;

  /**
   * ResponseDescription - Response Description message.
   *
   * String
   * Example: "Accept the service request successfully."
   */
  ResponseDescription: string;
}

/**
 * Interface for the ReverseC2BTransactionResult response body.
 */
export interface Result {
  /**
   * Result - Contains information about the result of the transaction.
   */
  Result: {
    /**
     * ResultType - Indicates the result type.
     *
     * Integer
     * Example: 0 (completed) or 1 (waiting for further messages)
     */
    ResultType: number;

    /**
     * ResultCode - Indicates whether M-PESA processes the request successfully or not.
     *
     * String (max length: 10)
     * Example: "0"
     */
    ResultCode: string;

    /**
     * ResultDesc - Provides a description of the ResultCode.
     *
     * String (max length: 1024)
     * Example: "The service request is processed successfully."
     */
    ResultDesc: string;

    /**
     * OriginatorConversationID - The unique identifier of the request message.
     *
     * String
     * Example: "8521-4298025-1"
     */
    OriginatorConversationID: string;

    /**
     * ConversationID - The unique identifier generated by M-PESA for a request.
     *
     * String
     * Example: "AG_20181005_00004d7ee675c0c7ee0b"
     */
    ConversationID: string;

    /**
     * TransactionID - Unique identifier for the transaction.
     *
     * String
     * Example: "MJ561H6X5O"
     */
    TransactionID: string;

    /**
     * ResultParameters - Contains specific parameters for reversals API.
     */
    ResultParameters: {
      ResultParameter: {
        /**
         * Key - Indicates a parameter name.
         *
         * String
         * Example: "DebitAccountBalance"
         */
        Key: string;

        /**
         * Value - Indicates a parameter value.
         *
         * String
         * Example: "Utility Account|KES|51661.00|51661.00|0.00|0.00"
         */
        Value: string;
      }[];
    };

    /**
     * ReferenceData - Contains reference data for transaction logging.
     */
    ReferenceData: {
      ReferenceItem: {
        /**
         * Key - Indicates a reference data parameter name.
         *
         * String
         * Example: "QueueTimeoutURL"
         */
        Key: string;

        /**
         * Value - Indicates a reference data parameter value.
         *
         * String
         * Example: "https://internalsandbox.safaricom.co.ke/mpesa/reversalresults/v1/submit"
         */
        Value: string;
      };
    };
  };
}

/**
 * Interface for the tax remittance request body.
 */
export interface TaxRemittanceBody {
  /**
   * Initiator - The M-Pesa API operator username.
   *
   * String
   * Example: "TaxPayer"
   */
  Initiator: string;

  /**
   * SecurityCredential - The encrypted password of the M-Pesa API operator.
   *
   * String
   * Example: "32SzVdmCvjpmQfw3X2RK8UAv7xuhhkgjfgHAJSGFH..."
   */
  SecurityCredential: string;

  /**
   * CommandID - Specifies the type of transaction.
   *
   * String
   * Example: "PayTaxToKRA"
   */
  CommandID: string;

  /**
   * SenderIdentifierType - The type of shortcode from which money is deducted.
   *
   * Number
   * Example: 4
   */
  SenderIdentifierType: number;

  /**
   * RecieverIdentifierType - The type of shortcode to which money is credited.
   *
   * Number
   * Example: 4
   */
  RecieverIdentifierType: number;

  /**
   * Amount - The transaction amount.
   *
   * Number
   * Example: 239
   */
  Amount: number;

  /**
   * PartyA - Your own shortcode from which the money will be deducted.
   *
   * Number
   * Example: 888880
   */
  PartyA: number;

  /**
   * PartyB - The account to which money will be credited.
   *
   * Number
   * Example: 572572
   */
  PartyB: number;

  /**
   * AccountReference - The payment registration number (PRN) issued by KRA.
   *
   * String
   * Example: "PRN1234XN"
   */
  AccountReference: string;

  /**
   * Remarks - Any additional information to be associated with the transaction.
   *
   * String
   * Example: "OK"
   */
  Remarks: string;

  /**
   * QueueTimeOutURL - A URL that will be used to notify your system in case the request times out before processing.
   *
   * URL
   * Example: "https://mydomain.com/b2b/remittax/queue/"
   */
  QueueTimeOutURL: string;

  /**
   * ResultURL - A URL that will be used to send transaction results after processing.
   *
   * URL
   * Example: "https://mydomain.com/b2b/remittax/result/"
   */
  ResultURL: string;
}

/**
 * Interface for the tax remittance response body.
 */
export interface TaxRemittanceResponse {
  /**
   * OriginatorConversationID - Unique request identifier assigned by Daraja upon successful request submission.
   *
   * String
   * Example: "5118-111210482-1" (a string of fewer than 20 characters)
   */
  OriginatorConversationID: string;

  /**
   * ConversationID - Unique request identifier assigned by M-Pesa upon successful request submission.
   *
   * String
   * Example: "AG_20230420_2010759fd5662ef6d054"
   */
  ConversationID: string;

  /**
   * ResponseCode - Status code for request submission. 0 (zero) indicates successful request submission.
   *
   * String
   * Example: "0"
   */
  ResponseCode: string;

  /**
   * ResponseDescription - A descriptive message of the request submission status.
   *
   * String
   * Example: "Accept the service request successfully."
   */
  ResponseDescription: string;
}

/**
 * Interface for the BusinessPaybill request body.
 */
export interface BusinessRequestBody {
  /**
   * Initiator - The M-Pesa API operator username. This user needs Org Business Pay Bill API initiator role on M-Pesa.
   *
   * String
   * Example: "API_Usename"
   */
  Initiator: string;

  /**
   * SecurityCredential - The encrypted password of the M-Pesa API operator.
   *
   * String
   * Example: "32SzVdmCvjpmQfw3X2RK8UAv7xuhhkgjfgHAJSGFHJgagfagF..."
   */
  SecurityCredential: string;

  /**
   * CommandID - Specifies the type of transaction. For this API, use "BusinessPayBill" only.
   *
   * String
   * Example: "BusinessPayBill"
   */
  CommandID: "BusinessPayBill";

  /**
   * SenderIdentifierType - The type of shortcode from which money is deducted. For this API, only 4 is allowed.
   *
   * Number
   * Example: 4
   */
  SenderIdentifierType: 4;

  /**
   * ReceiverIdentifierType - The type of shortcode to which money is credited. For this API, only 4 is allowed.
   *
   * Number
   * Example: 4
   */
  ReceiverIdentifierType: 4;

  /**
   * Amount - The transaction amount.
   *
   * Number
   * Example: 239
   */
  Amount: number;

  /**
   * PartyA - Your shortcode. The shortcode from which money will be deducted.
   *
   * Number (5-6 digits)
   * Example: 123456
   */
  PartyA: number;

  /**
   * PartyB - The shortcode to which money will be moved.
   *
   * Number (5-6 digits)
   * Example: 000000
   */
  PartyB: number;

  /**
   * Requester - Optional. The consumer’s mobile number on behalf of whom you are paying.
   *
   * Mobile Number
   * Example: 254700000000
   */
  Requester?: number;

  /**
   * AccountReference - The account number to be associated with the payment. Up to 13 characters.
   *
   * String
   * Example: "ACC#03929/4yu"
   */
  AccountReference: string;

  /**
   * Remarks - Any additional information to be associated with the transaction.
   *
   * String (Up to 100 characters)
   * Example: "OK"
   */
  Remarks: string;

  /**
   * QueueTimeOutURL - A URL that will be used to notify your system in case the request times out before processing.
   *
   * URL
   * Example: "https://ip or domain:port/path"
   */
  QueueTimeOutURL: string;

  /**
   * ResultURL - A URL that will be used to send transaction results after processing.
   *
   * URL
   * Example: "https://ip or domain:port/path"
   */
  ResultURL: string;

  /**
   * Occasion - Any additional information to be associated with the transaction.
   *
   * String (Up to 100 characters)
   * Example: "Special Occasion"
   */
  Occasion?: string;
}

/**
 * Interface for the BusinessPaybill response body.
 */
export interface BusinessRequestResponse {
  /**
   * OriginatorConversationID - Unique request identifier assigned by Daraja upon successful request submission.
   *
   * String
   * Example: "5118-111210482-1" (a string of less than 20 characters)
   */
  OriginatorConversationID: string;

  /**
   * ConversationID - Unique request identifier assigned by M-Pesa upon successful request submission.
   *
   * String
   * Example: "AG_20230420_2010759fd5662ef6d054"
   */
  ConversationID: string;

  /**
   * ResponseCode - Status code for request submission. 0 (zero) indicates successful submission.
   *
   * String
   * Example: "0"
   */
  ResponseCode: string;

  /**
   * ResponseDescription - A descriptive message of the request submission status.
   *
   * String
   * Example: "Accept the service request successfully."
   */
  ResponseDescription: string;
}

/**
 * B2B Express Checkout Request Body
 */
export type B2BExpressCheckoutBody = {
  /**
   * Debit party, the merchant’s till (organization sending money) shortCode/tillNumber.
   * @type {number}
   * @example 000001
   */
  primaryShortCode: number;

  /**
   * Credit party, the vendor (payBill Account) receiving the amount from the merchant.
   * @type {number}
   * @example 000002
   */
  receiverShortCode: number;

  /**
   * Amount to be sent to the vendor.
   * @type {number}
   * @example 100
   */
  amount: number;

  /**
   * Reference to the payment being made. Appears in the text for easy reference by the merchant.
   * @type {string}
   * @example "paymentRef"
   */
  paymentRef: string;

  /**
   * Endpoint from the vendor system used to send back the confirmation response once the transaction is complete.
   * @type {string}
   * @example "http://..../result"
   */
  callbackUrl: string;

  /**
   * Organization's friendly name used by the vendor as known by the Merchant.
   * @type {string}
   * @example "Vendor"
   */
  partnerName: string;

  /**
   * Random Unique Identifier sent by the vendor System.
   * Used to track the process across different components.
   * Generated at the Apigee level, and the result returned in the acknowledgment.
   * @type {string}
   * @example "550e8400-e29b-41d4-a716-446655440000"
   */
  RequestRefID: string;
};

/**
 * This interface defines the body of a B2B Buy Goods request to the M-Pesa API.
 */
export interface B2BBuyGoodsBody {
  /**
   * For this API use "BusinessBuyGoods" only.
   */
  CommandID: "BusinessBuyGoods" | "BusinessPaybill";

  /**
   * The M-Pesa API operator username. This user needs Org Business Pay Bill API initiator role on M-Pesa.
   */
  Initiator: string;

  /**
   * The encrypted password of the M-Pesa API operator. The process for encrypting the initiator password has been described under docs. An online encryption tool is available under the test credentials section.
   */
  SecurityCredential: string;

  /**
   * The type of shortcode from which money is deducted. For this API, only "4" is allowed.
   */
  SenderIdentifierType: 4;

  /**
   * The type of shortcode to which money is credited. This API supports type 4 only.
   */
  RecieverIdentifierType: 4;

  /**
   * The transaction amount.
   */
  Amount: number;

  /**
   * The shortcode to which money will be moved.
   */
  PartyB: string;

  /**
   * The account number to be associated with the payment. Up to 13 characters.
   */
  AccountReference: string;

  /**
   * (Optional) The consumer’s mobile number on behalf of whom you are paying.
   */
  Requester?: string;

  /**
   * Any additional information to be associated with the transaction. Sentence of up to 100 characters.
   */
  Remarks: string;

  /**
   * A URL that will be used to notify your system in case the request times out before processing.
   */
  QueueTimeOutURL: string;

  /**
   * A URL that will be used to send transaction results after processing.
   */
  ResultURL: string;
}

/**
 * This interface defines the response body of a B2B Buy Goods request from the M-Pesa API.
 */
export interface B2BBuyGoodsResponse {
  /**
   * Unique request identifier assigned by Daraja upon successful request submission.
   */
  OriginatorConversationID: string;

  /**
   * Unique request identifier assigned by M-Pesa upon successful request submission.
   */
  ConversationID: string;

  /**
   * Status code for request submission. 0 (zero) indicates successful submission.
   */
  ResponseCode: string;

  /**
   * A descriptive message of the request submission status.
   */
  ResponseDescription: string;
}

/**
 * This interface defines the response body of a successful B2B Buy Goods request from the M-Pesa API.
 */
export interface B2BBuyGoodsAndPaybillSuccessfulResponse {
  /**
   * The root parameter encloses the entire result message.
   */
  Result: {
    /**
     * A status code indicating whether the transaction was already sent to your listener. The usual value is 0.
     */
    ResultType: string;

    /**
     * A transaction result status code. 0(zero) indicates successful processing.
     */
    ResultCode: string;

    /**
     * A descriptive message for the transaction result.
     */
    ResultDesc: string;

    /**
     * Unique request identifier assigned by M-Pesa upon successful request submission.
     */
    ConversationID: string;

    /**
     * Unique request identifier assigned by Daraja upon successful request submission.
     */
    OriginatorConversationID: string;

    /**
     * Unique M-PESA transaction ID for the payment request.
     */
    TransactionID: string;

    /**
     * This is a JSON object that holds more details for the transaction.
     */
    ResultParameters: {
      /**
       * A JSON array within the ResultParameters that holds additional transaction details as JSON objects.
       */
      ResultParameter: {
        /**
         * Key for the transaction detail.
         */
        Key: string;

        /**
         * Value for the transaction detail. Can be a string or a nested object.
         */
        Value:
          | string
          | {
              Amount: {
                CurrencyCode: string;
                MinimumAmount: number;
                BasicAmount: number;
              };
            };
      }[];
    };

    /**
     * This JSON object holds more details for the transaction reference data.
     */
    ReferenceData: {
      /**
       * A JSON array that holds JSON Objects with additional transaction details.
       */
      ReferenceItem: {
        /**
         * Key for the reference data.
         */
        Key: string;

        /**
         * Value for the reference data.
         */
        Value: string;
      }[];
    };
  };
}

/**
 * This interface defines the response body of a failed B2B Buy Goods request from the M-Pesa API.
 */
export interface B2BErrorResponse {
  /**
   * The root parameter encloses the entire result message.
   */
  Result: {
    /**
     * A status code indicating whether the transaction was already sent to your listener. The usual value is 0.
     */
    ResultType: string;

    /**
     * A transaction result status code. Non-zero values indicate processing errors.
     */
    ResultCode: "0";

    /**
     * A descriptive message for the transaction processing error.
     */
    ResultDesc: string;

    /**
     * Unique request identifier assigned by M-Pesa upon successful request submission.
     */
    ConversationID: string;

    /**
     * Unique request identifier assigned by Daraja upon successful request submission.
     */
    OriginatorConversationID: string;

    /**
     * Unique M-PESA transaction ID for the payment request. A generic value is passed for certain failure scenarios.
     */
    TransactionID: string;

    /**
     * This is a JSON object that may hold additional details for the transaction, but may be empty for some errors.
     */
    ResultParameters?: {
      /**
       * A JSON array within the ResultParameters that holds additional transaction details as JSON objects.
       */
      ResultParameter: {
        /**
         * Key for the transaction detail.
         */
        Key: string;

        /**
         * Value for the transaction detail.
         */
        Value: string;
      }[];
    };

    /**
     * This JSON object may hold additional details for the transaction reference data, but may be empty for some errors.
     */
    ReferenceData?: {
      /**
       * A JSON array that may hold JSON Objects with additional transaction details.
       */
      ReferenceItem?: {
        /**
         * Key for the reference data.
         */
        Key: string;

        /**
         * Value for the reference data.
         */
        Value: string;
      }[];
    };
  };
}

/**
 * This interface defines the data structure for Bill Manager opt-in request.
 */
export interface BillManagerOptin {
  /**
   * This is the official contact email address for the organization.
   */
  email: string;

  /**
   * This is the official contact phone number for the organization.
   */
  officialContact: string;

  /**
   * This field enables or disables SMS payment reminders for invoices sent (0 - disable, 1 - enable).
   */
  sendReminders: 0 | 1;

  /**
   * (Optional) Image to be embedded in invoices and receipts sent to customers. Must be in JPEG or JPG format.
   */
  logo?: string; // '?' indicates optional property

  /**
   * This URL will be invoked by the M-Pesa API to push payments made to your Paybill.
   */
  callbackurl: string;
}

/**
 * This interface defines the response body of a Bill Manager opt-in request.
 */
export interface BillManagerOptInResponse {
  /**
   * This is the application key you receive upon onboarding your Paybill to the Daraja Platform.
   */
  app_key: string;

  /**
   * This is a message from the API that gives the status of the request processing.
   */
  resmsg: string;

  /**
   * This is a numeric status code that indicates the status of the opt-in request.
   * 200 indicates success, other codes indicate errors.
   */
  rescode: string;
}

/**
 * This interface defines the data structure for a single invoice request to Bill Manager.
 */
export interface BillManagerSingleInvoicingBody {
  /**
   * A unique invoice name on your system used for referencing between Bill Manager and your system. Must already exist, otherwise the invoice will not be sent.
   */
  externalReference: string;

  /**
   * The full name of the recipient to receive the invoice details. Will appear in the SMS sent.
   */
  billedFullName: string;

  /**
   * The phone number to receive invoice details via SMS. Must be a Safaricom number.
   */
  billedPhoneNumber: string;

  /**
   * The month and year of the billing period (e.g., "August 2021").
   */
  billedPeriod: string;

  /**
   * A descriptive invoice name for what the customer is being billed. Will appear in the invoice SMS sent to the customer.
   */
  invoiceName: string;

  /**
   * The date you expect the customer to have paid the invoice amount. Three reminders will be sent before the due date.
   */
  dueDate: string;

  /**
   * The account number being invoiced that uniquely identifies a customer (e.g., customer name, business name, property unit, student name).
   */
  accountReference: string;

  /**
   * The total invoice amount to be paid in Kenyan Shillings. No special characters (e.g., commas) allowed.
   */
  amount: number;

  /**
   * (Optional) An array of additional billable items to be included in the invoice. These will appear on the e-invoice.
   */
  invoiceItems?: {
    itemName: string;
    amount: number;
  }[];
}

/**
 * This interface defines the response body of a single invoice request to Bill Manager.
 */
export interface BillManagerSingleInvoicingResponse {
  /**
   * A descriptive message indicating the outcome of the invoice request.
   */
  Status_Message: string;

  /**
   * This is a message from the API that gives the status of the request processing.
   */
  resmsg: string;

  /**
   * This is a numeric status code that indicates the status of the invoice request.
   * 200 indicates success, other codes indicate errors.
   */
  rescode: string;
}

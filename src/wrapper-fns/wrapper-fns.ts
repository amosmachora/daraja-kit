import {
    AccountBalanceBody,
    AccountBalanceResponse,
    B2BExpressCheckoutBody,
    B2CRequestBody,
    B2CRequestResponse,
    BusinessRequestBody,
    BusinessRequestResponse,
    RegisterUrlBody,
    RegisterUrlResponse,
    ReverseC2BTransactionBody,
    ReverseC2BTransactionResponse,
    ScannableQrCodeResponse,
    ScannableQrParamsInternal,
    StateOfALNMOnlinePaymentBody,
    StateOfALNMOnlinePaymentResponse,
    TaxRemittanceBody,
    TaxRemittanceResponse,
    TransactionStatusBody,
    TransactionStatusResponse,
} from "../types";
import {BASE_URL, BUSINESS_SHORT_CODE, PASSKEY} from "../env";
import axios, {AxiosError, AxiosResponse} from "axios";
import {generatePassword, generateTimestamp} from "../util/utils";

import {generateAccessToken} from "./access-token";

/**
 * The fetchQrCode function generates a scannable QR code for the user to scan and pay.
 *
 *
 * @param scannableQrParams: ScannableQrParamsInternal Pass in the parameters required to generate a scannable qr code
 *
 * @return A promise
 *
 * @docauthor @geoffreynyaga
 */
export const fetchQrCode = async (
    scannableQrParams: ScannableQrParamsInternal,
): Promise<ScannableQrCodeResponse> => {
    const {access_token} = await generateAccessToken();
    try {
        const res: AxiosResponse<ScannableQrCodeResponse> = await axios.post(
            `${BASE_URL}/mpesa/qrcode/v1/generate`,
            scannableQrParams,
            {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            },
        );
        return res.data;
    } catch (err: any) {
        throw new Error(
            `Error occurred with status code ${err.response?.status}, ${err.response?.statusText}`,
        );
    }
};

export type StateOfALNMOnlinePaymentParam = Omit<
    StateOfALNMOnlinePaymentBody,
    "password"
>;

/**
 * This  function sends a POST request to query the state of an LNM online payment using
 * M-Pesa STK push.
 * @param {StateOfALNMOnlinePaymentParam} stateOfALNMOnlinePaymentBody - The
 *  BusinessShortCode: string;
    Password: string;
    Timestamp: string;
    CheckoutRequestID: string;
 * @returns The function `getStateOfALNMOnlinePayment` is returning a Promise that resolves to a
 * `StateOfALNMOnlinePaymentResponse` object.
 * @docauthor @geoffreynyaga
 */
export const getStateOfALNMOnlinePayment = async (
    stateOfALNMOnlinePaymentBody: StateOfALNMOnlinePaymentParam,
): Promise<StateOfALNMOnlinePaymentResponse> => {
    const {access_token} = await generateAccessToken();
    const password = generatePassword();

    try {
        const res: AxiosResponse<StateOfALNMOnlinePaymentResponse> = await axios.post(
            `${BASE_URL}/mpesa/stkpushquery/v1/query`,
            {...stateOfALNMOnlinePaymentBody, password},
            {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            },
        );

        return res.data;
    } catch (err: any) {
        throw new Error(
            `Error occurred with status code ${err.response?.status}, ${err.response?.statusText}`,
        );
    }
};

export const registerC2BUrl = async (
    registerUrlBody: RegisterUrlBody,
): Promise<RegisterUrlResponse> => {
    const {access_token} = await generateAccessToken();

    try {
        const res: AxiosResponse<RegisterUrlResponse> = await axios.post(
            `${BASE_URL}/mpesa/c2b/v1/registerurl`,
            {
                ...registerUrlBody,
                ShortCode: BUSINESS_SHORT_CODE,
            },
            {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            },
        );

        return res.data;
    } catch (err: any) {
        throw new Error(
            `Error occurred with status code ${err.response?.status}, ${err.response?.statusText}`,
        );
    }
};

export const b2cPaymentRequest = async (
    b2CBody: B2CRequestBody,
): Promise<B2CRequestResponse> => {
    const {access_token} = await generateAccessToken();

    try {
        const res: AxiosResponse<B2CRequestResponse> = await axios.post(
            `${BASE_URL}/mpesa/b2c/v1/paymentrequest`,
            b2CBody,
            {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            },
        );
        return res.data;
    } catch (err: any) {
        throw new Error(
            `Error occurred with status code ${err.response?.status}, ${err.response?.statusText}`,
        );
    }
};

export const b2bPaymentRequest = async (
    body: BusinessRequestBody,
): Promise<BusinessRequestResponse> => {
    const {access_token} = await generateAccessToken();

    try {
        const res: AxiosResponse<BusinessRequestResponse> = await axios.post(
            `${BASE_URL}/mpesa/b2b/v1/paymentrequest`,
            body,
            {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            },
        );
        return res.data;
    } catch (err: any) {
        throw new Error(
            `Error occurred with status code ${err.response?.status}, ${err.response?.statusText}`,
        );
    }
};

/**
 * The function `getTransactionStatus` sends a POST request to query transaction status using an access
 * token obtained from `generateAccessToken`.
 * @param {TransactionStatusBody} transactionStatusBody - The `transactionStatusBody` parameter in the
 * `getTransactionStatus` function is an object that contains the necessary information to query the
 * status of a transaction.
 * @returns The `getTransactionStatus` function is returning a Promise that resolves to a
 * `TransactionStatusResponse` object.
 */
export const getTransactionStatus = async (
    transactionStatusBody: TransactionStatusBody,
): Promise<TransactionStatusResponse> => {
    const {access_token} = await generateAccessToken();

    try {
        const res: AxiosResponse<TransactionStatusResponse> = await axios.post(
            `${BASE_URL}/mpesa/transactionstatus/v1/query`,
            transactionStatusBody,
            {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            },
        );
        return res.data;
    } catch (err: any) {
        throw new Error(
            `Error occurred with status code ${err.response?.status}, ${err.response?.statusText}`,
        );
    }
};

/**
  * The getAccountBalance() function is used to check the balance of a M-Pesa paybill or buy goods account.
  * 
  *
  * @param accountBalance <AccountBalanceBody> Pass the body of the request to be sent to safaricom's api
  
  export default getaccountbalance;
  *
  * @return A promise
  *
  * @docauthor @geoffreynyaga
*/
export const getAccountBalance = async (
    accountBalance: AccountBalanceBody,
): Promise<AccountBalanceResponse> => {
    const {access_token} = await generateAccessToken();

    try {
        const res: AxiosResponse<AccountBalanceResponse> = await axios.post(
            `${BASE_URL}/mpesa/accountbalance/v1/query`,
            accountBalance,
            {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            },
        );
        return res.data;
    } catch (err: any) {
        throw new Error(
            `Error occurred with status code ${err.response?.status}, ${err.response?.statusText}`,
        );
    }
};

/**
 * The function `reverseC2BTransaction` sends a POST request to reverse a C2B transaction using an
 * access token obtained from generating an access token.
 * @param {ReverseC2BTransactionBody} body - The `body` parameter in the `reverseC2BTransaction`
 * function represents the request body that contains the necessary information for reversing a C2B
 * @returns The `reverseC2BTransaction` function returns a Promise that resolves to a
 * `ReverseC2BTransactionResponse` object.
 *  @docauthor @geoffreynyaga
 */
export const reverseC2BTransaction = async (
    body: ReverseC2BTransactionBody,
): Promise<ReverseC2BTransactionResponse> => {
    const {access_token} = await generateAccessToken();

    try {
        const res: AxiosResponse<ReverseC2BTransactionResponse> = await axios.post(
            `${BASE_URL}/mpesa/reversal/v1/request`,
            body,
            {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            },
        );
        return res.data;
    } catch (err: any) {
        throw new Error(
            `Error occurred with status code ${err.response?.status}, ${err.response?.statusText}`,
        );
    }
};

/**
 * The remitTax function is used to remit taxes to the Kenya Revenue Authority (KRA).
 *
 * @param body: TaxRemittanceBody Pass the required parameters for remitting tax
 * @return  A promise
 *
 * @docauthor @geoffreynyaga
 */
export const remitTax = async (
    body: TaxRemittanceBody,
): Promise<TaxRemittanceResponse> => {
    const {access_token} = await generateAccessToken();

    try {
        const res: AxiosResponse<TaxRemittanceResponse> = await axios.post(
            `${BASE_URL}/mpesa/b2b/v1/remittax`,
            body,
            {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            },
        );
        return res.data;
    } catch (err: any) {
        throw new Error(
            `Error occurred with status code ${err.response?.status}, ${err.response?.statusText}`,
        );
    }
};

export const b2bExpressCheckout = async (data: B2BExpressCheckoutBody) => {
    const {access_token} = await generateAccessToken();

    try {
        const res = await axios.post(`${BASE_URL}/v1/ussdpush/get-msisdn`, data, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        return res.data;
    } catch (error) {
        const err = error as AxiosError;
        console.error(error);
        throw new Error(
            `Error occurred with status code ${err.response?.status}, ${err.response?.statusText}`,
        );
    }
};

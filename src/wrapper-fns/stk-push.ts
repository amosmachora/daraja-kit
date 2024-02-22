import {
    AccountReference,
    Amount,
    CallBackURL,
    PhoneNumber,
    STKPushBody,
    STKPushResponse,
    TransactionDesc,
    TransactionType,
} from "../types";
import {BASE_URL, BUSINESS_SHORT_CODE, ENVIRONMENT, PASSKEY} from "../env";
import {generatePassword, generateTimestamp, isValidHttpsUrl} from "../util/utils";

import axios from "axios";
import {generateAccessToken} from "./access-token";

export type STKPushRequestParam = {
    phoneNumber: PhoneNumber;
    amount: Amount;
    callbackURL: CallBackURL;
    transactionDesc: TransactionDesc;
    accountReference: AccountReference;
};

export const stkPushRequest = async ({
    phoneNumber,
    amount,
    callbackURL,
    transactionDesc,
    accountReference,
}: STKPushRequestParam) => {
    // check if transactionDesc and accountReference are correct lengths
    if (transactionDesc.length > 13) {
        throw new Error("transactionDesc should be less than 13 characters");
    }
    if (accountReference.length > 12) {
        throw new Error("accountReference should be less than 13 characters");
    }

    if (parseInt(accountReference) < 1 || parseInt(accountReference) > 200000) {
        throw new Error("Amount should be more than zero and less than 200000");
    }

    if (phoneNumber.startsWith("254") === false) {
        throw new Error("Phone number should start with 254");
    }
    if (isValidHttpsUrl(callbackURL) === false) {
        throw new Error("Callback URL must be a valid HTTPS URL");
    }

    try {
        const timestamp = generateTimestamp();

        const password = generatePassword();

        const stkPushBody: STKPushBody = {
            BusinessShortCode: BUSINESS_SHORT_CODE!,
            PartyB: BUSINESS_SHORT_CODE!,
            Timestamp: timestamp,
            Password: password,
            PartyA: phoneNumber,
            PhoneNumber: phoneNumber,
            Amount: ENVIRONMENT === "production" ? amount : "1",
            CallBackURL: callbackURL,
            TransactionDesc: transactionDesc,
            TransactionType: process.env
                .MPESA_TRANSACTION_TYPE as unknown as TransactionType,
            AccountReference: accountReference,
        };

        const accessTokenResponse = await generateAccessToken();

        const res = await axios.post<STKPushResponse>(
            `${BASE_URL}/mpesa/stkpush/v1/processrequest`,
            stkPushBody,
            {
                headers: {
                    Authorization: `Bearer ${accessTokenResponse.access_token}`,
                },
            },
        );

        return res.data;
    } catch (err: any) {
        // console.error(err);

        throw new Error(
            `Error occurred with status code ${err.response?.status}, ${err.response?.statusText}`,
        );
    }
};

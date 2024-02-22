import {STKPushRequestParam, stkPushRequest} from "../stk-push";

import axios from "axios";
import {generateAccessToken} from "../access-token";

jest.mock("axios");
jest.mock("../access-token");

describe("stkPushRequest", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    const validParams: STKPushRequestParam = {
        phoneNumber: "254712345678",
        amount: "100",
        callbackURL: "https://example.com/callback",
        transactionDesc: "ValidDesc",
        accountReference: "validref",
    };

    const mockAccessTokenResponse = {
        access_token: "mockAccessToken",
    };

    it("should throw an error for invalid phone", async () => {
        const invalidData: STKPushRequestParam = {
            phoneNumber: "0722000000", // Invalid phone number
            amount: "100",
            callbackURL: "https://example.com/callback", // Non-HTTPS URL
            transactionDesc: "This is ok", // Too long description
            accountReference: "reference123",
        };

        expect(() => stkPushRequest({...invalidData})).rejects.toThrow(
            `Phone number should start with 254`,
        );
    });

    it("should throw an error for invalid callback url", async () => {
        const invalidData = {
            phoneNumber: "254722000000", // Invalid phone number
            amount: "100",
            callbackURL: "http://example.com/callback", // Non-HTTPS URL
            transactionDesc: "This is ok", // Too long description
            accountReference: "reference123",
        };

        const invalidData2 = {
            phoneNumber: "254722000000", // Invalid phone number
            amount: "100",
            callbackURL: "http://example.", // Non-HTTPS URL
            transactionDesc: "This is ok", // Too long description
            accountReference: "reference123",
        };

        const invalidData3 = {
            phoneNumber: "254722000000", // Invalid phone number
            amount: "100",
            callbackURL: "www.example.com", // Non-HTTPS URL
            transactionDesc: "This is ok", // Too long description
            accountReference: "reference123",
        };

        expect(() => stkPushRequest({...invalidData})).rejects.toThrow(
            "Callback URL must be a valid HTTPS URL",
        );
        expect(() => stkPushRequest({...invalidData2})).rejects.toThrow(
            "Callback URL must be a valid HTTPS URL",
        );
        expect(() => stkPushRequest({...invalidData3})).rejects.toThrow(
            "Callback URL must be a valid HTTPS URL",
        );
    });

    it("should throw an error for  lengthy transactionDesc", async () => {
        const invalidData = {
            phoneNumber: "254722000000", // Invalid phone number
            amount: "100",
            callbackURL: "https://example.com/callback", // Non-HTTPS URL
            transactionDesc: "This is a string with more than 13 characters", // Too long description
            accountReference: "ref",
        };

        expect(() => stkPushRequest({...invalidData})).rejects.toThrow(
            "transactionDesc should be less than 13 characters",
        );
    });

    it("should throw an error for  lengthy transactionReference", async () => {
        const invalidData = {
            phoneNumber: "254722000000", // Invalid phone number
            amount: "100",
            callbackURL: "https://example.com/callback", // Non-HTTPS URL
            transactionDesc: "ok", // Too long description
            accountReference: "ref is too long",
        };
        expect(() => stkPushRequest({...invalidData})).rejects.toThrow(
            "accountReference should be less than 13 characters",
        );
    });

    it("should make a successful stk push request", async () => {
        (axios.post as jest.Mock).mockResolvedValueOnce({data: {}});
        (generateAccessToken as jest.Mock).mockResolvedValueOnce(
            mockAccessTokenResponse,
        );

        const result = await stkPushRequest(validParams);

        expect(result).toEqual({});
        expect(axios.post).toHaveBeenCalledWith(
            expect.any(String),
            expect.any(Object),
            expect.any(Object),
        );
        expect(generateAccessToken).toHaveBeenCalled();
    });

    it("should handle errors during stk push request", async () => {
        const errorMessage = "Request failed";
        (axios.post as jest.Mock).mockRejectedValueOnce({
            response: {status: 500, statusText: errorMessage},
        });
        (generateAccessToken as jest.Mock).mockResolvedValueOnce(
            mockAccessTokenResponse,
        );

        await expect(stkPushRequest(validParams)).rejects.toThrowError(
            `Error occurred with status code 500, ${errorMessage}`,
        );
    });
});

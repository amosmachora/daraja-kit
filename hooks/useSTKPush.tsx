import axios from "axios";
import { STKPushBody, STKPushResponse } from "../types";
import { generateTimestamp, generatePassword } from "../util/utils";
import { useReactDaraja } from "./useReactDaraja";

export const useSTKPush = (
  body: Omit<
    STKPushBody,
    | "BusinessShortCode"
    | "PartyB"
    | "Timestamp"
    | "Password"
    | "PhoneNumber"
    | "PartyA"
  >
): ((phoneNumber: string) => Promise<STKPushResponse>) => {
  const { accessToken, businessShortCode, baseURL, mode, productionPassKey } =
    useReactDaraja();

  const stkPush = async (phoneNumber: string) => {
    try {
      const timestamp = generateTimestamp();
      const password =
        mode === "development"
          ? "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMTYwMjE2MTY1NjI3"
          : generatePassword(businessShortCode!, productionPassKey!, timestamp);

      const stkPushBody: STKPushBody = {
        ...body,
        BusinessShortCode: businessShortCode!,
        PartyB: businessShortCode!,
        Timestamp: timestamp,
        Password: password,
        PartyA: phoneNumber,
        PhoneNumber: phoneNumber,
      };

      const res: STKPushResponse = await axios.post(
        `${baseURL}/mpesa/stkpush/v1/processrequest`,
        stkPushBody,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      return res;
    } catch (err: any) {
      throw new Error(
        `Error occurred with status code ${err.response?.status}, ${err.response?.statusText}`
      );
    }
  };

  return stkPush;
};

import axios from "axios";
import { BASE_URL, CONSUMER_KEY, CONSUMER_SECRET } from "./env";
import cache from "memory-cache";
import { AccessTokenResponse } from "../types";

export const generateAccessToken = async (): Promise<AccessTokenResponse> => {
  const credentials = `${CONSUMER_KEY}:${CONSUMER_SECRET}`;
  const encodedCredentials = btoa(credentials);

  const token: AccessTokenResponse = cache.get("act");

  if (token) {
    return token;
  }

  try {
    const res = await axios.get(
      `${BASE_URL}/oauth/v1/generate?grant_type=client_credentials`,
      {
        headers: {
          Authorization: `Bearer ${encodedCredentials}`,
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    cache.put("act", res.data, res.data.expires_in);

    return res.data;
  } catch (err: any) {
    throw new Error(
      `Error occurred with status code ${err.response?.status}, ${err.response?.statusText}`
    );
  }
};

import axios from "axios";
import { BASE_URL, CONSUMER_KEY, CONSUMER_SECRET } from "../env";
import cache from "memory-cache";
import { AccessTokenResponse } from "../types/types";

export const generateAccessToken = async (): Promise<AccessTokenResponse> => {
  const credentials = `${CONSUMER_KEY}:${CONSUMER_SECRET}`;
  const encodedAuthString = Buffer.from(credentials).toString("base64");

  const token: AccessTokenResponse = cache.get("act");

  if (token) {
    return token;
  }

  try {
    const res = await axios.get(
      `${BASE_URL}/oauth/v1/generate?grant_type=client_credentials`,
      {
        headers: {
          Authorization: `Basic ${encodedAuthString}`,
        },
      }
    );

    cache.put("act", res.data, 3599 * 1000);

    return res.data;
  } catch (err: any) {
    console.error(err);
    throw new Error(
      `Error occurred with status code ${err.response?.status}, ${err.response?.statusText}`
    );
  }
};

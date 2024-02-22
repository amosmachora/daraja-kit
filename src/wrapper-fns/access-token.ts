import { BASE_URL, CONSUMER_KEY, CONSUMER_SECRET } from "../env";

import { TAccessTokenResponse } from "../types";
import axios from "axios";
import cache from "memory-cache";

/**
 * The function `generateAccessToken` asynchronously retrieves and caches an access token for a
 * specified duration using client credentials in TypeScript.
 * @param {number} [expiry_time_seconds=3599] - The `expiry_time_seconds` parameter in the
 * `generateAccessToken` function is used to specify the duration for which the access token will be
 * valid before it expires. By default, if no value is provided, it is set to 3599 seconds (which is
 * equivalent to 1 hour). This parameter
 * @returns The `generateAccessToken` function returns a Promise that resolves to a
 * `TAccessTokenResponse`. This response contains the access token data obtained from the API endpoint
 * after making a request with client credentials. If the access token is already cached, the function
 * directly returns the cached token without making a new API request.
 */
export const generateAccessToken = async (expiry_time_seconds=3599 ): Promise<TAccessTokenResponse> => {
  const credentials = `${CONSUMER_KEY}:${CONSUMER_SECRET}`;
  const encodedAuthString = Buffer.from(credentials).toString("base64");

  const token: TAccessTokenResponse = cache.get("act");

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

    /* `cache.put("act", res.data, expiry_time_seconds * 1000);` is storing the access token (`res.data`) in a cache
    with the key "act" for a specified duration. 
    In this case, the access token is being cached for the default
    3599 seconds (which is equivalent to 1 hour) multiplied by 1000 to convert it to milliseconds.
    This caching mechanism helps in efficiently storing and retrieving the access token for
    subsequent API requests within the defined expiration time. */
    cache.put("act", res.data, expiry_time_seconds * 1000);

    return res.data;
  } catch (err: any) {
    throw new Error(
      `Error occurred with status code ${err.response?.status}${err.response.message ? ','+err.response.message : ''}`
    );
  }
};

import axios from "axios";
import { InitOptions, InitializeAppResponse } from "../types";
import { useReactDaraja } from "./useReactDaraja";

export const useInitializeApp = (
  initOptions: InitOptions
): (() => Promise<InitializeAppResponse>) => {
  const { consumerKey, consumerSecret } = initOptions;
  const credentials = `${consumerKey}:${consumerSecret}`;
  const encodedCredentials = btoa(credentials);

  const { baseURL } = useReactDaraja();

  const initApp = async (): Promise<InitializeAppResponse> => {
    try {
      const res = await axios.get(
        `${baseURL}/oauth/v1/generate?grant_type=client_credentials`,
        {
          headers: {
            Authorization: `Bearer ${encodedCredentials}`,
          },
        }
      );
      return res.data;
    } catch (err: any) {
      throw new Error(
        `Error occurred with status code ${err.response?.status}, ${err.response?.statusText}`
      );
    }
  };

  return initApp;
};

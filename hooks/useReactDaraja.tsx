import React, { createContext, useContext, useEffect, useState } from "react";
import { InitializeApp } from "..";
import { BusinessShortCode, ContextData, STKPushBody } from "../types";

export const darajaAPIProvider = createContext<ContextData>({
  accessToken: null,
  mode: "development",
  businessShortCode: null,
  baseURL: "https://sandbox.safaricom.co.ke",
  productionPassKey: null,
});

export const ReactDarajaProvider = ({
  children,
  consumerKey,
  consumerSecret,
  mode,
  businessShortCode,
  productionPassKey,
}: {
  children: React.ReactNode;
  consumerKey: string;
  consumerSecret: string;
  mode: "development" | "production";
  businessShortCode: BusinessShortCode;
  productionPassKey?: string;
}) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const baseURL =
    mode === "development"
      ? "https://sandbox.safaricom.co.ke"
      : "https://api.safaricom.co.ke";

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const init = async () => {
      const { access_token, expires_in } = await InitializeApp({
        consumerKey,
        consumerSecret,
      });
      setAccessToken(access_token);

      intervalId = setInterval(async () => {
        const { access_token } = await InitializeApp({
          consumerKey,
          consumerSecret,
        });
        setAccessToken(access_token);
      }, parseInt(expires_in));
    };

    init();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <darajaAPIProvider.Provider
      value={{
        accessToken,
        mode,
        businessShortCode,
        baseURL,
        productionPassKey: productionPassKey ?? null,
      }}
    >
      {children}
    </darajaAPIProvider.Provider>
  );
};

export const useReactDaraja = () => useContext(darajaAPIProvider);

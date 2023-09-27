import React, { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "..";
import { BusinessShortCode, ContextData, STKPushBody } from "../types";

export const darajaAPIProvider = createContext<ContextData>({
  accessToken: null,
  mode: "development",
  businessShortCode: null,
});

export const ReactDarajaProvider = ({
  children,
  consumerKey,
  consumerSecret,
  mode,
  businessShortCode,
}: {
  children: React.ReactNode;
  consumerKey: string;
  consumerSecret: string;
  mode: "development" | "production";
  businessShortCode: BusinessShortCode;
}) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    let intervalId = 0;

    const init = async () => {
      const { access_token, expires_in } = await initializeApp({
        consumerKey,
        consumerSecret,
      });
      setAccessToken(access_token);

      intervalId = setInterval(async () => {
        const { access_token } = await initializeApp({
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
      }}
    >
      {children}
    </darajaAPIProvider.Provider>
  );
};

export const useReactDaraja = () => useContext(darajaAPIProvider);

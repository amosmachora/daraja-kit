import React, { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "..";
import { ContextData } from "../types";

export const darajaAPIProvider = createContext<ContextData>({
  accessToken: null,
});

export const ReactDarajaProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const init = async () => {
      // TODO fix this
      const { access_token } = await initializeApp(null as any);
      setAccessToken(access_token);
    };

    init();
  }, []);

  return (
    <darajaAPIProvider.Provider
      value={{
        accessToken,
      }}
    >
      {children}
    </darajaAPIProvider.Provider>
  );
};

export const useReactDaraja = () => useContext(darajaAPIProvider);

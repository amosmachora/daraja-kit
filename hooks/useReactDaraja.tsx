import React, { createContext, useState } from "react";
import { ContextData, InitializeAppResponse } from "../types";

export const darajaAPIProvider = createContext<ContextData | null>(null);

export const ReactDarajaProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [initializeAppResponse, setInitializeAppResponse] =
    useState<InitializeAppResponse | null>(null);

  return (
    <darajaAPIProvider.Provider
      value={{
        initializeAppResponse,
        setInitializeAppResponse,
      }}
    >
      {children}
    </darajaAPIProvider.Provider>
  );
};

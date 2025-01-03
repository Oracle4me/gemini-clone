import React from "react";
import ContextProvider from "./context";
import ExtendProvider from "./extend";

const AppProviders = ({ children }) => (
  <ContextProvider>
    <ExtendProvider>{children}</ExtendProvider>
  </ContextProvider>
);

export default AppProviders;

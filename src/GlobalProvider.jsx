import React from "react";
import { GlobalProvider } from './context/GlobalState';
import APP from './app';

const GlobalProviderApp = () => {
  return (
    <GlobalProvider>
      <APP />
    </GlobalProvider>
  );
};

export default GlobalProviderApp;

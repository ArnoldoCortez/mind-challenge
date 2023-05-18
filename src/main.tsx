import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as StoreProvider } from "react-redux";
import Rollbar from "rollbar";
import { Provider as RollbarProvider } from "@rollbar/react";

import App from "./App.tsx";
import { setupStore } from "./store/store.ts";
import CustomThemeProvider from "./theme";

const store = setupStore();

const rollbarConfig = {
  accessToken: import.meta.env.VITE_ROLLBAR_ACCESS_TOKEN,
  environment: "testenv",
};
const rollbar = new Rollbar(rollbarConfig);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RollbarProvider instance={rollbar}>
      <StoreProvider store={store}>
        <CustomThemeProvider>
          <App />
        </CustomThemeProvider>
      </StoreProvider>
    </RollbarProvider>
  </React.StrictMode>
);

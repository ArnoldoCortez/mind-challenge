import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { setupStore } from "./store/store.ts";
import CustomThemeProvider from "./theme";

const store = setupStore();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CustomThemeProvider>
          <App />
        </CustomThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NavigationProvider } from "./context/navigation";
import { Provider } from "react-redux";
import { store } from "./store";
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <Provider store={store}>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </Provider>
);

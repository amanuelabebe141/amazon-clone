import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { DataProvider } from "./DataProvider.jsx";
import { InitialState, Reducer } from "../utils/reducer.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider InitialState={InitialState} Reducer={Reducer}>
      <App />
    </DataProvider>
  </StrictMode>
);

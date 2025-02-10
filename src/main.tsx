import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ReactDOM from "react-dom/client";
import "./App.tsx";
import { RouterProvider, createRouter } from "@tanstack/react-router";

import App from "./App.tsx";
import { routeTree } from "./routeTree.gen";

// biome-ignore lint/style/noNonNullAssertion: Provided by React
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

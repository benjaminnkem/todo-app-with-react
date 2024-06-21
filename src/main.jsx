import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from "sonner";
import "./styles/index.css";
import ModalProvider from "./context/modal-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Toaster richColors />
    <ModalProvider>
      <App />
    </ModalProvider>
  </>
);

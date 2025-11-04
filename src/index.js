import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { initGA } from "./utils/analytics";
import "./index.css";
import App from "./App";

initGA();

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </HelmetProvider>
    </React.StrictMode>
);

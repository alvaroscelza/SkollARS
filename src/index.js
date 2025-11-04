import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App";

const basename = process.env.PUBLIC_URL || "";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <HelmetProvider>
            <BrowserRouter basename={basename}>
                <App />
            </BrowserRouter>
        </HelmetProvider>
    </React.StrictMode>
);

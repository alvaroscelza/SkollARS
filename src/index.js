import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <Header />
        <Home />
        <Footer />
    </React.StrictMode>
);

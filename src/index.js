import React from "react";
import ReactDOM from "react-dom";
import "./assets/custom.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PictureProvaider } from "./context/PictureContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PictureProvaider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PictureProvaider>
);

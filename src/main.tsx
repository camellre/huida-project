import React from "react";
import ReactDOM from "react-dom/client";
import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Root";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

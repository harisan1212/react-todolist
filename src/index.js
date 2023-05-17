import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { TodoProvider } from "./contexts/TodoContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TodoProvider>
      <RouterProvider router={router} />
    </TodoProvider>
  </React.StrictMode>
);

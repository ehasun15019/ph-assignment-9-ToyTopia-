import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { routes } from "./Routes/Routes";
import AuthProvider from "./Context/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer />
    <AuthProvider>
        <RouterProvider router={routes}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);

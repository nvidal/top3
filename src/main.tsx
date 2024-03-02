import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from './App.tsx'
import "./index.css";
import AddTop from "./pages/addTop";
import { Login } from "./pages/Login";
import { Evolution } from "./pages/evolution";
import { Layout } from "./pages/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/addTop",
    element: (
      <Layout>
        <AddTop />
      </Layout>
    ),
  },
  {
    path: "/evolution",
    element: (
      <Layout>
        <Evolution />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

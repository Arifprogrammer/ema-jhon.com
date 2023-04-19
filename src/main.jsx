import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Components/Shop/Shop";
import Order from "./Components/Order/Order";
import loadData from "./Components/CartProductsLoader/cartProductsLoader";
import Signup from "./Components/Signup/Signup";
import Login from "./Login/Login";
import AuthProvider from "./Components/Provider/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/order",
        element: <Order />,
        loader: loadData,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <p className="text-2xl text-center mt-20 text-rose-500">
              I am Checkout
            </p>
          </PrivateRoute>
        ),
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

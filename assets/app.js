// start the Stimulus application
// import './bootstrap';

import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./src/pages/home";
import { Product } from "./src/pages/product";
import { Client } from "./src/pages/client";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/product",
    element: <Product />,
  },

  {
    path: "/client",
    element: <Client />,
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<RouterProvider router={router} />);

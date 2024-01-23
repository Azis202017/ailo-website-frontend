import React from "react";
import ReactDOM from "react-dom/client";
import {
  About,
  Error,
  Landing,
  Events,
  Research,

} from './pages';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement : <Error/>,
    element: <Landing />,
  },
  {
    path: "/about-us",
    element: <About />,
  
  },
  {
    path: "/research-publication",
    element: <Research />,
  },
  {
    path: "/events",
    element: <Events />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

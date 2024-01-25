import React from "react";
import ReactDOM from "react-dom/client";
import {
  About,
  Error,
  Landing,
  Events,
  Research,
  NavbarApp,
  People,
  ContactUs,
} from "./pages";
import './assets/css/global.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <NavbarApp />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/people",
        element: <People />,
      },
      {
        path: "/research-publication",
        element: <Research />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

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
  Patent,
  DetailPeople,
  DetailResearch
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
        children: [
          {
            index: true,
            element: <People />
          },
          {
            path: ":id",
            element: <DetailPeople />
          }

        ]

      },
      {
        path: '/research-area/:id',
        element: <DetailResearch />

      },
      {
        path: "/research-publication",
        children: [
          {
            index: true,
            element: <Research />,
          },
          {
            path: "patent",
            element: <Patent />,


          },


        ]
      },
      {
        path: "/events",
        children: [
          {
            index: true,
            element: <Events />,


          },
          {
            path: ':id',
            element: <EventArea />

          },
        ]
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

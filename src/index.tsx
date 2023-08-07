import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "views/Dashboard";
import Course from "views/course/Course";
import CourseHome from "views/course/CourseHome";
import CourseAnnouncements from "views/course/CourseAnnouncements";
import Announcement from "views/course/Announcement";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

export interface RouteData {
  title: string;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/course",
    element: <Course />,
    loader: () => {
      return {
        title: "MTH-253 Calculus III",
      };
    },
    handle: {
      crumb: (data: RouteData) => <Link to="/course">{data.title}</Link>,
    },
    children: [
      {
        path: "/course",
        element: <CourseHome />,
      },
      {
        path: "/course/announcements",
        loader: () => {
          return {
            title: "Announcements",
          };
        },
        handle: {
          crumb: (data: RouteData) => (
            <Link to="/course/announcements">{data.title}</Link>
          ),
        },
        children: [
          {
            path: "/course/announcements",
            element: <CourseAnnouncements />,
          },
          {
            path: "/course/announcements/:id",
            element: <Announcement />,
            loader: () => {
              return {
                title: "Sample Announcement",
              };
            },
            handle: {
              crumb: (data: RouteData) => (
                <Link to="/course/announcements/1">{data.title}</Link>
              ),
            },
          },
        ],
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

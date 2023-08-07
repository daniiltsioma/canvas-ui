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
    path: "/course/",
    element: <Course />,
    handle: {
      crumb: () => <Link to="/course/">Course</Link>,
    },
    children: [
      {
        path: "/course/",
        element: <CourseHome />,
      },
      {
        path: "/course/announcements/",
        handle: {
          crumb: () => <Link to="/course/announcements/">Announcements</Link>,
        },
        children: [
          {
            path: "/course/announcements/",
            element: <CourseAnnouncements />,
          },
          {
            path: "/course/announcements/:id",
            element: <Announcement />,
            handle: {
              crumb: () => (
                <Link to="/course/announcements/1">Sample Announcement</Link>
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

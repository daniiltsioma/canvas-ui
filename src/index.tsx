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
import {
  CourseData,
  getCurrentCourse,
  getAllCourses,
  announcementsLoader,
  AnnouncementsData,
  announcementLoader,
  AnnouncementData,
} from "utils/courses";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

interface RouteData {
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
        loader: getAllCourses,
      },
    ],
  },
  {
    path: "/course/:courseId",
    element: <Course />,
    loader: getCurrentCourse,
    handle: {
      crumb: (course: CourseData) => (
        <Link to={`/course/${course.id}`}>{course.title}</Link>
      ),
    },
    children: [
      {
        path: "/course/:courseId",
        loader: getCurrentCourse,
        element: <CourseHome />,
      },
      {
        path: "/course/:courseId/announcements",
        loader: getCurrentCourse,
        handle: {
          crumb: (course: CourseData) => (
            <Link to={`/course/${course.id}/announcements`}>Announcements</Link>
          ),
        },
        children: [
          {
            path: "/course/:courseId/announcements",
            element: <CourseAnnouncements />,
            loader: announcementsLoader,
          },
          {
            path: "/course/:courseId/announcements/:announcementId",
            element: <Announcement />,
            loader: announcementLoader,
            handle: {
              crumb: (data: AnnouncementData) => (
                <Link
                  to={`/course/${data.courseId}/announcements/${data.announcementId}`}
                >
                  {data.title}
                </Link>
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

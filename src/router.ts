import { createBrowserRouter } from "react-router";
import Root from "./components/root.tsx";
import Login from "./app/auth/login.tsx";
import Reset from "./app/auth/reset.tsx";
import Layout from "./components/dashboard/layout.tsx";
import Profile from "./app/dashboard/profile.tsx";
import Homework from "./app/dashboard/homework.tsx";
import Logout from "./app/auth/logout.tsx";
import NotFound from "./notfound.tsx";
import Home from "./app/dashboard/home.tsx";
import ExtensionCurriculum from "./app/dashboard/ec.tsx";
import Reading from "./app/dashboard/reading.tsx";
import SubjectSelection from "./app/dashboard/ss.tsx";
import Settings from "./app/dashboard/settings.tsx";
import ILearn from "./app/dashboard/ilearn.tsx";
import Administration from "./app/dashboard/admin.tsx";
import Album from "./app/dashboard/album.tsx";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/auth",
        children: [
          {
            path: "login",
            Component: Login
          },
          {
            path: "logout",
            Component: Logout
          },
          {
            path: "reset",
            Component: Reset
          }
        ]
      },
      {
        path: "dashboard",
        Component: Layout,
        children: [
          {
            path: "",
            Component: Home
          },
          {
            path: "profile",
            Component: Profile
          },
          {
            path: "homework",
            Component: Homework
          },
          {
            path: "ec",
            Component: ExtensionCurriculum
          },
          {
            path: "reading",
            Component: Reading
          },
          {
            path: "ss",
            Component: SubjectSelection
          },
          {
            path: "ilearn",
            Component: ILearn
          },
          {
            path: "settings",
            Component: Settings
          },
          {
            path: "admin",
            Component: Administration
          },
          {
            path: "album",
            Component: Album
          }
        ]
      },
      {
        path: "robots.txt",
      }
    ],
    ErrorBoundary: NotFound
  }
])

export default Router

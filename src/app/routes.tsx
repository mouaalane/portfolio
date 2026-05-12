import { createBrowserRouter } from "react-router";
import Root from "./components/SharedLayout";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import AboutPage from "./components/AboutPage";
import ContactsPage from "./components/ContactsPage";
import CertificationsPage from "./components/CertificationsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "/projects", Component: ProjectsPage },
      { path: "/about", Component: AboutPage },
      { path: "/contacts", Component: ContactsPage },
      { path: "/certifications", Component: CertificationsPage },
    ],
  },
]);

import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import ProjectsPage from "../pages/ProjectsPage";
import AboutPage from "../pages/AboutPage";
import ContactsPage from "../pages/ContactsPage";
import CertificationsPage from "../pages/CertificationsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "/projects", Component: ProjectsPage },
      { path: "/about", Component: AboutPage },
      { path: "/contacts", Component: ContactsPage },
      { path: "/certifications", Component: CertificationsPage },
    ],
  },
]);

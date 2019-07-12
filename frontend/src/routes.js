// Layout Types
import DefaultLayout from "./layouts/Default";

// Route Views
import Home from "./containers/Home";
import AddProject from "./containers/AddProject";
import Project from "./containers/Project";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: Home
  },
  {
    path: "/onboard",
    layout: DefaultLayout,
    component: AddProject
  },
  {
    path: "/projects/:id",
    layout: DefaultLayout,
    component: Project
  },
];
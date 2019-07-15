// Layout Types
import DefaultLayout from "./layouts/Default";

// Route Views
import Home from "./containers/Home";
import AddProject from "./containers/AddProject";
import Project from "./containers/Project";
import Tag from "./containers/Tag";
import Person from "./containers/Person";
import Explore from "./containers/Explore";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: Home
  },
  {
    path: "/explore",
    layout: DefaultLayout,
    component: Explore
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
  {
    path: "/tags/:id",
    layout: DefaultLayout,
    component: Tag
  },
  {
    path: "/people/:id",
    layout: DefaultLayout,
    component: Person
  },
];
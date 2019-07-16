// Layouts
import DefaultLayout from "./layouts/Default";
import MappingDigitalGovLayout from "./layouts/MappingDigitalGovLayout";

// Reporting Views
import Overview from "./containers/reporting/Overview";

// Mapping Digital Gov Views
import Home from "./containers/mapping/Home";
import AddProject from "./containers/mapping/AddProject";
import Project from "./containers/mapping/Project";
import Tag from "./containers/mapping/Tag";
import Person from "./containers/mapping/Person";
import Explore from "./containers/mapping/Explore";

export default [
  {
    path: "/",
    layout: DefaultLayout,
    exact: true,
    component: Overview
  },
  {
    path: "/mapping-digital-gov/",
    layout: MappingDigitalGovLayout,
    component: Home
  },
  {
    path: "/mapping-digital-gov/explore",
    layout: MappingDigitalGovLayout,
    component: Explore
  },
  {
    path: "/mapping-digital-gov/add-project",
    layout: MappingDigitalGovLayout,
    component: AddProject
  },
  {
    path: "/mapping-digital-gov/projects/:id",
    layout: MappingDigitalGovLayout,
    component: Project
  },
  {
    path: "/mapping-digital-gov/tags/:id",
    layout: MappingDigitalGovLayout,
    component: Tag
  },
  {
    path: "/mapping-digital-dov/people/:id",
    layout: MappingDigitalGovLayout,
    component: Person
  },
];
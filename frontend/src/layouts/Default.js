import React from "react";

import Header from "../components/layout/Header";

const DefaultLayout = ({ children }) => (
  <div id="main" >
    <Header />
    {children}
  </div>
);

export default DefaultLayout;
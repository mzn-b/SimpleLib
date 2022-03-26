import React from "react";
import Navbar from "../components/menu-bar/Navbar";

const DefaultView: React.FC<{}> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div id={"content"}>{children}</div>
    </>
  );
};

export default DefaultView;

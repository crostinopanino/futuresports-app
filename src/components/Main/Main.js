import React from "react";
import Results from "./Results";
import Community from "./Community";
import Members from "./Members";
import Sponsors from "./Sponsors";
import Contact from "./Contact";

const Main = () => {
  return (
    <div className="MainSection">
      <Results />
      <Community />
      <Members />
      <Sponsors />
      <Contact />
    </div>
  );
};

export default Main;
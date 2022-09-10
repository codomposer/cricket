import React from "react";
import Home from "./sections/Home";
import MatchList from "./sections/MatchList";
import Result from "./sections/Result";
import WhatWeDo from "./sections/WhatWeDo";
import Team from "./sections/Team";
import Collabration from "./sections/Collabration";
import Ready from "./sections/Ready";
import Client from "./sections/Client";
import Footer from "./sections/Footer";

const Homepage = () => {
  return (
    <div className="bg-main overflow-hidden">
      <Home />
      <MatchList />
      <WhatWeDo />
      <Result />
      <Collabration />
      <Team />
      <Ready />
      <Client />
      <Footer />
    </div>
  );
};

export default Homepage;

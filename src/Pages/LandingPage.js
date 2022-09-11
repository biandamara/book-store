import React from "react";

// import components
import Navigation from "../Layouts/Navigation";
import Jumbotron from "../Layouts/Jumbotron";
import Category from "../Layouts/CategoryBooks";
import Recomended from "../Layouts/Recomended";

function Landing() {
  return (
    <>
      <Navigation />
      <Jumbotron />
      <Category />
      <Recomended />
    </>
  );
}

export default Landing;

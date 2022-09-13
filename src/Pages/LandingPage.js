import React from "react";

// import components
import Navigation from "../Components/Navigation";
import Jumbotron from "../Components/Jumbotron";
import Category from "../Components/CategoryBooks";
import Recomended from "../Components/Recomended";
import Footer from "../Components/Footer";

function Landing() {
  return (
    <>
      <Navigation />
      <Jumbotron />
      <Category />
      {/* <Recomended /> */}
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Landing;

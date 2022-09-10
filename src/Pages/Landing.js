// import components
import Navigation from "../Layouts/Navigation";
import Jumbotron from "../Layouts/Jumbotron";
import Category from "../Layouts/Category";
import Recomended from "../Layouts/Recomended";

function Landing() {
  return (
    <>
      {/* navigation bar */}
      <div>
        <Navigation />
      </div>

      {/* jumbotron */}
      <div>
        <Jumbotron />
      </div>

      {/* category */}
      <div>
        <Category />
        <Recomended />
      </div>
    </>
  );
}

export default Landing;

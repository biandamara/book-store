import React from "react";

// import styles
import "bootstrap/dist/css/bootstrap.min.css";
import css from "../Assets/Styles/Recomended.module.css";

function Recomended() {
  return (
    <>
      {/* container start */}
      <div className="container">
        {/* title start */}
        <div className={`row align-items-center ${css.title}`}>
          <h3 className="col-auto me-auto">Recomended Books for You</h3>
          <h6 className="col-auto">See More</h6>
        </div>
        {/* title end */}

        {/* books bar start */}
        <div className="row">
          {/* book 01 start */}
          <div className="col"></div>
          {/* book 01 end */}

          {/* book 02 start */}
          <div className="col"></div>
          {/* book 02 end */}

          {/* book 03 start */}
          <div className="col"></div>
          {/* book 03 end */}

          {/* book 04 start */}
          <div className="col"></div>
          {/* book 04 end */}

          {/* book 05 start */}
          <div className="col"></div>
          {/* book 05 end */}

          {/* book 06 start */}
          <div className="col"></div>
          {/* book 06 end */}
        </div>
        {/* books bar end */}
      </div>
      {/* container end */}
    </>
  );
}

export default Recomended;

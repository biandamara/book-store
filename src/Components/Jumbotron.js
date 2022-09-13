import React from "react";

// import assets
import Wave from "../Assets/Images/wave.svg";
import People from "../Assets/Images/group-people.png";

// import styles
import css from "../Assets/Styles/Jumbotron.module.css";

function Jumbotron() {
  return (
    <>
      <div>
        {/* background start */}
        <div className={css.backgorund}>
          <div className={css.top}></div>
          <img className={css.wave} src={Wave} alt="wave" />
        </div>
        {/* background end */}

        {/* jumbotron start */}
        <div className="container">
          <div className={`row align-items-center ${css.jumbotron}`}>
            {/* quotes start */}
            <div className="col d-flex justify-content-center">
              <div className={`container row ${css.quotes}`}>
                <div
                  className="p-2 text-end"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <h2>“A room without books is like a body without a soul.”</h2>
                  <p>― Marcus Tullius Cicero</p>
                </div>

                <div
                  className="p-2 text-end"
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                >
                  <h2>
                    “Good friends, good books, and a sleepy conscience: this is
                    the ideal life.”
                  </h2>
                  <p>― Mark Twain</p>
                </div>
              </div>
            </div>
            {/* quotes end */}

            {/* image start */}
            <div className="col d-flex justify-content-center">
              <img className={css.people} src={People} alt="pople" />
            </div>
            {/* image end */}
          </div>
        </div>
        {/* jumbotron end */}
      </div>
    </>
  );
}

export default Jumbotron;

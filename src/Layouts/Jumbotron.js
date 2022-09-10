import React from "react";

// import assets
import Wave from "../Assets/Images/wave.svg";
import People from "../Assets/Images/group-people.png";

// import styles
import css from "../Assets/Styles/Jumbotron.module.css";

function Jumbotron() {
  return (
    <>
      <div className={css.posisiton}>
        {/* background start */}
        <div className={css.backgorund}>
          <div className={css.top}></div>
          <img className={css.wave} src={Wave} alt="wave" />
        </div>
        {/* background end */}

        {/* jumbotron start */}
        <div className="container">
          <div className={`row align-items-center ${css.jumbotron}`}>
            <div className="col d-flex justify-content-center">
              {/* quotes start */}
              <div className="container row">
                <div className="p-2 text-end">
                  <h2>“A room without books is like a body without a soul.”</h2>
                  <p>― Marcus Tullius Cicero</p>
                </div>
                <div className="p-2 text-end">
                  <h2>
                    “Good friends, good books, and a sleepy conscience: this is
                    the ideal life.”
                  </h2>
                  <p>― Mark Twain</p>
                </div>
              </div>
              {/* quotes end */}
            </div>
            <div className="col d-flex justify-content-center">
              <img className={css.people} src={People} alt="pople" />
            </div>
          </div>
        </div>

        {/* jumbotron end */}
      </div>
    </>
  );
}

export default Jumbotron;

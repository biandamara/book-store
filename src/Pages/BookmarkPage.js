import React from "react";

// import component
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";

// import styles
import css from "../Assets/Styles/BookmarkPage.module.css";

function Bookmark() {
  return (
    <>
      {/* navigation bar start */}
      <Navigation />
      {/* navigation bar end */}

      {/* favorite book start */}
      <div className={`container ${css.container}`}>
        <h3>Your Favorite Book</h3>
      </div>
      {/* favorite book end */}

      {/* footer start*/}
      <Footer />
      {/* footer end*/}
    </>
  );
}

export default Bookmark;

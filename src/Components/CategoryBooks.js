import React from "react";
import AOS from "aos";

// import assets
import Business from "../Assets/Images/business.png";
import Finance from "../Assets/Images/finance.png";
import Mindfulness from "../Assets/Images/mindfulness.png";
import Politics from "../Assets/Images/politics.png";
import Productivity from "../Assets/Images/productivity.png";
import ScienceFiction from "../Assets/Images/science-fiction.png";
import Technology from "../Assets/Images/technology.png";
import Design from "../Assets/Images/design.png";

// import styles
import "aos/dist/aos.css";
import css from "../Assets/Styles/CategoryBook.module.css";

function Category() {
  return (
    <>
      {/* category books container */}
      <div className="container">
        {/* title categoty books */}
        <h3 className={css.title}>Category Books</h3>

        {/* icon category books start */}
        <div
          className={`row row-cols-4 justify-content-center text-center ${css.imgrow}`}
        >
          <div
            className="col"
            data-aos="fade-right"
            data-aos-duration="1000"
            href="/"
          >
            <img src={Mindfulness} alt="mindfulness"></img>
            <p>Happiness & Mindfulness</p>
          </div>

          <div
            className="col"
            data-aos="fade-right"
            data-aos-duration="2000"
            href="/"
          >
            <img src={Business} alt="business"></img>
            <p>Career & Business</p>
          </div>

          <div
            className="col"
            data-aos="fade-left"
            data-aos-duration="2000"
            href="/"
          >
            <img src={Productivity} alt="productivity"></img>
            <p>Productivity & Time Management</p>
          </div>

          <div
            className="col"
            data-aos="fade-left"
            data-aos-duration="1000"
            href="/"
          >
            <img src={Politics} alt="politics"></img>
            <p>Society & Politics</p>
          </div>

          <div
            className="col"
            data-aos="fade-right"
            data-aos-duration="1000"
            href="/"
          >
            <img src={Finance} alt="finance"></img>
            <p>Investment & Finance</p>
          </div>

          <div
            className="col"
            data-aos="fade-right"
            data-aos-duration="2000"
            href="/"
          >
            <img src={Design} alt="Design"></img>
            <p>Art & Design</p>
          </div>

          <div
            className="col"
            data-aos="fade-left"
            data-aos-duration="2000"
            alt="Design"
            href="/"
          >
            <img src={ScienceFiction} alt="science-fiction"></img>
            <p>Science & Fiction</p>
          </div>

          <div
            className="col"
            data-aos="fade-left"
            data-aos-duration="1000"
            alt="Design"
            href="/"
          >
            <img src={Technology} alt="technology"></img>
            <p>Technology</p>
          </div>
        </div>
        {/* icon category books start */}
      </div>
    </>
  );
}

AOS.init();
export default Category;

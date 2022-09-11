import { React, useEffect } from "react";
import axios from "axios";

// import component
import Navigation from "../Layouts/Navigation";
import CategoryMenus from "../Layouts/CategoryMenus";

// import styles
import css from "../Assets/Styles/CategoryPage.module.css";

function Category() {
  const getData = () => {
    axios
      .get(
        "https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories"
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navigation />
      <div className="container">
        <div className="row">
          <div className={`col-2 ${css.top}`}>
            <CategoryMenus />
          </div>
          <div className="col"></div>
        </div>
      </div>

      <button onClick={getData}>Click</button>
    </>
  );
}

export default Category;

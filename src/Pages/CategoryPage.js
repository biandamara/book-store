import { useEffect, useState } from "react";
import axios from "axios";

// import components
import Navigation from "../Components/Navigation";
import CategoryMenus from "../Components/CategoryMenus";
import Footer from "../Components/Footer";

// import styles
import css from "../Assets/Styles/CategoryPage.module.css";

function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
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
  }, []);

  return (
    <>
      <Navigation />
      <div className="container">
        <div className="row">
          {/* menu categories start */}
          <div className={`col-2 ${css.top}`}>
            <CategoryMenus />
          </div>
          {/* menu categories end */}

          <div className="col"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Category;

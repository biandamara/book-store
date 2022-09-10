import React from "react";
import { Container, Row, Col } from "reactstrap";

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
import "bootstrap/dist/css/bootstrap.min.css";
import css from "../Assets/Styles/Category.module.css";

function Category() {
  return (
    <>
      {/* category books container */}
      <div className="container">
        {/* title categoty books */}
        <div>
          <h3 className={css.title}>Category Books</h3>
        </div>

        {/* icon category books start */}
        <Container className="text-center">
          <Row
            className={`justify-content-center ${css.row}`}
            md="4"
            sm="2"
            xs="1"
          >
            <Col href="">
              <img src={Mindfulness} alt="mindfulness"></img>
              <p>Happiness & Mindfulness</p>
            </Col>

            <Col href="">
              <img src={Business} alt="business"></img>
              <p>Career & Business</p>
            </Col>

            <Col href="">
              <img src={Productivity} alt="productivity"></img>
              <p>Productivity & Time Management</p>
            </Col>

            <Col href="">
              <img src={Politics} alt="politics"></img>
              <p>Society & Politics</p>
            </Col>

            <Col href="">
              <img src={Finance} alt="finance"></img>
              <p>Investment & Finance</p>
            </Col>

            <Col href="">
              <img src={Design} alt="Design"></img>
              <p>Art & Design</p>
            </Col>

            <Col href="">
              <img src={ScienceFiction} alt="science-fiction"></img>
              <p>Science & Fiction</p>
            </Col>

            <Col href="">
              <img src={Technology} alt="technology"></img>
              <p>Technology</p>
            </Col>
          </Row>
        </Container>

        {/* icon category books start */}
      </div>
    </>
  );
}

export default Category;

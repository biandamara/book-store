import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";

// import assets
import HappinessImg from "../../Assets/Books/days-of-happiness.jpeg";

// import styles
import css from "../../Assets/Styles/Book.module.css";

function HappinessBook() {
  return (
    <>
      <Card className={css.card} body outline>
        <img src={HappinessImg} alt="Business" />
        <CardBody>
          <CardTitle tag="h6">Days of Happiness</CardTitle>
          <CardSubtitle className={`mb-2 text-muted ${css.category}`}>
            Business
          </CardSubtitle>
          <CardText c>
            <p className={css.headlight}>Rp100.000</p>
            <p className={css.disable}>Rp200.000</p>
          </CardText>
        </CardBody>
      </Card>
    </>
  );
}

export default HappinessBook;

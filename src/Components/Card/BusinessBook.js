import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";

// import assets
import BusinessImg from "../../Assets/Books/great-at-work.jpeg";

// import styles
import css from "../../Assets/Styles/Book.module.css";

function BusinessBook() {
  return (
    <>
      <Card className={css.card} body outline>
        <img src={BusinessImg} alt="Business" />
        <CardBody>
          <CardTitle tag="h6">Great at Work</CardTitle>
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

export default BusinessBook;

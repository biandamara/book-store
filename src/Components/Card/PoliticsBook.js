import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";

// import assets
import PoloticsImg from "../../Assets/Books/dasar-ilmu-politik.jpeg";

// import styles
import css from "../../Assets/Styles/Book.module.css";

function PoloticsBook() {
  return (
    <>
      <Card className={css.card} body outline>
        <img src={PoloticsImg} alt="Business" />
        <CardBody>
          <CardTitle tag="h6">Dasar Ilmu Politik</CardTitle>
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

export default PoloticsBook;

import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";

// import assets
import FinanceImg from "../../Assets/Books/investment-for-millenials.jpeg";

// import styles
import css from "../../Assets/Styles/Book.module.css";

function FinanceBook() {
  return (
    <>
      <Card className={css.card} body outline>
        <img src={FinanceImg} alt="Business" />
        <CardBody>
          <CardTitle tag="h6">Investment For Millenials</CardTitle>
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

export default FinanceBook;

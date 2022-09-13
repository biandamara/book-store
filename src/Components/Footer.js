// import assets
import FacebookIcon from "../Assets/Images/facebook.png";
import TwitterIcon from "../Assets/Images/twitter.png";
import InstagramIcon from "../Assets/Images/instagram.png";

// import styles
import "bootstrap/dist/css/bootstrap.min.css";
import css from "../Assets/Styles/Footer.module.css";

function Footer() {
  return (
    <>
      <div className={css.container}>
        <div className="container">
          <div className="row align-items-center">
            {/* title start */}
            <div className="col d-flex justify-content-start">
              <p>
                © 2022 Copyright <b>Online Book Store</b>. All Rights Reserved.
              </p>
            </div>
            {/* title end */}

            {/* social media start */}
            <div className={`col d-flex justify-content-end ${css.icon}`}>
              <img src={FacebookIcon}></img>
              <img src={TwitterIcon}></img>
              <img src={InstagramIcon}></img>
            </div>
            {/* social media end */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

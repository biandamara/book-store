import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

// import components
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";

// import styles
import css from "../Assets/Styles/Login.module.css";

function LoginPage() {
  return (
    <>
      <div className={css.container}>
        {/* navigation bar start*/}
        <Navigation />
        {/* navigation bar end */}

        {/* login start */}
        <div className="container">
          <MDBContainer fluid className="p-3 my-5">
            <MDBRow>
              <MDBCol col="10" md="6">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  class="img-fluid"
                  alt="Phone image"
                />
              </MDBCol>

              <MDBCol col="4" md="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="formControlLg"
                  type="email"
                  size="lg"
                />

                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                />

                <div className="d-flex justify-content-between mx-4 mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Remember me"
                  />
                  <a href="!#">Forgot password?</a>
                </div>

                <MDBBtn className="mb-4 w-100" size="lg">
                  Login
                </MDBBtn>

                <div>
                  <p className="small fw-bold pt-1 mb-4">
                    Don't have an account?{" "}
                    <a href="/register" className="link-danger">
                      Register
                    </a>
                  </p>
                </div>

                <hr />

                <div className="divider d-flex justify-content-center align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">OR</p>
                </div>

                <MDBBtn
                  className="mb-4 w-100"
                  size="lg"
                  style={{ backgroundColor: "#3b5998" }}
                >
                  <MDBIcon fab icon="facebook-f" className="mx-2" />
                  Continue with facebook
                </MDBBtn>

                <MDBBtn
                  className="mb-4 w-100"
                  size="lg"
                  style={{ backgroundColor: "#55acee" }}
                >
                  <MDBIcon fab icon="twitter" className="mx-2" />
                  Continue with twitter
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        {/* login end*/}

        {/* footer start */}
        <Footer />
        {/* footer end */}
      </div>
    </>
  );
}

export default LoginPage;

import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox,
} from "mdb-react-ui-kit";

// import components
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";

// import assets
import signup from "../Assets/Images/signup.png";

// import styles
import css from "../Assets/Styles/Register.module.css";

function RegisterPage() {
  return (
    <>
      <div className={css.container}>
        {/* navigation bar start*/}
        <Navigation />
        {/* navigation bar end */}

        {/* register start */}
        <div className="container">
          <MDBContainer fluid className="my-5">
            <MDBRow className="g-0 align-items-center">
              <MDBCol col="6">
                <MDBCard
                  className={`my-5 ${css.cascadingright}`}
                  style={{
                    background: "hsla(0, 0%, 100%, 0.55)",
                    backdropFilter: "blur(30px)",
                  }}
                >
                  <MDBCardBody className="p-5 shadow-5 text-center">
                    <MDBRow>
                      <MDBCol col="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="First name"
                          id="form1"
                          type="text"
                        />
                      </MDBCol>

                      <MDBCol col="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Last name"
                          id="form2"
                          type="text"
                        />
                      </MDBCol>
                    </MDBRow>

                    <MDBInput
                      wrapperClass="mb-4"
                      label="Email"
                      id="form3"
                      type="email"
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Password"
                      id="form4"
                      type="password"
                    />

                    <div className="d-flex justify-content-center mb-4">
                      <MDBCheckbox
                        name="flexCheck"
                        value=""
                        id="flexCheckDefault"
                        label="Subscribe to our newsletter"
                      />
                    </div>

                    <MDBBtn className="w-100 mb-4" size="lg">
                      sign up
                    </MDBBtn>

                    <hr />

                    <div className="text-center">
                      <p>or sign up with:</p>

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
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol col="6">
                <img
                  src={signup}
                  class="w-100 rounded-4 shadow-4"
                  alt=""
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        {/* register end */}

        {/* footer start */}
        <Footer />
        {/* footer end */}
      </div>
    </>
  );
}

export default RegisterPage;

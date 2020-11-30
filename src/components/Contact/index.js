import React from "react";
import {
  MDBMask,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
} from "mdbreact";
import { ReactComponent as ContactImage } from "../../images/contact.svg";
const Contact = () => {
  return (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBMask
            overlay="black"
            className="flex-center flex-row black-text text-left"
          >
            <MDBCol>
              <MDBCol md="10" className="ml-5">
                <form className="needs-validation" novalidate>
                  <p className="h4 text-center mb-4">Keep in touch</p>
                  <label
                    htmlFor="validationCustom01"
                    className="black-text font-weight-bold"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="validationCustom01"
                    className="form-control"
                    required
                  />
                  <br />
                  <label
                    htmlFor="defaultFormContactEmailEx"
                    className="black-text font-weight-bold"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="defaultFormContactEmailEx"
                    className="form-control"
                    required
                  />
                  <br />
                  <label
                    htmlFor="defaultFormContactSubjectEx"
                    className="black-text font-weight-bold"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="defaultFormContactSubjectEx"
                    className="form-control font-weight-bold"
                  />
                  <br />
                  <label
                    htmlFor="defaultFormContactMessageEx"
                    className="black-text font-weight-bold"
                    required
                  >
                    Message
                  </label>
                  <textarea
                    type="text"
                    id="defaultFormContactMessageEx"
                    className="form-control"
                    rows="3"
                  />
                  <div className="text-center mt-4">
                    <MDBBtn
                      color="black font-weight-bold"
                      outline
                      type="submit"
                      className="waves-effect"
                      aria-hidden="true"
                    >
                      Send
                      <MDBIcon far icon="paper-plane" className="ml-2" />
                    </MDBBtn>
                  </div>
                </form>
              </MDBCol>
            </MDBCol>
            <MDBCol>
              <ContactImage
                className="img-fluid"
                style={{
                  float: "right",
                  width: "100%",
                }}
              />
            </MDBCol>
          </MDBMask>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Contact;

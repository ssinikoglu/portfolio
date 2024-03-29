import React, { useState } from "react";
import {
  MDBMask,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon
} from "mdbreact";
import { ReactComponent as ContactImage } from "../../images/contact.svg";
import "./index.css";

// Converts object to proper form data(string)
const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Contact = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => setFormValue({ [e.target.name]: e.target.value });

  const handleSubmit = (e) => {

    fetch("/", {
      method: "POST",
      "data-netlify": "true",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formValue }),
    })
      .then(() => {
        alert("Thanks for messaging!");
        setFormValue({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBMask
            overlay="grey-light"
            className="flex-center flex-row black-text text-left"
          >
            <MDBCol>
              <MDBCol md="10" className="ml-5">
                <form
                  className="needs-validation"
                  onSubmit={handleSubmit}
                  name="contact"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  netlify
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <h2 className="text-center mb-4 contactForm__title">
                    <strong>
                      <b>Keep in touch</b>
                    </strong>
                  </h2>
                  <label
                    htmlFor="validationCustom01"
                    className="black-text font-weight-bold contactForm__label"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="validationCustom01"
                    className="form-control"
                    name="name"
                    value={formValue.name}
                    onChange={handleChange}
                    required
                  />
                  <br />
                  <label
                    htmlFor="defaultFormContactEmailEx"
                    className="black-text font-weight-bold contactForm__label"
                  >
                    E-mail:
                  </label>
                  <input
                    type="email"
                    id="defaultFormContactEmailEx"
                    className="form-control"
                    value={formValue.email}
                    onChange={handleChange}
                    name="email"
                    required
                  />
                  <br />
                  <label
                    htmlFor="defaultFormContactSubjectEx"
                    className="black-text font-weight-bold contactForm__label"
                  >
                    Subject:
                  </label>
                  <input
                    type="text"
                    id="defaultFormContactSubjectEx"
                    className="form-control"
                    value={formValue.subject}
                    onChange={handleChange}
                    name="subject"
                  />
                  <br />
                  <label
                    htmlFor="defaultFormContactMessageEx"
                    className="black-text font-weight-bold contactForm__label"
                  >
                    Message:
                  </label>
                  <textarea
                    type="text"
                    id="defaultFormContactMessageEx"
                    className="form-control"
                    rows="4"
                    name="message"
                    value={formValue.message}
                    onChange={handleChange}
                    required
                  />
                  <br />
                  <div className="text-center mt-2">
                    <MDBBtn
                      color="black font-weight-bold"
                      outline
                      type="submit"
                      className="btn-block waves-effect contactForm__button"
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
                className="img-fluid mt-3 mb-5"
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

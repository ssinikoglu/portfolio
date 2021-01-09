import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import { MDBIcon, MDBMask, MDBRow, MDBCol, MDBContainer } from "mdbreact";
import { ReactComponent as AboutMeImage } from "../../images/about.svg";

const AboutMe = () => {
  return (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBMask
            overlay="grey-light"
            className="flex-center flex-row black-text text-left"
          >
            <MDBCol>
              <MDBCol className="ml-5">
                <div className="text-center aboutMeTitle">
                  <h2>
                    <strong>Hi there, I’m Sule Sinikoglu</strong>
                  </h2>
                </div>
                <div className=" m-4 text-md-center aboutMeText">
                  <p className="mb-3">
                    I'm a Front end Developer and curious about how I can
                    develop well-designed, and high-quality websites and
                    applications. My vision is to make a positive impact on my
                    code and also share my experience and support the ones who
                    want to be developers as much as I can.{" "}
                  </p>
                  <p>
                    My educational background differs from my current role since
                    I want to create a career that consists of design and tech
                    together. That's why starting <b>Re: Coded </b>
                    has become a milestone for me. I'm continuing on this long
                    journey by taking sustainable steps.
                  </p>
                </div>
                <div className="text-center mt-5">
                  <a
                    href="https://drive.google.com/file/d/10vV58OtDcJF1J2lxSotvEs4CnHDSk2fD/view?usp=sharing"
                    target="_blank"
                    download
                    className="downloadLink"
                    rel="noreferrer"
                  >
                    <b>RESUME</b>

                    <MDBIcon
                      icon="fas fa-file-download"
                      className="ml-3"
                      size="1x"
                    />
                  </a>
                </div>
              </MDBCol>
            </MDBCol>
            <MDBCol>
              <AboutMeImage
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
export default AboutMe;

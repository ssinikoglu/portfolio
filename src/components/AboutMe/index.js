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
            overlay="black"
            className="flex-center flex-row black-text text-left"
          >
            <MDBCol>
              <MDBCol className="ml-5">
                <div className="mb-3 text-center">
                  <h2>
                    <strong>Hi there, I’m Sule Sinikoglu</strong>
                  </h2>
                </div>
                <p className="text-md-center">
                  I'm a Front end Developer and curious about how I can develop
                  well-designed, and high-quality websites and applications. My
                  vision is to make a positive impact on my code and also share
                  my experience and support the ones who want to be developers
                  as much as I can. My educational background differs from my
                  current role since I want to create a career that consists of
                  design and tech together. That's why starting <b>Re: Coded</b>{" "}
                  has become a milestone for me. I'm continuing on this long
                  journey by taking sustainable steps.
                </p>
                <div className="text-center mt-5">
                  <a
                    href="https://cutt.ly/0hjT6a8"
                    target="_blank"
                    download
                    className="downloadLink"
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
                  width: "500px",
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

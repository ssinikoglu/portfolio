import React from "react";
import { MDBMask, MDBIcon, MDBRow, MDBCol, MDBContainer } from "mdbreact";
import { ReactComponent as HomeImage } from "../../images/home.svg";
import "./index.css";

const Home = () => {
  return (
      <MDBContainer className="homePage">
        <MDBRow>
          <MDBMask
            overlay="black"
            className="flex-center flex-row black-text text-left"
          >
            <MDBCol className="homePage__textCol">
              <h1>
                <strong>Sule Sinikoglu</strong>
              </h1>
              <h2>FRONT END WEB DEVELOPER</h2>
              <h3>Based in Istanbul</h3>
              <h4>ssinikoglu@gmail.com</h4>
              <div>
                <a
                  className="btn-floating github-ic"
                  href="https://github.com/ssinikoglu"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MDBIcon
                    fab
                    icon="github"
                    size="3x"
                    className="black-text pr-3"
                  />
                </a>
                <a
                  className="btn-floating linkedin-ic mr-3"
                  href="https://www.linkedin.com/in/sulesinikoglu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MDBIcon
                    fab
                    icon="linkedin"
                    size="3x"
                    className="black-text pr-3"
                  />
                </a>
              </div>
            </MDBCol>
            <MDBCol className="homePage__illustrationCol">
              <HomeImage className="homePage__illustrationCol--homePageImage" />
            </MDBCol>
          </MDBMask>
        </MDBRow>
      </MDBContainer>
  );
};

export default Home;

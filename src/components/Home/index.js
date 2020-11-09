import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {MDBMask,MDBView,MDBIcon,MDBRow,MDBCol,MDBContainer} from "mdbreact";
import  {ReactComponent as HomeImage} from "../images/home.svg";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Home =()=> {
    return (
      <>
        <MDBView src="https://images.unsplash.com/photo-1521193089946-7aa29d1fe776?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80">
          <Navbar />
          <MDBContainer>
            <MDBRow>
              <MDBMask
                overlay="black"
                className="flex-center flex-row black-text text-left"
              >
                <MDBCol md="8">
                  <h1>Sule Sinikoglu</h1>
                  <h2>FRONT END WEB DEVELOPER</h2>
                  <h3>Based in Istanbul</h3>
                  <h4>ssinikoglu@gmail.com</h4>
                  <div>
                    <a
                      href="https://github.com/ssinikoglu"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <MDBIcon
                        fab
                        icon="github"
                        size="3x"
                        className="black-text pr-3"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sulesinikoglu/"
                      rel="noopener noreferrer"
                      target="_blank"
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
              </MDBMask>
              <MDBMask
                overlay="black"
                className="flex-center flex-row blue-grey-text text-left"
              >
                <MDBCol md="12" lg="6" style={{ alignContent: "start" }}>
                  <HomeImage className="img-fluid" style={{ "margin-left":"10rem", float:"right", width: "650px" }} />
                </MDBCol>
              </MDBMask>
            </MDBRow>
          </MDBContainer>
        </MDBView>
        <Footer />
      </>
    );
}

export default Home;








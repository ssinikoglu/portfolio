import React from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBView,
  MDBIcon,
  MDBMask,
} from "mdbreact";
import data from "../data.js";

const Projects = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBMask
          overlay="black"
          className="flex-center flex-row black-text text-left"
        >
          <div className="card-deck mr-5 ml-5 mt-5">
            {data.map((project) => {
              return (
                <MDBCol md="4">
                  <MDBCard wide>
                    <MDBView>
                      <MDBCardImage
                        hover
                        overlay="black-slight"
                        className="card-img-top"
                        src={project.picture}
                        alt="Project"
                        width="100%"
                      />
                    </MDBView>

                    <MDBCardBody className="text-center">
                      <MDBCardTitle className="card-title text-center">
                        <strong>{project.name}</strong>
                      </MDBCardTitle>
                      <MDBCardText className="card-text mt-2 ml-2">
                        {project.desc}
                      </MDBCardText>
                      <MDBCardText>
                        <b>Technologies: </b>
                        {project.tech}
                      </MDBCardText>
                      <MDBCol md="12" className="d-flex justify-content-center pt-3">
                        <a
                          className="btn-floating github-ic mr-3 waves-effect"
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <MDBIcon
                            fab
                            icon="github"
                            size="2x"
                            className="black-text pr-3"
                          />
                        </a>
                        <a
                          className="btn-floating mr-3 waves-effect"
                          target="_blank"
                          rel="noreferrer"
                          href={project.demo}
                        >
                          <MDBIcon
                            className="fas fa-link black-text"
                            size="2x"
                          />
                        </a>
                      </MDBCol>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              );
            })}
            ;
          </div>
        </MDBMask>
      </MDBRow>
    </MDBContainer>
  );
};

export default Projects;

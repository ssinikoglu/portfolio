import React from "react";
import { MDBContainer, MDBRow, MDBIcon, MDBMask } from "mdbreact";
import data from "../data.js";

const Projects = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBMask
          overlay="black"
          className="flex-center flex-row black-text text-left"
        >
          <div className="card-deck mr-5 ml-5">
            {data.map((project) => {
              return (
                <div className="card mb-4">
                  <div className="view overlay">
                    <img
                      className="card-img-top"
                      src={project.picture}
                      alt="Project"
                    />
                    <a href="#!">
                      <div className="mask rgba-white-slight" />
                    </a>
                    <div className="card-body">
                      <h4 className="card-title text-center">{project.name}</h4>
                      <p className="card-text mt-2 ml-2">{project.desc}</p>
                      <p className="card-text mt-2 ml-2">
                        <b>Technologies: </b>
                        {project.tech}
                      </p>
                      <div className="text-center mt-2 flex-end">
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
                      </div>
                    </div>
                  </div>
                </div>
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

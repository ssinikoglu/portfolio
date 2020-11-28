import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBIcon,
} from "mdbreact";
class Navbar extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar
        color="transparent"
        fixed="top"
        dark
        expand="md"
        scrolling
        transparent
      >
        <MDBNavbarToggler onClick={this.toggleCollapse} className="black" />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem active>
              <MDBNavLink to="/">
                <strong
                  className="black-text pr-4 waves-effect"
                  aria-hidden="true"
                >
                  Home
                </strong>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/about">
                <b className="black-text pr-4 waves-effect">About</b>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/projects">
                <b className="black-text pr-4 waves-effect">Projects</b>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/contact">
                <b className="black-text pr-4 waves-effect">Contact</b>
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right className="social-media-icons waves-effect">
            <MDBNavItem>
              <a
                href="https://github.com/ssinikoglu"
                target="_blank"
                rel="noreferrer"
              >
                <MDBIcon
                  fab
                  icon="github"
                  size="2x"
                  className="black-text pr-4"
                />
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a
                href="https://www.linkedin.com/in/sulesinikoglu/"
                target="_blank"
                rel="noreferrer"
              >
                <MDBIcon
                  fab
                  icon="linkedin"
                  size="2x"
                  className="black-text pr-4"
                />
              </a>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}
export default Navbar;

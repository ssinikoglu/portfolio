import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="transparent" className="font-small pt-4 mt-4">
      <div className="footer-copyright black-text text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="#" className="black-text"> Sule Sinikoglu </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;

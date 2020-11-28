import React from "react";
import { MDBContainer, MDBFooter} from "mdbreact";

const Footer = () => {
  return (
      <MDBFooter className="transparent font-small">
        <div className="footer-copyright black-text text-center py-3">
          <MDBContainer>
          &copy; {new Date().getFullYear()} Copyright:

            <a href="#!" className="black-text ml-1">
              Sule Sinikoglu
            </a>
          </MDBContainer>
        </div>
      </MDBFooter>
  );
};

export default Footer;
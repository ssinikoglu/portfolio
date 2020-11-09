import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer} from "mdbreact";
import Navbar from "../Navbar";
import Footer from "../Footer";

const About=()=>{
return (
  <>
    <Navbar />
    <MDBContainer>
      <h2>Hi there I’m Sule Sinikoglu</h2>
      <p>I'm a Front end Developer and curious about how I can develop
      well-designed, and high-quality websites and applications. My vision is to
      make a positive impact on my code and also share my experience and support
      the ones who want to be developers as much as I can. My educational
      background differs from my current role since I want to create a career
      that consists of design and tech together. That's why starting RE: Coded
      has become a milestone for me. I'm continuing on this long journey by
      taking sustainable and confident steps.</p>
    </MDBContainer>
    <Footer />
  </>
);
}
export default About
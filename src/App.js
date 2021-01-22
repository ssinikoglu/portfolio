import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AboutPage from "./containers/AboutPage";
import Navbar from "./components/Navbar";
import { MDBView } from "mdbreact";
import backgroundImage from "./images/backgroundImage.jpeg";
import "./App.css";
import ReactGA from "react-ga";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-5Y2M5K0CRM");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Router className="App">
      <Route path="/" component={Navbar} />
      <MDBView src={backgroundImage} className="img-fluid">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
      </MDBView>
    </Router>
  );
}

export default App;
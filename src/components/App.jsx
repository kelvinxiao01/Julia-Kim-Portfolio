import React from "react";
import "./App.css";
import Navigation from "./Navigation.jsx";
import { Container, Row, Col } from "react-bootstrap";
import Projcover from "./Projcover.jsx";
import unfoundcover from "./images/unfoundcover.png";
import amazoncover from "./images/amazon cover pic.png";
import venmocover from "./images/venmo cover pic.png";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Unfound from "./Unfound.jsx";
import Amazon from "./Amazon.jsx";
import Venmo from "./Venmo.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Footer from "./Footer.jsx";

library.add(fab);

function App() {
  return (
    <div className="App">
      <section id="Navigation">
        <Navigation />
      </section>
      <section id="home">
        <Container>
          <Row>
            <Col className="home-col">
              <h1>Julia Kim</h1> <br />
              <p>
                I'm an aspiring UI/UX designer for web and mobile interfaces. I
                love creative and minimalist designs.
              </p>
            </Col>
            <Col className="home-col">
              <p>
                Currently, I'm a UI/UX intern at the Metropolitan Transportation
                Authority (MTA) for the TrainTime App. I inspect user stories
                and design solutions to them. I also design the layout of the
                quarterly employee newsletter and posters for any events hosted
                by MTA IT.
              </p>
            </Col>
          </Row>
          <p className="home-footer">scroll to see my projects :)</p>
        </Container>
      </section>
      <section id="projects">
        <Projcover
          bgColor="#F19968"
          dest="/unfound"
          img={unfoundcover}
          header="Unfound App Redesign"
          desc="Redesign A startup app I worked for. Redesigning their filter system, feed, and profile page.
            "
        ></Projcover>

        <Projcover
          bgColor="#B3DDAF"
          dest="/amazon"
          img={amazoncover}
          header="Amazon KDP Redirect"
          desc="Redirect Making the Amazon KDP self-publishing feature more user- friendly.
          "
        ></Projcover>

        <Projcover
          bgColor="#3B6698"
          dest="/venmo"
          img={venmocover}
          header="Venmo - Split the Bill"
          desc="A personal project designing a new feature for Venmo."
        ></Projcover>
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;

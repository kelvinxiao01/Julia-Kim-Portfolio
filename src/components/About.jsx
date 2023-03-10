import React from "react";
import "./App.css";
import Navigation from "./Navigation.jsx";
import { Container, Row, Col } from "react-bootstrap";
import juliapic from "./images/julia pic.jpg";
import Contactform from "./Contactform.jsx";
import Footer from "./Footer.jsx";

function About() {
  return (
    <div className="aboutpage">
      <Navigation></Navigation>
      <h1 className="aboutheader">About me, Julia!</h1>
      <section id="aboutcontent">
        <Container>
          <Row className="about-row">
            <Col className="about-col">
              <img src={juliapic} className="aboutpic" alt="Picture of me!" />
            </Col>
            <Col className="about-col">
              <p className="about-p">
                I’m a senior studying Integrated Digital and Design Media at NYU
                and I am interested in UI/UX design. I love design and I hope to
                create impactful and helpful work during my career. I chose
                UI/UX because I want to learn about how users interact with
                products and different designs. I want to make designs people
                will find ease in using and will appreciate.
              </p>

              <p className="about-p">
                In my free time I love to cook & bake, hike, and do puzzles!
              </p>

              <p className="about-p">
                I’ve worked in marketing, animation, and branding and have
                experience in programs like Figma and Adobe Creative Cloud.
              </p>

              <p className="about-p">
                Currently I am a UI/ UX Intern at the MTA for the TrainTime App.
                I inspect user stories and design solutions to them. I also
                design the layout of the quarterly employee newsletter and
                posters for any events hosted by MTA IT.
              </p>

              <p className="about-p">
                This website was created by Kelvin Xiao, an aspiring web
                developer.
                <a href="https://kelvinx.dev/">Check out his site!</a>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="contactme">
        <Container>
          <Row>
            <h1>Contact me!</h1>
          </Row>
          <Contactform />
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default About;

import React from "react";
import Navigation from "./Navigation.jsx";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Plant1 from "./images/plant1.png";
import Plant2 from "./images/plant2.png";
import Plant3 from "./images/plant3.png";
import Plant4 from "./images/plant4.JPG";
// import Plant5 from "./images/plant5.JPG";
import Footer from "./Footer.jsx";

function Otherwork() {
  return (
    <div className="otherWork">
      <Navigation />
      <section id="otherwork-body">
        <div className="otherwork-videos">
          <h1>Videos</h1>
          <Container>
            <Row>
              <Col sm={12} md={6}>
                <iframe
                  className="otherwork-vid"
                  src="https://www.youtube.com/embed/dmAFBol9zao"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <iframe
                  className="otherwork-vid"
                  src="https://www.youtube.com/embed/lozqwh9cA3E"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </Col>
              <Col sm={12} md={6}>
                <iframe
                  className="otherwork-vid"
                  src="https://www.youtube.com/embed/GZ52Mxi0ccM"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="otherwork-wetland">
          <h1>Coin-Operated Wetland (2021)</h1>
          <Container>
            <Row>
              <Col>
                <img className="plant" src={Plant4} alt="" />
              </Col>
            </Row>
          </Container>
          <div className="otherwork-text">
            <p>
              I worked closely with artist Tega Brain to research the wetland
              species used in the installation. I created signs and a final
              plant zine detailing each plant for visitors to browse. The
              installation was on display for the Smithsonian Arts and Industry
              building’s “Futures” Exhibition. "Coin-Operated Wetland partners a
              laundromat with a wetland system. Like wetlands all over the
              world, this one has been in a difficult relationship with humanity
              for years, filtering water, making it drinkable again, only to be
              called "a nasty swamp" and threatened with development. This
              project collapses the distance between human and environment,
              confusing concepts of upstream and downstream. The work poses
              questions around ecology, co-existence and the culture of
              engineering." - Tega Brain (Artist) Pages from my zine:
            </p>
          </div>

          <Container>
            <Row>
              <Col sm={12} md={4}>
                <img className="plant" src={Plant1} alt="" />
              </Col>
              <Col sm={12} md={4}>
                <img className="plant" src={Plant2} alt="" />
              </Col>
              <Col sm={12} md={4}>
                <img className="plant" src={Plant3} alt="" />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section id="otherwork-footer">
        <Footer />
      </section>
    </div>
  );
}

export default Otherwork;

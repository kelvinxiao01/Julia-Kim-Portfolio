import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import "./App.css";
import Venmocover from "./images/venmo cover pic.png";
import Venmo1 from "./venmoimages/venmo1.png";
import Venmo2 from "./venmoimages/venmo2.png";
import Venmo3 from "./venmoimages/venmo3.png";
import Venmo4 from "./venmoimages/venmo4.png";
import Venmofinal from "./videos/venmo_final_demo.mov";
import { Container, Row, Col } from "react-bootstrap";

function Venmo() {
  return (
    <div className="venmo">
      <section id="venmo-nav">
        <Navigation />
      </section>
      <section id="venmo-body">
        <h1>Venmo- "Split the Bill"</h1>
        <img className="center-img" src={Venmocover} alt="Venmo Cover Pic" />
        <p>
          For this project I wanted to challenge myself to make an addition to
          an app I already love. I decided to add a "split the bill" feature to
          Venmo because I think it is something that most Venmo users would
          appreciate. ​​​​​​​
        </p>
        <img className="center-img" src={Venmo1} alt="" />
        <p>
          This was made before Venmo's current update so this is the beginning
          design I made to start the user's split the bill process. I kept it
          simple by adding it to the already existing action bar.
        </p>
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <img src={Venmo2} alt="" style={{ float: "right" }} />
            </Col>
            <Col sm={12} md={6}>
              <img src={Venmo3} alt="" style={{ float: "left" }} />
            </Col>
          </Row>
        </Container>
        <h2>BUTTONS</h2>
        <p>
          I included the classic rectangular Venmo buttons and added more
          padding around the side to add my personal opinion on buttons and to
          make it less cramped.
        </p>
        <img className="center-img" src={Venmo4} alt="" />
        <h2>FINAL DEMO</h2>
        <video
          className="center-vid"
          src={Venmofinal}
          controls
          style={{ height: "500px", width: "auto" }}
        ></video>
        <h2>CONCLUSION</h2>
        <p>
          The biggest challenge that I came across during this project was the
          look of it. Venmo's colors and fonts were generally simple to follow
          because there is nothing crazy about them. But I struggled with when
          to use certain buttons where because I had noticed some
          inconsistencies within the Venmo app itself. Overall, this project was
          a good practice of branding and UX layout and one I hope to revisit in
          the future using newly gained skills.
        </p>
      </section>
      <section id="venmo-footer">
        <Footer />
      </section>
    </div>
  );
}

export default Venmo;

import React from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Projcover(props) {
  return (
    <div className="proj-icon" style={{ backgroundColor: props.bgColor }}>
      <Container>
        <Link className="links" to={props.dest}>
          <Row>
            <Col>
              <img
                src={props.img}
                alt="project cover image"
                className="coverpic"
              />
            </Col>
            <Col>
              <div className="proj-col">
                <h4>{props.header}</h4>
                <p>{props.desc}</p>
              </div>
            </Col>
          </Row>
        </Link>
      </Container>
    </div>
  );
}

export default Projcover;

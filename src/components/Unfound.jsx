import React from "react";
import "./App.css";
import Navigation from "./Navigation.jsx";
import Footer from "./Footer.jsx";
import { Container, Row, Col } from "react-bootstrap";
import Unfoundpic from "./images/unfoundcover.png";
import Review1 from "./images/review 1.png";
import Review2 from "./images/review 2.png";
import Review3 from "./images/review 3.png";
import First1 from "./images/unfound_first_iteration1.png";
import First2 from "./images/unfound_first_iteration2.png";
import Second1 from "./images/second_iteration1.png";
import Second2 from "./images/second_iteration2.png";
import Second3 from "./images/second_iteration3.PNG";
import Second4 from "./images/second_iteration4.png";
import Second5 from "./images/second_iteration5.png";
import Second6 from "./images/second_iteration6.png";
import Current from "./videos/unfound_olddemo.mp4";
import Redesign from "./videos/unfoundnewdemo.mp4";

function Unfound() {
  return (
    <div className="unfound">
      <section id="unfound-nav">
        <Navigation />
      </section>
      <section id="unfound-body">
        <h1>Unfound App Redesign</h1>
        <img
          className="unfound-img"
          src={Unfoundpic}
          alt="Picture of what I did"
        />
        <p>
          Unfound is an app for “hidden gems”. Users can post places that they
          want more people to know about. Users are located globally. My goal in
          this project is not to reimagine what the app gives users, my goal is
          to simply redesign the features already present. It is essentially a
          big rearrangement of the app's buttons. The features I will focus on
          the most are the home page’s filter option and the making a post
          section. Created in Figma. I worked on this project alone.
        </p>{" "}
        <h2>PROBLEM</h2>
        <p>
          Through this redesign, I aimed to solve the problem of the app's user
          flow. Many users expressed complaints about the filter system, and the
          overall look of the app. I wanted to put more of an emphasis on the
          location of their posts because that is the goal of the app itself.
        </p>
        <Container className="unfound-review-container">
          <Row>
            <Col className="unfound-col" sm={12} md={4}>
              <img
                className="unfound-img-review"
                src={Review1}
                alt="An Unfound Review"
              />
            </Col>
            <Col sm={12} md={4}>
              <img
                className="unfound-img-review"
                src={Review2}
                alt="An Unfound Review"
              />
            </Col>
            <Col sm={12} md={4}>
              <img
                className="unfound-img-review"
                src={Review3}
                alt="An Unfound Review"
              />
            </Col>
          </Row>
        </Container>
        <h2>USER RESEARCH</h2>
        <p>
          I did research through looking at App Store reviews and competitors
          (like Instagram and Yelp). I also had users play around with the app
          and give me their first impression. After conducting my research, here
          were my takeaways.
        </p>
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <h3>App Store Reviews</h3>
              <ul>
                <li>"seems like there was no user testing</li>
                <li>bad filter system / filters do not work</li>
              </ul>
            </Col>
            <Col sm={12} md={6}>
              <h3>User Testing</h3>
              <ul>
                <li>icons aren't clear enough (coffee cup, tree, etc)</li>
                <li>homepage/feed is very crowded</li>
              </ul>
            </Col>
          </Row>
        </Container>
        <h2>FIRST ITERATIONS</h2>
        <p>
          After sketching out wire frames based on my user research, I took my
          designs into Figma and produced my first few designs.
        </p>
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <img
                className="unfound-img"
                src={First1}
                alt="First Iteration 1"
                style={{ float: "right" }}
              />
            </Col>
            <Col sm={12} md={6}>
              <img
                className="unfound-img"
                src={First2}
                alt="First Iteration 2"
                style={{ float: "left" }}
              />
            </Col>
          </Row>
        </Container>
        <p>
          At this point, I met with the founder, Yasmeena Faycurry, and got some
          insight from her. She informed me the biggest stress about the app is
          the feed and the way it is formatted. She agreed with many of the
          users and said it needed to be less crowded. She also informed me that
          unfound doesn't use drop shadows (as seen on the top left
          picture).​​​​​​​ Users who were tested with this prototype said they
          liked the new icon pills but still though the homepage was a bit
          crowded and it seems as though you had to use the filters.
        </p>
        <h2>SECOND ITERATIONS</h2>
        <p>
          After getting more feedback from Yasmeena and a few user testers, I
          made my final designs. Here are a few before and afters:
        </p>
        <h3>Top Nav</h3>
        <p>
          As you can see, the height of the top nav decreased with my redesign,
          allowing more room for the posts to shine.
        </p>
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <img
                className="unfound-img-topnav"
                src={Second3}
                alt=""
                style={{ float: "right" }}
              />
            </Col>
            <Col sm={12} md={6}>
              <img
                className="unfound-img-topnav"
                src={Second4}
                alt=""
                style={{ float: "left" }}
              />
            </Col>
          </Row>
        </Container>
        <h3>Bottom Nav</h3>
        <p>
          I took the "world" button which was previously on the top nav section,
          and moved it to the bottomnav, making it a whole new page. I also
          changed this page from an explore feed page to a map which users can
          explore. I made this change because the map will promote more
          exploration around the world and allow users to look at their specific
          location/ area in a bigger frame.
        </p>
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <img
                className="unfound-img-topnav"
                src={Second1}
                alt=""
                style={{ float: "right" }}
              />
            </Col>
            <Col sm={12} md={6}>
              <img
                className="unfound-img-topnav"
                src={Second2}
                alt=""
                style={{ float: "left" }}
              />
            </Col>
          </Row>
        </Container>
        <h3>Create Post</h3>
        <p>
          The first page a user is brought to after clicking the new post
          button. As you can see, I just vamped it up by adding the signature
          bold strokes and icon pills. I wanted to keep it simple because I like
          the clean look of it and so does the founder. It is not included in my
          prototype demo but the user should be able to select multiple photos
          at once because the way it is currently set up it is very back and
          forth with many repetitive clicks.
        </p>
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <img
                className="unfound-img"
                src={Second5}
                alt=""
                style={{ float: "right" }}
              />
            </Col>
            <Col sm={12} md={6}>
              <img
                className="unfound-img"
                src={Second6}
                alt=""
                style={{ float: "left" }}
              />
            </Col>
          </Row>
        </Container>
        <h2>FINAL DEMO</h2>
        <p>
          A demo experience of the current app (left) and my design (right).
        </p>
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <video
                src={Current}
                controls
                style={{ float: "right", height: "500px", width: "auto" }}
              ></video>
            </Col>
            <Col sm={12} md={6}>
              <video
                src={Redesign}
                controls
                style={{ float: "left", height: "500px", width: "auto" }}
              ></video>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="unfound-footer">
        <Footer />
      </section>
    </div>
  );
}

export default Unfound;

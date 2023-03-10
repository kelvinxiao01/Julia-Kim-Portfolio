import React from "react";
import Navigation from "./Navigation.jsx";
import Amazoncover from "./images/amazon cover pic.png";
import { Container, Row, Col } from "react-bootstrap";
import Problem1 from "./amazonImages/problem1.png";
import Problem2 from "./amazonImages/problem2.png";
import Problem3 from "./amazonImages/problem3.png";
import Problem4 from "./amazonImages/problem4.png";
import First1 from "./amazonImages/firstiteration1.png";
import First2 from "./amazonImages/firstiteration2.png";
import First3 from "./amazonImages/firstiteration3.png";
import First4 from "./amazonImages/firstiteration4.png";
import Second1 from "./amazonImages/second_iteration1 (1).png";
import Second2 from "./amazonImages/second_iteration2 (1).png";
import Second3 from "./amazonImages/second_iteration3 (1).png";
import Second4 from "./amazonImages/second_iteration4 (1).png";
import Second5 from "./amazonImages/second_iteration5 (1).png";
import Final1 from "./amazonImages/finaldesign1.png";
import Final2 from "./amazonImages/finaldesign2.png";
import Final3 from "./amazonImages/finaldesign3.png";
import Final4 from "./amazonImages/finaldesign4.png";
import Amazonvid from "./videos/amazon_final_demo.mov";
import Footer from "./Footer";

function Amazon() {
  return (
    <div className="amazon">
      <section id="amazon-nav">
        <Navigation />
      </section>
      <section id="amazon-body">
        <h1>Amazon's KDP Redirect</h1>
        <img
          className="center-img"
          src={Amazoncover}
          alt=""
          style={{ height: "400px", width: "auto" }}
        />
        <h2>PROBLEM</h2>

        <p>
          KDP Amazon users new to ebook self-publishing often use the product to
          achieve a wide distribution of their novel in a relatively short
          publishing time. However, the interface and user flow is unintuitive
          and requires a high learning curve to get started. This leaves users
          with the additional task of investing time to learn how to properly
          format and submit all required assets or to hire someone to do so.
          Here is their site right now.
        </p>
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <img
                className="amazon-imgspace"
                src={Problem1}
                alt=""
                style={{ width: "300px", height: "auto", float: "right" }}
              />
            </Col>
            <Col sm={12} md={6}>
              <img
                className="amazon-imgspace"
                src={Problem3}
                alt=""
                style={{ width: "250px", height: "auto", float: "left" }}
              />
              <br />
              <img
                className="amazon-imgspace"
                src={Problem2}
                alt=""
                style={{ width: "300px", height: "auto", float: "left" }}
              />
              <br />
              <img
                src={Problem4}
                alt=""
                style={{ width: "300px", height: "auto", float: "left" }}
              />
            </Col>
          </Row>
        </Container>
        <h2>DESIGN PROBLEMS</h2>
        <p>
          The UI/ UX of the site was not ideal to begin with. There was a
          confusing user flow as you can see above in the left screen shot. The
          user had an option to sign in while already being signed in (indicated
          by the sign out link). There were also three, yes three, different nav
          bars depending on which section you went to. These kinds of
          contradicting layouts and confusing appearances are why Amazon's KDP
          needed a refresh.
        </p>
        <h2>USER RESEARCH & COMPETITIVE ANALYSIS</h2>
        <p>
          We looked at a few competitors/ sites similar to amazon's KDP and took
          note of their pros and cons. Many had features that we picked and
          chose to improve upon our designs.
        </p>
        <p>
          Webtoon - The user interface makes it very apparent to users how this
          works because of its clean and clear visual cues and instructions
        </p>
        <p>
          Draft2Digital - They streamline all miscellaneous aspects of
          publishing from layout to distribution so writers can focus on the
          content of their publishings
        </p>
        <p>
          Gumroad - Makes it easier to grow a niche audience to their publishing
          customization options
        </p>
        <p>Kobo - Provides detailed analytics insights of published books</p>
        <h2>ITERATION 1</h2>
        <p>
          After designing our first iteration, we sent it out for user testing
          and received varying responses. Although positive, our designs needed
          much fine tuning: ​
        </p>
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <img
                className="amazon-first"
                style={{ float: "right" }}
                src={First1}
                alt=""
              />
              <img
                className="amazon-first"
                style={{ float: "right" }}
                src={First3}
                alt=""
              />
            </Col>
            <Col sm={12} md={6}>
              <img
                className="amazon-first"
                style={{ float: "left" }}
                src={First2}
                alt=""
              />
              <img
                className="amazon-first"
                style={{ float: "left" }}
                src={First4}
                alt=""
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6}>
              <h3>Wins</h3>
              <ul style={{ float: "right" }}>
                <li>The purpose of our site is clear</li>
                <li>
                  The UI shows a clear sequential path and is self-explanatory
                </li>
                <li>Big Buttons</li>
                <li>Overall visually nice to look at</li>
                <li>Useful shipping tracker/confirmation page</li>
              </ul>
            </Col>
            <Col sm={12} md={6}>
              <h3>Pain Points</h3>
              <ul style={{ float: "left" }}>
                <li>Too much text on the project creation pages</li>
                <li>Some buttons don't look clickable</li>
                <li>No way to go back to the previous step</li>
                <li>Made a user "feel like a sheep"</li>
              </ul>
            </Col>
          </Row>
        </Container>
        <h2>SECOND ITERATIONS</h2>
        <p>
          After receiving some user feedback, we made some changes based on that
          and our initial research. Some were small like changing a check box to
          a circle button. Here are the bigger ones:
        </p>
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <img src={Second1} alt="" style={{ float: "right" }} />
            </Col>
            <Col sm={12} md={6}>
              <img src={Second2} alt="" style={{ float: "left" }} />
            </Col>
          </Row>
        </Container>
        <p>
          To minimize the amount of text and clean up the look of the project
          creation form, we added information icons that only show the details
          of the question when you hover over them.
        </p>
        <img className="center-img" src={Second3} alt="" />
        <p>
          Additionally, we opened with more friendly and simple questions like
          book title and language. This is an improvement from our previous
          designs which opened with questions about the book's content and
          didn't give the "ease into it" feel.
        </p>
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <img
                className="amazon-second"
                src={Second4}
                alt=""
                style={{ float: "right" }}
              />
            </Col>
            <Col sm={12} md={6}>
              <img
                className="amazon-second"
                src={Second5}
                alt=""
                style={{ float: "left" }}
              />
            </Col>
          </Row>
        </Container>
        <p>
          On the homepage, I shortened the original background image which took
          up the whole screen and made room for a browse section so that user
          can explore other authors, genres, and content for inspiration. I also
          included a chat feature because that is one feature many of our
          competitors have which seem useful on sites with many strict
          directions.
        </p>
        <p>
          In order to fix the problem of managing your publishings, we added a
          separate Bookshelf page that allows you to see everything there is to
          know about books you've published and books that you are going to
          publish
        </p>
        <h2>FINAL DESIGNS & DEMO</h2>
        <p>Screen grabs of a few pages:</p>
        <Container>
          {" "}
          <Row>
            <Col sm={12} md={6}>
              <img
                className="amazon-first"
                style={{ float: "right" }}
                src={Final1}
                alt=""
              />
              <img
                className="amazon-first"
                style={{ float: "right" }}
                src={Final3}
                alt=""
              />
            </Col>
            <Col sm={12} md={6}>
              <img
                className="amazon-first"
                style={{ float: "left" }}
                src={Final2}
                alt=""
              />
              <img
                className="amazon-first"
                style={{ float: "left" }}
                src={Final4}
                alt=""
              />
            </Col>
          </Row>
        </Container>
        <p>Full run through of the prototype:</p>
        <video
          className="center-vid"
          src={Amazonvid}
          controls
          style={{ height: "500px", width: "auto" }}
        ></video>
        <h2>CONCLUSION AND TAKEAWAYS</h2>
        <p>
          This project taught me a lot about using Figma. moving forward I will
          definitely make use of components and auto-layout because I often
          found myself having to manually make the same changes on different
          pages. Some of our initial learnings and ideas proved to not work.
          Specifically, showing detailed instructions on the project creation
          pages. We had originally included such detail to make the process
          easier to understand and not have the user feel the need to find
          outside guidance. This ended up not working and many users told us it
          was too much text.
        </p>
      </section>
      <section id="amazon-footer">
        <Footer />
      </section>
    </div>
  );
}

export default Amazon;

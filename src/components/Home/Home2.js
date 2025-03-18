import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I got into programming completely by accident. My two older brothers were studying Computer Science, and I had no strong preference for any other course—so I figured, why not? 
              Turns out, it was one of the best decisions I’ve ever made.
              <br />
              <br />Now, I enjoy building <b className="purple">scalable systems, APIs, and AI-powered applications</b> that solve real-world problems.
              <br />
              <br />
              My expertise includes working with &nbsp;
              <i>
                <b className="purple">Java, Python, JavaScript, and SQL</b>
              </i>, with a focus on
              <i>
                <b className="purple"> backend engineering, full-stack development, and cybersecurity</b>.
              </i>
              <br />
              <br />
              I’m especially interested in how technology can be used to enhance **efficiency, security, and automation**. 
              <br />
              <br />
              Whenever possible, I apply my passion for software engineering to building robust systems using
              <b className="purple"> Node.js, Flask</b>, and modern JavaScript frameworks like 
              <i>
                <b className="purple"> React.js and Next.js</b>.
              </i>
            </p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/bashirbobboi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mohammed-bashir-bobboi-0aa4b0259/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

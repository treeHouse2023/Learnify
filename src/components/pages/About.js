import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

function About() {
  return (
    <section className="about-section">
      <Container
        fluid
        className="d-flex justify-content-center align-items-center flex-column"
      >
        <h1 className="about-heading mb-5 text-center">
          About <span className="brand-highlight">Learnify</span>
        </h1>
        <Row className="justify-content-center w-100">
          <Col md={10} lg={8}>
            <Card className="about-card">
              <Card.Body>
                <Card.Text>
                  <p>
                    <strong>Learnify</strong> is not just a platform — it's a
                    movement crafted by students, for students. Our goal is to
                    simplify access to vital academic materials, especially
                    previous year papers, curated notes, and guides.
                  </p>
                  <p>
                    In an age overwhelmed by data, Learnify ensures that the
                    **right resources reach the right students at the right
                    time**. With an intuitive interface and powerful features,
                    we redefine collaborative learning.
                  </p>
                  <p>
                    <strong>Why Learnify Stands Out:</strong>
                  </p>
                  <ul>
                    <li>
                      Instant access to verified previous year question papers
                    </li>
                    <li>Structured and categorized notes by topic/subject</li>
                    <li>Secure login with student verification and IDs</li>
                    <li>Real-time discussion through built-in student chat</li>
                    <li>
                      Built to grow with student contributions and feedback
                    </li>
                  </ul>
                  <p>
                    Whether you're preparing for exams or contributing to help
                    others, Learnify is your **academic companion**. We believe
                    in accessibility, collaboration, and continuous growth.
                  </p>
                </Card.Text>
                <div className="text-center mt-4">
                  <Link to="/">
                    <Button variant="outline-light" className="btn-custom">
                      Back to Home
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;

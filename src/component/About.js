import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

function About() {
  return (
    <section className="about-section d-flex align-items-center justify-content-center">
      <Container className="text-center p-5">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <h1 className="display-4 mb-4">About Learnify</h1>
            <Card className="about-card">
              <Card.Body>
                <Card.Text>
                  <p>
                    <strong>Learnify</strong> is a student-driven platform
                    designed to streamline access to academic resources. Our
                    mission is to empower students by providing a comprehensive
                    repository of previous year question papers, study notes,
                    and other essential materials.
                  </p>
                  <p>
                    By facilitating easy sharing and access to these resources,
                    Learnify enhances learning, promotes collaboration, and
                    saves time, making the educational journey more efficient
                    and effective.
                  </p>
                  <p>
                    <strong>Key Features:</strong>
                  </p>
                  <ul>
                    <li>Access to previous year question papers</li>
                    <li>Comprehensive notes repository</li>
                    <li>Secure user authentication and unique student IDs</li>
                    <li>Interactive chat feature for student discussions</li>
                    <li>User-driven content contribution</li>
                  </ul>
                  <p>
                    Join us in making learning more accessible and collaborative
                    for everyone.
                  </p>
                </Card.Text>
                <div className="text-center mt-4">
                  <Button variant="outline-light" className="btn-custom">
                    Learn More
                  </Button>
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

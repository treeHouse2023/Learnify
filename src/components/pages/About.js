import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

function About() {
  return (
    <section className="about-section">
      <Container fluid className="about-container">
        <h1 className="about-heading">
          About <span className="brand-highlight">Learnify</span>
        </h1>

        <Row className="justify-content-center w-100">
          <Col>
            <div className="about-glass-card">
              <p>
                <strong>Learnify</strong> is not just a platform — it is a
                student-driven academic ecosystem designed to simplify access to
                previous year question papers, curated notes, and essential
                learning resources.
              </p>

              <p>
                In an age overloaded with information, Learnify ensures that the{" "}
                <strong>right resources reach the right students</strong> at the
                right time through clarity, structure, and reliability.
              </p>

              <p className="section-title">What You Can Do on Learnify</p>

              <ul>
                <li>
                  Search and download verified previous year question papers
                </li>
                <li>Upload question papers to help fellow students</li>
                <li>Contribute academic resources to grow the community</li>
                <li>
                  Access materials organized by subject, exam type, and session
                </li>
              </ul>

              <p className="section-title">
                Contribution & Verification Process
              </p>

              <p>
                Learnify allows students to upload their own question papers and
                academic materials. To maintain quality and authenticity, every
                submission goes through a <strong>manual review process</strong>
                .
              </p>

              <p>
                Once you upload a resource, it may take approximately
                <strong> 3 to 4 working days</strong> for your contribution to
                be reviewed, verified, and made publicly available on the
                platform. This ensures accuracy, relevance, and a trustworthy
                experience for all users.
              </p>

              <p className="section-title">Why Learnify Stands Out</p>

              <ul>
                <li>Student-first platform built by and for learners</li>
                <li>Verified and quality-checked academic resources</li>
                <li>Clean, distraction-free, and intuitive interface</li>
                <li>Community-driven growth and collaboration</li>
                <li>Designed to evolve with student feedback</li>
              </ul>

              <p>
                Whether you are preparing for exams or contributing to help
                others succeed, Learnify becomes your
                <strong> trusted academic companion</strong>.
              </p>

              <div className="about-action">
                <Link to="/" className="back-btn">
                  Back to Home
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;

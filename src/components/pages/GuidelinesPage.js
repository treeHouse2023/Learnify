import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./GuidelinesPage.css";

function GuidelinesPage() {
  const guidelines = [
    "Upload only clear and readable question papers or academic documents.",
    "Accepted formats include PDF and high-quality images.",
    "File size must not exceed 10MB per upload.",
    "Use proper naming format (Year_Subject_Program.pdf).",
    "Ensure documents do not contain personal or sensitive information.",
    "Avoid uploading copyrighted or paid materials.",
    "Do not submit duplicate or already available papers.",
    "Irrelevant or misleading submissions will be rejected.",
  ];

  return (
    <section className="guidelines-hero">
      <div className="guidelines-container">
        <h1 className="guidelines-heading">
          Learnify <span>Guidelines</span>
        </h1>

        <div className="guidelines-card">
          <p className="guidelines-intro">
            Learnify follows a structured and transparent review process to
            ensure that every shared resource remains accurate, helpful, and
            fair for all students.
          </p>

          <div className="guidelines-divider" />

          <h3 className="guidelines-subtitle">Submission Rules</h3>

          <ul className="guidelines-list">
            {guidelines.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <div className="guidelines-divider" />

          <h3 className="guidelines-subtitle">Review & Approval</h3>

          <p>
            Every uploaded document goes through a{" "}
            <strong>manual verification process</strong> for clarity, relevance,
            and duplication checks.
          </p>

          <p>
            Approval may take approximately <strong>3–4 working days</strong>{" "}
            before your contribution becomes publicly visible.
          </p>

          <div className="guidelines-note">
            Repeated violations may result in restricted upload access.
          </div>
        </div>
      </div>
    </section>
  );
}

export default GuidelinesPage;

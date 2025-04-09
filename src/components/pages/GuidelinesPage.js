import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./GuidelinesPage.css";

function GuidelinesPage() {
  const guidelines = [
    "Ensure all uploaded documents are in PDF format.",
    "File size should not exceed 10MB.",
    "Name your files appropriately, e.g., `Year_Subject_Program.pdf`.",
    "Double-check the content before uploading.",
    "Respect copyright and privacy laws.",
    "Use the proper channels for sensitive content.",
    "Report any issues encountered during the upload process.",
  ];

  return (
    <section className="guidelines-hero">
      <div className="container d-flex flex-column align-items-center justify-content-center text-white text-center py-5">
        <h1 className="guidelines-heading mb-5">
          Learnify <span className="brand-highlight">Guidelines</span>
        </h1>
        <div className="row justify-content-center w-100">
          <div className="col-lg-8">
            <ul className="guidelines-list">
              {guidelines.map((guideline, index) => (
                <li key={index} className="guideline-item mb-3">
                  {guideline}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GuidelinesPage;

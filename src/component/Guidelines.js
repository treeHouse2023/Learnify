import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./GuidelinesPage.css";

function GuidelinesPage() {
  const guidelines = [
    "Ensure all uploaded documents are in PDF format.",
    "File size should not exceed 10MB.",
    "Name your files appropriately, e.g., `Year_Subject_Program.pdf`.",
    "Double-check the content before uploading.",
    "Only upload content that is allowed under the university's sharing policy.",
    "Respect copyright and privacy laws.",
    "Use the proper channels for sensitive content.",
    "Report any issues encountered during the upload process.",
  ];

  return (
    <section className="guidelines-hero d-flex align-items-center justify-content-center">
      <div className="container text-center text-white p-5">
        <h1 className="display-4 mb-4">Guidelines Of Learnify </h1>
        <div className="row justify-content-center">
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

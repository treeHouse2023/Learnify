import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SharingPage.css";

const CLOUDINARY_UPLOAD_PRESET = "Learnify";
const CLOUD_NAME = "dmgkjo9pm";

const SharingPage = () => {
  const [status, setStatus] = useState("");
  const [uploadedURL, setUploadedURL] = useState("");

  const handleFileChange = async (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      await uploadFileToCloudinary(uploadedFile);
    }
  };

  const uploadFileToCloudinary = async (file) => {
    setStatus("⏳ Uploading...");
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/raw/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      setUploadedURL(data.secure_url);
      setStatus("🎉 Upload successful!");
    } catch (err) {
      console.error(err);
      setStatus("❌ Upload failed. Try again!");
    }
  };

  return (
    <div className="sharing-container">
      <div className="sharing-card">
        <h2>Submit Question Paper Details</h2>

        <form
          className="sharing-form"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="1ef5c2bb-348c-4c9d-a22d-1acb5ec90420"
          />

          <input type="hidden" name="uploaded_file_url" value={uploadedURL} />

          <input
            type="text"
            name="Subject Name"
            className="form-control"
            placeholder="Subject Name (Title)"
            required
          />

          <div>
            <label className="form-label">Type</label>
            <div className="d-flex flex-wrap gap-3 mt-2">
              {["MSE", "ESE", "Practical", "Reappear"].map((type) => (
                <div className="form-check" key={type}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Semester"
                    value={type}
                    required
                  />
                  <label className="form-check-label">{type}</label>
                </div>
              ))}
            </div>
          </div>

          <input
            type="text"
            name="Session"
            className="form-control"
            placeholder="Session (e.g. 2025, 2026)"
            required
          />

          <input
            type="text"
            name="Contributor"
            className="form-control"
            placeholder="Contributor Name"
            required
          />

          <div className="upload-section">
            <h4>Upload Your File</h4>

            {status && <div className="alert alert-info">{status}</div>}

            <input
              type="file"
              accept="application/pdf,image/*"
              onChange={handleFileChange}
            />

            {uploadedURL && (
              <div className="uploaded-preview">
                <a href={uploadedURL} target="_blank" rel="noopener noreferrer">
                  View Uploaded File
                </a>
              </div>
            )}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SharingPage;

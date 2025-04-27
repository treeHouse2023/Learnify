import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SharingPage.css";

const CLOUDINARY_UPLOAD_PRESET = "Learnify";
const CLOUD_NAME = "dmgkjo9pm";

const SharingPage = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");
  const [uploadedURL, setUploadedURL] = useState("");

  const handleFileChange = async (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
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

      if (!res.ok) throw new Error("Cloudinary upload failed!");

      const data = await res.json();
      setUploadedURL(data.secure_url);
      setStatus("🎉 Upload successful!");
    } catch (err) {
      console.error("❌ Error uploading:", err);
      setStatus("❌ Upload failed. Try again!");
    }
  };

  return (
    <div className="container my-5 sharing-container">
      <div className="p-4 sharing-card">
        <h2 className="text-center mb-4">Submit Question Paper Details</h2>

        {/* Full Form */}
        <form action="https://api.web3forms.com/submit" method="POST">
          {/* Web3Forms access key */}
          <input
            type="hidden"
            name="access_key"
            value="1ef5c2bb-348c-4c9d-a22d-1acb5ec90420"
          />

          {/* Uploaded File URL */}
          <input type="hidden" name="uploaded_file_url" value={uploadedURL} />

          {/* Subject Name */}
          <div className="mb-3">
            <input
              type="text"
              name="Subject Name"
              className="form-control"
              placeholder="Subject Name (Title)"
              required
            />
          </div>

          {/* Semester */}
          <div className="mb-3">
            <label className="form-label">Type</label>
            <div className="d-flex flex-wrap gap-3">
              {["MSE", "ESE", "Practical", "Reappear"].map((sem) => (
                <div className="form-check" key={sem}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Semester"
                    value={sem}
                    required
                  />
                  <label className="form-check-label">{sem}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Session */}
          <div className="mb-3">
            <label className="form-label">Session:</label>
            <input
              type="text"
              name="Session"
              className="form-control"
              placeholder="Enter Session (e.g., 2025, 2026)"
              required
            />
          </div>

          {/* Contributor Name */}
          <div className="mb-3">
            <input
              type="text"
              name="Contributor"
              className="form-control"
              placeholder="Contributor Name"
              required
            />
          </div>

          {/* Upload File */}
          <div className="mt-5">
            <h4 className="text-center mb-3">Upload Your File</h4>

            {status && <div className="alert alert-info">{status}</div>}

            <div className="mb-4">
              <input
                type="file"
                className="form-control"
                accept="application/pdf,image/*"
                onChange={handleFileChange}
              />
            </div>

            {/* Uploaded Link Preview */}
            {uploadedURL && (
              <div className="text-center mt-3">
                <h5>Uploaded File:</h5>
                <a
                  href={uploadedURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-success"
                >
                  View Uploaded File
                </a>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-success w-100 mt-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SharingPage;

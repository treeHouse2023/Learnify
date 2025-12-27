import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SharingPage.css";

// Synchronized dynamic placeholder hook with customizable speed
function useDynamicPlaceholder(
  placeholderList,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 100 // reduced pause time for quicker cycling
) {
  const [placeholder, setPlaceholder] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = placeholderList[index];
    let timeout;

    if (!deleting) {
      if (charIndex < current.length) {
        timeout = setTimeout(() => {
          setPlaceholder(current.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setDeleting(true), 100); // minimal pause before deleting
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setPlaceholder(current.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deletingSpeed);
      } else {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % placeholderList.length); // Move to the next name immediately
      }
    }

    return () => clearTimeout(timeout);
  }, [
    charIndex,
    deleting,
    index,
    placeholderList,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return placeholder;
}

function SharingPage() {
  const [subject, setSubject] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [semester, setSemester] = useState("");
  const [session, setSession] = useState("");
  const [contributor, setContributor] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [dragActive, setDragActive] = useState(false);

  // Dynamic placeholders with adjusted speed for each field
  const subjectPlaceholder = useDynamicPlaceholder(
    [
      "Algorithm Design and Analysis",
      "Operating System",
      "Computer Networks",
      "Database Management System",
      "Software Engineering",
    ],
    70,
    60
  ); // Adjust typing and deleting speed for subject

  const courseCodePlaceholder = useDynamicPlaceholder(
    ["CSA301", "CSE204", "CSA105", "CSE101"],
    100,
    60
  ); // Adjust typing and deleting speed for courseCode

  const semesterPlaceholder = useDynamicPlaceholder(
    ["MSE", "ESE", "Reappear", "Practical"],
    90,
    60
  ); // Adjust typing and deleting speed for semester

  const sessionPlaceholder = useDynamicPlaceholder(["2022", "2023"], 20, 10); // Adjust typing and deleting speed for session
  const contributorPlaceholder = useDynamicPlaceholder(
    ["Nishant", "Lalit", "Aryan", "Lil", "Anubhav"],
    50,
    50
  ); // Adjust typing and deleting speed for contributor

  const handleFileUpload = (files) => {
    const fileArray = Array.from(files);
    setUploadedFiles(fileArray);
    setUploadProgress(100);
  };

  const handleFileDelete = (index) => {
    const updatedFiles = [...uploadedFiles];
    updatedFiles.splice(index, 1);
    setUploadedFiles(updatedFiles);
    setUploadProgress(updatedFiles.length ? 100 : 0);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files.length) {
      handleFileUpload(e.dataTransfer.files);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !subject ||
      !courseCode ||
      !semester ||
      !session ||
      !contributor ||
      uploadedFiles.length === 0
    ) {
      alert("Please fill all fields and upload at least one file.");
      return;
    }

    try {
      const formData = new FormData();
      uploadedFiles.forEach((file) => formData.append("file", file));
      formData.append("subject", subject);
      formData.append("courseCode", courseCode);
      formData.append("semester", semester);
      formData.append("session", session);
      formData.append("contributor", contributor);

      const res = await axios.post(
        process.env.REACT_APP_API_URL || "http://localhost:5000/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (res.status === 200 || res.status === 201) {
        alert("Upload successful!");
        setSubject("");
        setCourseCode("");
        setSemester("");
        setSession("");
        setContributor("");
        setUploadedFiles([]);
        setUploadProgress(0);
      } else {
        alert("Upload failed.");
      }
    } catch (err) {
      console.error("Upload error:", err);
      alert("Error uploading files.");
    }
  };

  return (
    <section
      className="sharing-hero d-flex align-items-center justify-content-center"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <div className="container text-white text-center">
        <h1 className="display-4 mb-4">Upload Question Papers</h1>

        <form onSubmit={handleSubmit} className="mb-4 text-start">
          {[
            {
              id: "subject",
              label: "Subject Name",
              value: subject,
              setter: setSubject,
              placeholder: subjectPlaceholder,
            },
            {
              id: "courseCode",
              label: "Course Code",
              value: courseCode,
              setter: setCourseCode,
              placeholder: courseCodePlaceholder,
            },
            {
              id: "semester",
              label: "Semester",
              value: semester,
              setter: setSemester,
              placeholder: semesterPlaceholder,
            },
            {
              id: "session",
              label: "Session",
              value: session,
              setter: setSession,
              placeholder: sessionPlaceholder,
            },
            {
              id: "contributor",
              label: "Contributor Name",
              value: contributor,
              setter: setContributor,
              placeholder: contributorPlaceholder,
            },
          ].map(({ id, label, value, setter, placeholder }) => (
            <div className="form-group mb-3" key={id}>
              <label htmlFor={id} className="form-label">
                {label}
              </label>
              <input
                type="text"
                id={id}
                className="form-control form-control-lg animated-placeholder"
                placeholder={placeholder}
                value={value}
                onChange={(e) => setter(e.target.value)}
              />
            </div>
          ))}

          <div
            className={`drop-zone mt-4 ${dragActive ? "drag-active" : ""}`}
            onDragEnter={() => setDragActive(true)}
            onDragLeave={() => setDragActive(false)}
          >
            <input
              type="file"
              id="fileInput"
              multiple
              onChange={(e) => handleFileUpload(e.target.files)}
              hidden
            />
            <label htmlFor="fileInput" className="file-label">
              Drag & Drop files here or click to select
            </label>
          </div>

          <button type="submit" className="btn btn-primary btn-lg mt-4 w-100">
            Upload
          </button>
        </form>

        {uploadedFiles.length > 0 && (
          <div className="uploaded-files mt-4">
            <h5 className="text-white">Uploaded Files:</h5>
            <ul className="list-group">
              {uploadedFiles.map((file, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {file.name}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleFileDelete(index)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-5 text-center">
          <Link to="/">
            <button className="btn btn-outline-light">Back to Home</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SharingPage;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SharingPage.css";

function useDynamicPlaceholder(list, typeSpeed = 80, deleteSpeed = 40) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = list[i];
    let t;

    if (!del && j < current.length) {
      t = setTimeout(() => {
        setText(current.slice(0, j + 1));
        setJ(j + 1);
      }, typeSpeed);
    } else if (!del && j === current.length) {
      t = setTimeout(() => setDel(true), 500);
    } else if (del && j > 0) {
      t = setTimeout(() => {
        setText(current.slice(0, j - 1));
        setJ(j - 1);
      }, deleteSpeed);
    } else {
      setDel(false);
      setI((prev) => (prev + 1) % list.length);
    }

    return () => clearTimeout(t);
  }, [j, del, i, list]);

  return text;
}

function SharingPage() {
  const [subject, setSubject] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [session, setSession] = useState("");
  const [examType, setExamType] = useState("");
  const [contributor, setContributor] = useState("");
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  const subjectPH = useDynamicPlaceholder([
    "Operating System",
    "DBMS",
    "Computer Networks",
  ]);
  const coursePH = useDynamicPlaceholder(["CSA301", "CSE204"]);
  const sessionPH = useDynamicPlaceholder(["2022", "2023", "2024"]);
  const contributorPH = useDynamicPlaceholder([
    "Nishant",
    "Lalit",
    "Aryan",
    "Ribu",
    "Anubhav",
    "Kashish",
    "Lil Bahadur",
  ]);

  const uploadToCloudinary = async () => {
    const cloudName = "dmgkjo9pm";
    const uploadPreset = "Learnify";

    if (!file) throw new Error("No file selected");

    const isImage = file.type.startsWith("image/");
    const endpoint = isImage ? "image" : "raw";

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/${endpoint}/upload`,
      formData
    );

    return res.data.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !subject ||
      !courseCode ||
      !session ||
      !examType ||
      !contributor ||
      !file
    ) {
      alert("Fill all fields");
      return;
    }

    try {
      setStatus("Uploading to Cloud...");

      const fileURL = await uploadToCloudinary();

      setStatus("Sending mail...");

      const mailData = new FormData();
      mailData.append("access_key", "1ef5c2bb-348c-4c9d-a22d-1acb5ec90420");
      mailData.append("subject", "New Question Paper Submission");
      mailData.append("from_name", contributor);
      mailData.append(
        "message",
        `
Subject: ${subject}
Course Code: ${courseCode}
Session: ${session}
Exam Type: ${examType}
Contributor: ${contributor}

Cloudinary Link:
${fileURL}
        `
      );

      await axios.post("https://api.web3forms.com/submit", mailData);

      alert("File uploaded & mail sent!");
      setStatus("");

      setSubject("");
      setCourseCode("");
      setSession("");
      setExamType("");
      setContributor("");
      setFile(null);
    } catch (err) {
      console.error(err);
      alert("Upload failed. Check console.");
      setStatus("");
    }
  };

  return (
    <div className="sharing-container">
      <div className="sharing-card">
        <h2>Upload Question Paper</h2>

        <form onSubmit={handleSubmit} className="sharing-form">
          <input
            className="form-control"
            placeholder={subjectPH}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <input
            className="form-control"
            placeholder={coursePH}
            value={courseCode}
            onChange={(e) => setCourseCode(e.target.value)}
          />
          <input
            className="form-control"
            placeholder={sessionPH}
            value={session}
            onChange={(e) => setSession(e.target.value)}
          />

          <div className="mt-3">
            <label>Exam Type</label>
            {["MSE", "ESE", "Reappear", "Practical"].map((t) => (
              <div key={t} className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="examType"
                  value={t}
                  checked={examType === t}
                  onChange={(e) => setExamType(e.target.value)}
                />
                <label className="form-check-label">{t}</label>
              </div>
            ))}
          </div>

          <input
            className="form-control mt-2"
            placeholder={contributorPH}
            value={contributor}
            onChange={(e) => setContributor(e.target.value)}
          />
          <input
            type="file"
            className="form-control mt-3"
            accept=".pdf,.jpg,.jpeg,.png,.webp"
            onChange={(e) => setFile(e.target.files[0])}
          />

          {status && <div className="alert alert-info mt-3">{status}</div>}
          <button className="btn btn-primary mt-3">Submit</button>
        </form>

        <div className="mt-4 text-center">
          <Link to="/">
            <button className="btn btn-outline-light">Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SharingPage;

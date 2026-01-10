import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutCreator.css";
import creatorImage from "./pic.jpg";
import {
  FaEnvelope,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";
import axios from "axios";

function AboutCreator() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.target);
    formData.append("access_key", "1ef5c2bb-348c-4c9d-a22d-1acb5ec90420");
    formData.append("subject", "New Contact Message from Portfolio");
    formData.append("from_name", "About Creator Page");

    try {
      const res = await axios.post(
        "https://api.web3forms.com/submit",
        formData
      );
      if (res.data.success) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="about-creator-section">
      <div className="creator-glass-card">
        <h1 data-aos="fade-down">About the Creator</h1>

        <img
          src={creatorImage}
          alt="Nishant Chauhan"
          className="creator-image"
          data-aos="zoom-in"
        />

        <p className="creator-name" data-aos="fade-up">
          Nishant Chauhan
        </p>

        <p className="creator-roles" data-aos="fade-up">
          3× Business Hackathon Winner (Rank 1) • 2+ Years Experience <br />
          Digital Marketing & Strategy • Web Developer (React.js) <br />
          AI & ML Enthusiast • Content Creator • MBA Aspirant
        </p>

        {/* SUMMARY */}
        <div className="creator-section" data-aos="fade-up">
          <h3>Professional Summary</h3>
          <p>
            I am a results-driven Marketing and Communications professional with
            over two years of experience blending creativity, strategy, and
            technology. With a strong foundation in web development (HTML, CSS,
            JavaScript, React) and expertise in digital marketing, social media
            strategy, and content creation, I design campaigns that connect,
            engage, and convert.
          </p>
          <p>
            I have executed drone-based outreach programs at Garuda Aerospace,
            driven course sales as an ambassador for YHills and Internshala, and
            collaborated with more than ten freelance clients to scale their
            online presence through digital strategy, video editing, and brand
            storytelling.
          </p>
          <p>
            As a former Google Developer Group member and Rank 1 achiever at
            both Management Mosaic and the Gen AI Academy by Google Cloud, I
            operate at the intersection of marketing, technology, and AI
            innovation.
          </p>
        </div>

        {/* CONTACT INFO */}
        <div className="creator-section" data-aos="fade-up">
          <h3>Contact Information</h3>
          <ul className="creator-points">
            <li>Email: nishant852800@gmail.com</li>
            <li>LinkedIn: www.linkedin.com/in/nishantchauhan2004</li>
            <li>Location: India</li>
          </ul>
        </div>

        {/* SKILLS */}
        <div className="creator-section" data-aos="fade-up">
          <h3>Top Skills</h3>
          <ul className="creator-points">
            <li>React.js & Frontend Development</li>
            <li>Digital Marketing & Growth Strategy</li>
            <li>Content Marketing & Social Media Strategy</li>
            <li>Video Editing & Brand Storytelling</li>
            <li>AI, LLMs & Generative AI Systems</li>
            <li>Website Optimization (React & WordPress)</li>
          </ul>
        </div>

        {/* LANGUAGES */}
        <div className="creator-section" data-aos="fade-up">
          <h3>Languages</h3>
          <ul className="creator-points">
            <li>Punjabi — Native / Bilingual</li>
            <li>Hindi — Native / Bilingual</li>
            <li>English — Professional Working Proficiency</li>
          </ul>
        </div>

        {/* CERTIFICATIONS */}
        <div className="creator-section" data-aos="fade-up">
          <h3>Certifications</h3>
          <ul className="creator-points">
            <li>Build Real World AI Applications with Gemini & Imagen</li>
            <li>Deloitte Australia — Technology Job Simulation</li>
            <li>Tata — GenAI Powered Data Analytics Job Simulation</li>
            <li>Content Marketing Certification</li>
          </ul>
        </div>

        {/* EXPERIENCE */}
        <div className="creator-section" data-aos="fade-up">
          <h3>Professional Experience</h3>

          <p>
            <strong>Founder & CEO — NextStep (July 2025 – Present)</strong>
          </p>
          <p>
            Founded and lead a student-focused education and career platform.
            Curate verified internships, job alerts, government updates, and
            free certifications. Built and manage a growing student community
            while ensuring authenticity and employability impact.
          </p>

          <p>
            <strong>Digital Media Executive — A-sonne</strong>
          </p>
          <p>
            Designed and optimized websites, created videos, motion graphics,
            and promotional content, and collaborated with teams to maintain
            consistent brand communication.
          </p>

          <p>
            <strong>Social Media Manager — GDG On Campus DAV University</strong>
          </p>
          <p>
            Led social media strategy, content creation, and engagement for the
            GDG student developer community.
          </p>

          <p>
            <strong>Freelancer — Digital Marketing & Video Editing</strong>
          </p>
          <p>
            Planned and executed ad campaigns, managed social calendars, and
            optimized marketing ROI for cafes, restaurants, startups, and
            service-based businesses.
          </p>

          <p>
            <strong>Intel® Unnati Industrial Training Program</strong>
          </p>
          <p>
            Completed training in Generative AI and LLM inference. Built a
            custom AI chatbot as a capstone project.
          </p>

          <p>
            <strong>Field Marketing Intern — Garuda Aerospace</strong>
          </p>
          <p>
            Conducted drone demonstrations for farmers under the Bharat Viksit
            Sankalp program, promoting modern agricultural practices.
          </p>
        </div>

        {/* EDUCATION */}
        <div className="creator-section" data-aos="fade-up">
          <h3>Education</h3>
          <ul className="creator-points">
            <li>
              MBA — Business & Marketing Operations (2025–2027), DAV University
            </li>
            <li>BCA — Computer Applications (2022–2025), DAV University</li>
            <li>12th (Commerce + Mathematics), Doaba College</li>
            <li>10th Standard, Hemkunt Public School</li>
          </ul>
        </div>

        <div className="creator-divider" />

        {/* SOCIAL */}
        <h3 data-aos="fade-up">Connect With Me</h3>
        <div className="social-links" data-aos="fade-up">
          <a href="mailto:nishant852800@gmail.com">
            <FaEnvelope />
          </a>
          <a
            href="https://twitter.com/nishant852800"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://nishant-chauhan-portfolio.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGlobe />
          </a>
          <a
            href="https://www.instagram.com/nishant.chauhan20/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/nishant-chauhan-870239234/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/treeHouse2023"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>

        {/* CONTACT FORM */}
        <div className="contact-form" data-aos="fade-up">
          <h3>Contact Me</h3>
          <p>Have a project, collaboration, or idea? Let’s build together.</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              className="contact-input"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              className="contact-input"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              className="contact-textarea"
              rows="4"
              placeholder="Your Message"
              required
            />

            <button
              type="submit"
              className="contact-submit-btn"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="form-success">Message sent successfully</p>
            )}
            {status === "error" && (
              <p className="form-error">Something went wrong. Try again.</p>
            )}
          </form>
        </div>

        <Link to="/" className="back-btn">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default AboutCreator;

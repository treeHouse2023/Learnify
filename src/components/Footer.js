import React from "react";
import {
  FaEnvelope,
  FaTwitter,
  FaGlobe,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaArrowUp,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>

        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Nishant Chauhan</h3>
            <p>
              Frontend Developer focused on building clean, performant, and
              visually engaging web experiences.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <a href="mailto:nishant852800@gmail.com">nishant852800@gmail.com</a>
            <a
              href="https://nishant-chauhan-portfolio.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio Website
            </a>
          </div>
        </div>

        <div className="social-links">
          <a href="mailto:nishant852800@gmail.com" aria-label="email">
            <FaEnvelope />
          </a>
          <a
            href="https://twitter.com/nishant852800"
            target="_blank"
            rel="noreferrer"
            aria-label="twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://nishant-chauhan-portfolio.vercel.app/"
            target="_blank"
            rel="noreferrer"
            aria-label="website"
          >
            <FaGlobe />
          </a>
          <a
            href="https://www.instagram.com/nishant.chauhan20/"
            target="_blank"
            rel="noreferrer"
            aria-label="instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/nishant-chauhan-870239234/"
            target="_blank"
            rel="noreferrer"
            aria-label="linkedin"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/treeHouse2023"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
          >
            <FaGithub />
          </a>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Nishant Chauhan Built LearniFy with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

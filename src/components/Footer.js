import React from "react";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <button
          onClick={scrollToTop}
          className="back-to-top"
          aria-label="Go back to top"
        >
          <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </button>

        <div className="social-links">
          <a
            href="https://x.com/nishant852800"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="twitter"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/nishant.chauhan20/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#" aria-label="home">
            <i className="fa-solid fa-house"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nishant-chauhan-870239234/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="linkedin"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/treeHouse2023"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>

        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()}{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            Nishant Chauhan
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

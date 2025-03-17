import React from "react";
import "./Footer.css"; // Assuming you will add CSS styles in a separate file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <a href="#" className="back-to-top" aria-label="go back to top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </a>
        <div className="social-links">
          <a
            href="https://x.com/nishant852800"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="twitter"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/nishant.chauhan20/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href=""
            target="_self"
            rel="noopener noreferrer"
            aria-label="codepen"
          >
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
          © <span id="year">{new Date().getFullYear()}</span>
          <a href="" target="_blank" rel="noopener noreferrer">
            Nishant Chauhan
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutCreator.css";
import creatorImage from "./profile.png";
import {
  FaEnvelope,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";

function AboutCreator() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="about-creator-section">
      <div className="container text-white">
        <h1 className="display-4 mb-4" data-aos="fade-down">
          About the Creator
        </h1>
        <img
          src={creatorImage}
          alt="Creator"
          className="img-fluid rounded-circle mb-4 creator-image"
          data-aos="zoom-in"
        />
        <p className="lead" data-aos="fade-up">
          <strong>Nishant Chauhan</strong>
          <br />
          Computer Application student | Web developer | Freelance video editor
          | Graphic Designer | Digital Marketing | AI & ML enthusiast
        </p>
        <p data-aos="fade-up" data-aos-delay="200">
          Passionate about building Digital Experiences, I blend Technology,
          Creativity, and Marketing to craft impactful solutions. Always
          exploring, always Evolving.
        </p>
        <hr data-aos="fade-up" data-aos-delay="300" />

        {/* Follow the Creator Section */}
        <h3 className="mt-4" data-aos="fade-up" data-aos-delay="400">
          Follow the Creator
        </h3>
        <p data-aos="fade-up" data-aos-delay="500">
          Stay connected and explore more of my work:
        </p>
        <div className="social-links" data-aos="fade-up" data-aos-delay="600">
          <a href="mailto:nishant852800@gmail.com" aria-label="Email">
            <FaEnvelope className="social-icon" />
          </a>
          <a
            href="https://twitter.com/nishant852800"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="social-icon" />
          </a>
          <a
            href="https://nishant-chauhan-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Portfolio"
          >
            <FaGlobe className="social-icon" />
          </a>

          <a
            href="https://www.instagram.com/nishant.chauhan20/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/nishant-chauhan-870239234/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="social-icon" />
          </a>
          <a
            href="https://github.com/treeHouse2023"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="social-icon" />
          </a>
        </div>

        {/* Contact Form */}
        <div className="contact-form" data-aos="fade-up" data-aos-delay="700">
          <h3>Contact Me</h3>
          <p>
            Have a question, suggestion, or just want to say hello? Drop me a
            message!
          </p>
          <form action="https://api.web3forms.com/submit" method="POST">
            <input
              type="hidden"
              name="access_key"
              value="1ef5c2bb-348c-4c9d-a22d-1acb5ec90420"
            />
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
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
            <button type="submit" className="contact-submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AboutCreator;

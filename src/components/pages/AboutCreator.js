import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
      <div className="container text-white text-center">
        <h1 className="display-4 mb-4" data-aos="fade-down">
          About the Creator
        </h1>

        {/* Profile Image */}
        <img
          src={creatorImage}
          alt="Nishant Chauhan"
          className="img-fluid rounded-circle mb-4 creator-image"
          data-aos="zoom-in"
        />

        {/* Bio Section */}
        <p className="lead" data-aos="fade-up">
          <strong>Nishant Chauhan</strong>
          <br />
          BCA Student | Web Developer | Freelance Video Editor | Graphic
          Designer | Digital Marketer | AI & ML Enthusiast
        </p>
        <p data-aos="fade-up" data-aos-delay="200">
          I blend design, code, and strategy to build seamless digital
          experiences. Whether it's a sleek website or an engaging video, I’m
          always learning, improving, and pushing creative boundaries.
        </p>
        <hr data-aos="fade-up" data-aos-delay="300" />

        {/* Social Media Links */}
        <h3 className="mt-4" data-aos="fade-up" data-aos-delay="400">
          Follow Me Online
        </h3>
        <p data-aos="fade-up" data-aos-delay="500">
          Let’s connect and collaborate!
        </p>
        <div className="social-links" data-aos="fade-up" data-aos-delay="600">
          <a
            href="mailto:nishant852800@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
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
        <div
          className="contact-form mt-5"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <h3>Contact Me</h3>
          <p>
            If you have an idea, a project, or just want to chat — I’d love to
            hear from you!
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

        {/* Back to Home */}
        <div
          className="text-center mt-5"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <Link to="/">
            <button className="btn btn-outline-light">Back to Home</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutCreator;

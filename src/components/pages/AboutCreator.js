import React, { useEffect } from "react";
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

function AboutCreator() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

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

        <p className="creator-roles" data-aos="fade-up" data-aos-delay="100">
          Web Developer (React.js) • Digital Marketing Strategist <br />
          AI & ML Enthusiast • Content Creator • MBA Aspirant
        </p>

        <div
          className="creator-section"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3>Who I Am</h3>
          <p>
            I am a results-driven digital professional with over two years of
            hands-on experience at the intersection of technology, marketing,
            and business strategy. My core strength lies in building
            user-centric digital products that solve real academic and business
            problems.
          </p>
          <p>
            My journey spans web development, digital marketing, content
            strategy, video production, and AI-powered solutions. I have worked
            with startups, educational platforms, and freelance clients, helping
            them scale through modern web experiences and performance-driven
            digital systems.
          </p>
        </div>

        <div
          className="creator-highlight"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3>Why I Built This Platform</h3>
          <p>
            During my academic journey, I experienced how scattered,
            inaccessible, and unreliable previous-year question papers could be.
            This inspired me to build a clean, centralized, and verified
            Question Paper Hub for students of my college.
          </p>
        </div>

        <div
          className="creator-highlight"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p>
            Today, this platform serves{" "}
            <strong>100+ monthly student users</strong>, helping them prepare
            efficiently and confidently — completely free of cost, without
            distractions or unofficial sources.
          </p>
        </div>

        <div
          className="creator-section"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h3>Professional Highlights</h3>
          <ul className="creator-points">
            <li>3× Business Hackathon Winner (Rank 1)</li>
            <li>Rank 1 – Gen AI Academy (Google Cloud)</li>
            <li>Former Google Developer Group (GDG) Member</li>
            <li>Digital Media Executive & Freelance Consultant</li>
            <li>Experience with AI, Generative Models & LLM-based systems</li>
            <li>Founder & Community Builder (Education Platforms)</li>
          </ul>
        </div>

        <div
          className="creator-section"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <p>
            Currently pursuing my MBA, I am focused on solving business
            challenges through technology, building scalable platforms, and
            creating long-term digital impact at the intersection of innovation,
            education, and strategy.
          </p>
        </div>

        <div className="creator-divider" />

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

        <div className="contact-form" data-aos="fade-up">
          <h3>Contact Me</h3>
          <p>
            Have a project, collaboration, or idea in mind? Let’s build
            something impactful together.
          </p>

          <form action="https://api.web3forms.com/submit" method="POST">
            <input
              type="hidden"
              name="access_key"
              value="REPLACE_WITH_YOUR_KEY"
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
              rows="4"
              placeholder="Your Message"
              required
            />
            <button type="submit" className="contact-submit-btn">
              Send Message
            </button>
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

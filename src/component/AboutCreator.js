import React from "react";
import "./AboutCreator.css";
import creatorImage from "./profile.png"; // Update this with the correct path to your image

function AboutCreator() {
  return (
    <section className="about-creator-section d-flex align-items-center justify-content-center">
      <div className="container p-5 text-white">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h1 className="display-4 mb-4">About the Creator</h1>
            <div className="creator-info">
              <img
                src={creatorImage}
                alt="Creator"
                className="img-fluid rounded-circle mb-4 creator-image"
              />
              <p className="lead">
                Nishant Chauhan
                <br />
                Computer Application Student | Web Developer | Freelance Video
                Editor | Digital Marketing
                <br />
              </p>
              <p>
                I am a Computer Application student with a strong focus on web
                development, video editing, and digital marketing. Combining
                academic knowledge with practical experience, I bring innovative
                solutions to dynamic teams and projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCreator;

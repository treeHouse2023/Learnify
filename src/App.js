import React, { useRef } from "react";
import NavBar from "./component/NavBar";
import LandingPage from "./component/LandingPage";
import SharingPage from "./component/SharingPage";
import UploadedResources from "./component/UploadedResources";
import AboutCreator from "./component/AboutCreator";
import Guidelines from "./component/Guidelines";
import About from "./component/About";
import Footer from "./component/Footer";

function App() {
  const landingPageRef = useRef(null);
  const sharingPageRef = useRef(null);
  const uploadedResourcesRef = useRef(null); // This ref is for the UploadedResources section
  const aboutCreatorRef = useRef(null);
  const guidelinesRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <NavBar
        onSearchClick={() => scrollToSection(landingPageRef)}
        onBrowseClick={() => scrollToSection(sharingPageRef)}
        onUploadedResourcesClick={() => scrollToSection(uploadedResourcesRef)} // Pass the scroll function
        onAboutClick={() => scrollToSection(aboutRef)}
        onGuidelinesClick={() => scrollToSection(guidelinesRef)}
        onAboutCreatorClick={() => scrollToSection(aboutCreatorRef)}
      />
      <div ref={sharingPageRef}>
        <SharingPage />
      </div>
      <div ref={landingPageRef}>
        <LandingPage />
      </div>
      <div ref={uploadedResourcesRef}>
        <UploadedResources /> {/* This is the section to scroll to */}
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={guidelinesRef}>
        <Guidelines />
      </div>
      <div ref={aboutCreatorRef}>
        <AboutCreator />
      </div>
      <Footer /> {/* Add the Footer component */}
    </>
  );
}

export default App;

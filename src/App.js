import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import "./App.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";

import About from "./components/pages/About";
import AboutCreator from "./components/pages/AboutCreator";
import GuidelinesPage from "./components/pages/GuidelinesPage";
import LandingPage from "./components/pages/LandingPage";
import SharingPage from "./components/pages/SharingPage";

function App() {
  return (
    <Router>
      <div className="video-bg-wrapper">
        <video autoPlay loop muted playsInline>
          <source src="/black-hole.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 🌌 APP CONTENT */}
      <div className="app-content">
        <ScrollToTop />
        <NavBar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sharing" element={<SharingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/guidelinespage" element={<GuidelinesPage />} />
          <Route path="/about-creator" element={<AboutCreator />} />
        </Routes>

        <Footer />
      </div>

      <Analytics />
    </Router>
  );
}

export default App;

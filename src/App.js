import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";

// Page Components
import About from "./components/pages/About";
import AboutCreator from "./components/pages/AboutCreator";
import GuidelinesPage from "./components/pages/GuidelinesPage";
import LandingPage from "./components/pages/LandingPage";
import SharingPage from "./components/pages/SharingPage";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* 👈 Scrolls to top on route change */}
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sharing" element={<SharingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/guidelinespage" element={<GuidelinesPage />} />
        <Route path="/about-creator" element={<AboutCreator />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

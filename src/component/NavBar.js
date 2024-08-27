import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css"; // Import custom CSS

const NavBar = ({
  onSearchClick,
  onBrowseClick,
  onUploadedResourcesClick, // This prop must be correctly defined and used
  onAboutClick,
  onGuidelinesClick,
  onAboutCreatorClick,
}) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" className={`custom-navbar ${isSticky ? "sticky" : ""}`}>
      <Container>
        <Navbar.Brand style={{ color: "#fff", fontWeight: "bold" }}>
          Learnify
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              onClick={onBrowseClick}
              style={{ color: "#fff", margin: "0 10px" }}
            >
              Upload Question Papers
            </Nav.Link>

            <Nav.Link
              onClick={onSearchClick}
              style={{ color: "#fff", margin: "0 10px" }}
            >
              Search Question Papers
            </Nav.Link>
            <Nav.Link
              onClick={onUploadedResourcesClick} // Use the correct prop here
              style={{ color: "#fff", margin: "0 10px" }}
            >
              Uploaded Question Papers
            </Nav.Link>
            <Nav.Link
              onClick={onAboutClick}
              style={{ color: "#fff", margin: "0 10px" }}
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={onGuidelinesClick}
              style={{ color: "#fff", margin: "0 10px" }}
            >
              Guidelines
            </Nav.Link>
            <Nav.Link
              onClick={onAboutCreatorClick}
              style={{ color: "#fff", margin: "0 10px" }}
            >
              About Creator
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

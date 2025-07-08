// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    // Create an IntersectionObserver to track the visibility of the footer
    const footerElement = document.getElementById("footer");

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Show scroll button only when the footer is in view
        setShowScrollButton(entry.isIntersecting);
      },
      {
        rootMargin: "0px",
        threshold: 0.5, // Trigger when at least 50% of the footer is in view
      }
    );

    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      // Clean up observer on component unmount
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scroll to the top when any footer link is clicked
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      id="footer" // Add an ID to the footer element for the IntersectionObserver to target
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "#f8f9fa", // Black background
        padding: "40px 0",
        color: "white",
      }}
    >
      {/* Footer Content */}
      <div className="container">
        <div className="row text-md-left align-items-start">
          {/* Logo Column */}
          <div className="col-md-3 d-flex flex-column align-items-center align-items-md-start">
            <img
              src="logo-baibrus.png"
              alt="Logo"
              style={{
                width: "120px",
                marginBottom: "-3vh",
                marginTop: "-2vh",
              }}
            />
            <p className="mt-5 text-dark" style={{ fontSize: "14px" }}>
              Baibrus Technologies was established in 2021 as a professional IT
              consultant with a vision to cater to private and public industries
              lacking informational technology.
            </p>
          </div>

          {/* Solutions Column */}
          <div className="col-md-3">
            <h5
              style={{
                fontWeight: "bold",
                paddingLeft: "50px",
                color: "#FF0000",
              }}
            >
              Solutions
            </h5>
            <ul className="list-unstyled arrow-list ms-4 ">
              <li>
                <a href="#" className="footer-link">
                  <Link
                    to="/SoftwareConsulting"
                    className="text-dark"
                    style={{ textDecoration: "none", whiteSpace: "nowrap",fontWeight:"500" }}
                    onClick={handleLinkClick} // Trigger scroll to top
                  >
                    Software Consulting & Integration
                  </Link>
                </a>
              </li>
              <li>
                <a href="#" className="footer-link text-white">
                  <Link
                    to="/SoftwareDevelopment"
                    className="text-dark"
                    style={{ textDecoration: "none",fontWeight:"500" }}
                    onClick={handleLinkClick} // Trigger scroll to top
                  >
                    Software Development
                  </Link>
                </a>
              </li>
              <li>
                <a href="#" className="footer-link text-white">
                  <Link
                    to="/EnterpriseApp"
                    className="text-dark"
                    style={{ textDecoration: "none",fontWeight:"500" }}
                    onClick={handleLinkClick} // Trigger scroll to top
                  >
                    Enterprise Application
                  </Link>
                </a>
              </li>
              <li>
                <a href="#" className="footer-link text-white">
                  <Link
                    to="/techdevelopment"
                    className="text-dark"
                    style={{ textDecoration: "none",fontWeight:"500" }}
                    onClick={handleLinkClick} // Trigger scroll to top
                  >
                    Technology Development
                  </Link>
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="col-md-3">
            <h5
              style={{
                fontWeight: "bold",
                paddingLeft: "45px",
                color: "#FF0000",
              }}
            >
              Company
            </h5>
            <ul className="list-unstyled arrow-list ms-5 ">
              <li>
                <a href="#" className="footer-link text-white">
                  <Link
                    to="/Mission"
                    className="text-dark"
                    style={{ textDecoration: "none",fontWeight:"500" }}
                    onClick={handleLinkClick} // Trigger scroll to top
                  >
                    Our Mission
                  </Link>
                </a>
              </li>
              <li>
                <a href="#" className="footer-link text-white">
                  <Link
                    to="/vision"
                    className="text-dark"
                    style={{ textDecoration: "none",fontWeight:"500" }}
                    onClick={handleLinkClick} // Trigger scroll to top
                  >
                    Our Vision
                  </Link>
                </a>
              </li>
              <li>
                <a href="#" className="footer-link text-white">
                  <Link
                    to="/philosophy"
                    className="text-dark"
                    style={{ textDecoration: "none",fontWeight:"500" }}
                    onClick={handleLinkClick} // Trigger scroll to top
                  >
                    Our Philosophy
                  </Link>
                </a>
              </li>
              <li>
                <a href="#" className="footer-link text-white">
                  <Link
                    to="/strategy"
                    className="text-dark"
                    style={{ textDecoration: "none",fontWeight:"500" }}
                    onClick={handleLinkClick} // Trigger scroll to top
                  >
                    Our Strategy
                  </Link>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div className="col-md-3">
            <h5 style={{ fontWeight: "bold", color: "#FF0000" }}>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="tel:+923002520244" className="footer-link text-dark fw-bold">
                  <i className="fas fa-phone-alt"></i> +92-300-2520244
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@company.com"
                  className="footer-link text-dark fw-bold"
                >
                  <i className="fas fa-envelope"></i> info@baibrus.com
                </a>
              </li>
              <li>
                <a href="#" className="footer-link text-dark fw-bold">
                  <i className="fas fa-map-marker-alt"></i> 
                  <Link
                    to="/contact"
                    className="text-dark"
                    style={{ textDecoration: "none" }}
                    onClick={handleLinkClick} // Trigger scroll to top
                  >
                    Visit us
                  </Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr
        style={{
          borderColor: "black",
          borderWidth: "3px",
          marginLeft: "60px",
          marginRight: "60px",
          
        }}
      />

      {/* Footer Bottom Content */}
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-dark" style={{ textAlign: "left" }}>
            <p style={{ margin: "0", fontSize: "14px" }}>
              © 2025 Baibrus Technologies. All Rights Reserved.
            </p>
          </div>
          <div className="col-md-6" style={{ textAlign: "right" }}>
            <a
              href="#"
              className="footer-link text-dark"
              style={{ fontSize: "14px", marginRight: "20px" }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="footer-link text-dark"
              style={{ fontSize: "14px" }}
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>

      {/* Scroll-to-Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#e03334", // Red color for the button
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)",
            cursor: "pointer",
          }}
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
};

export default Footer;

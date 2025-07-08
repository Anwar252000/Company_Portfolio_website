// eslint-disable-next-line no-unused-vars
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "#ffffff", // White background
        color: "#0149ae", // Premium dark color for text
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0)", // Subtle shadow
        padding: "1rem 1rem", // Padding for alignment
      }}
    >
      <div className="container-fluid">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img
            src="logo-baibrus.png"
            alt="Logo"
            style={{ width: "200px", height: "auto" }} // Adjust logo size
          />
        </Link>

        {/* Toggle button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div
          className="collapse navbar-collapse"
          id="navbarNavDropdown"
          style={{ fontSize: "21px" }}
        >
          <ul className="navbar-nav mx-auto mb-lg-0">
            {/* Home */}
            <li className="nav-item me-5">
              <Link
                to="/"
                className="nav-link fw-bold"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontWeight: "500",
                  transition: "color 0.3s ease-in-out",
                }}
              >
                Home
              </Link>
            </li>

            {/* About Dropdown */}
            <li className="nav-item dropdown me-5">
              <a
                className="nav-link dropdown-toggle fw-bold"
                href="#"
                id="navbarDropdown1"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  color: "black",
                  fontWeight: "500",
                  textDecoration: "none",
                }}
              >
                About
              </a>
              <ul
                className="dropdown-menu border-0 shadow"
                style={{ backgroundColor: "#ffffff", fontSize: "18px" }}
              >
                <li>
                  <Link
                    to="/Mission"
                    className="dropdown-item fw-bold"
                    style={{
                      color: "black",
                      textDecoration: "none",
                    }}
                  >
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link
                    to="/vision"
                    className="dropdown-item fw-bold"
                    style={{
                      color: "black",
                      textDecoration: "none",
                    }}
                  >
                    Our Vision
                  </Link>
                </li>
                <li>
                  <Link
                    to="/philosophy"
                    className="dropdown-item fw-bold"
                    style={{
                      color: "black",
                      textDecoration: "none",
                    }}
                  >
                    Our Philosophy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/strategy"
                    className="dropdown-item fw-bold"
                    style={{
                      color: "black",
                      textDecoration: "none",
                    }}
                  >
                    Our Strategy
                  </Link>
                </li>
              </ul>
            </li>

            {/* Services Dropdown */}
            <li className="nav-item dropdown me-5">
              <a
                className="nav-link dropdown-toggle fw-bold"
                href="#"
                id="navbarDropdown2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  color: "black",
                  fontWeight: "500",
                  textDecoration: "none",
                }}
              >
                Services
              </a>
              <ul
                className="dropdown-menu border-0 shadow fw-bold"
                style={{ backgroundColor: "#ffffff", fontSize: "18px" }}
              >
                <li>
                  <Link
                    to="/SoftwareConsulting"
                    className="dropdown-item fw-bold"
                    style={{
                      color: "black",
                      textDecoration: "none",
                    }}
                  >
                    Software Consulting and Integration
                  </Link>
                </li>
                <li>
                  <Link
                    to="/SoftwareDevelopment"
                    className="dropdown-item fw-bold"
                    style={{
                      color: "black",
                      textDecoration: "none",
                    }}
                  >
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/EnterpriseApp"
                    className="dropdown-item fw-bold"
                    style={{
                      color: "black",
                      textDecoration: "none",
                    }}
                  >
                    Enterprise Application
                  </Link>
                </li>
                <li>
                  <Link
                    to="/techdevelopment"
                    className="dropdown-item fw-bold"
                    style={{
                      color: "black",
                      textDecoration: "none",
                    }}
                  >
                    Technology Development
                  </Link>
                </li>
              </ul>
            </li>

            {/* Career */}
            <li className="nav-item me-5 fw-bold">
              <Link
                to="/Career"
                className="nav-link fw-bold"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontWeight: "500",
                  transition: "color 0.3s ease-in-out",
                }}
              >
                Career
              </Link>
            </li>
            <li className="nav-item me-5 fw-bold">
              <Link
                to="/learnmore"
                className="nav-link fw-bold"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontWeight: "500",
                  transition: "color 0.3s ease-in-out",
                }}
              >
                Services & Support
              </Link>
            </li>
          </ul>

          {/* Contact Button */}
          <button
            className="btn"
            style={{
              backgroundColor: "#e03334",
              color: "#ffffff",
              fontSize: "1rem",
              fontWeight: "500",
              borderRadius: "25px",
              padding: "0.5rem 1.5rem",
              border: "none",
              transition: "background-color 0.3s ease-in-out",
            }}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#e03334")}
          >
            <Link
              to="/Contact"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              Contact
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;

// eslint-disable-next-line no-unused-vars
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const MissionVisionPhilosophyStrategy = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <section
        style={{
          backgroundColor: "#f4f4f4",
          padding: "50px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <div className="row">
            {/* Card 1 - Our Mission */}
            <div className="col-lg-3 col-md-6 col-12 mb-4">
              <div
                className="service-box service-card"
                style={{
                  backgroundColor: "white",
                  padding: "40px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                  borderRadius: "8px",
                }}
              >
                <i
                  className="fas fa-bullseye"
                  style={{
                    fontSize: "3rem",
                    color: "#FF0000",
                    marginBottom: "20px",
                  }}
                ></i>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  <Link
                    to="/mission"
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={scrollToTop}
                  >
                    Our Mission
                  </Link>
                </h3>
                <p>
                  We aim to deliver high-quality technology solutions that empower businesses to innovate, grow, and achieve their goals.
                </p>
              </div>
            </div>

            {/* Card 2 - Our Vision */}
            <div className="col-lg-3 col-md-6 col-12 mb-4">
              <div
                className="service-box service-card"
                style={{
                  backgroundColor: "white",
                  padding: "40px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                  borderRadius: "8px",
                }}
              >
                <i
                  className="fas fa-eye"
                  style={{
                    fontSize: "3rem",
                    color: "#FF0000",
                    marginBottom: "20px",
                  }}
                ></i>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  <Link
                    to="/vision"
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={scrollToTop}
                  >
                    Our Vision
                  </Link>
                </h3>
                <p>
                  To be a global leader in technology consulting and development, helping businesses navigate the digital landscape with ease.
                </p>
              </div>
            </div>

            {/* Card 3 - Our Philosophy */}
            <div className="col-lg-3 col-md-6 col-12 mb-4">
              <div
                className="service-box service-card"
                style={{
                  backgroundColor: "white",
                  padding: "40px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                  borderRadius: "8px",
                }}
              >
                <i
                  className="fas fa-quote-left"
                  style={{
                    fontSize: "3rem",
                    color: "#FF0000",
                    marginBottom: "20px",
                  }}
                ></i>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  <Link
                    to="/philosophy"
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={scrollToTop}
                  >
                    Our Philosophy
                  </Link>
                </h3>
                <p>
                  We believe in fostering collaboration, continuous learning, and a deep commitment to delivering exceptional results.
                </p>
              </div>
            </div>

            {/* Card 4 - Our Strategy */}
            <div className="col-lg-3 col-md-6 col-12 mb-4">
              <div
                className="service-box service-card"
                style={{
                  backgroundColor: "white",
                  padding: "40px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                  borderRadius: "8px",
                }}
              >
                <i
                  className="fas fa-chart-line"
                  style={{
                    fontSize: "3rem",
                    color: "#FF0000",
                    marginBottom: "20px",
                  }}
                ></i>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  <Link
                    to="/strategy"
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={scrollToTop}
                  >
                    Our Strategy
                  </Link>
                </h3>
                <p>
                  Our strategy focuses on creating scalable, data-driven solutions that enable our clients to stay ahead in an ever-evolving tech landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS for hover bump effect */}
      <style>
        {`
          .service-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease; /* Adding smooth transitions */
          }

          .service-card:hover {
            transform: scale(1.1); /* Smooth zoom effect */
            box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.2); /* Elevated shadow */
            opacity: 0.9; /* Slight opacity change */
          }
        `}
      </style>
    </div>
  );
};

export default MissionVisionPhilosophyStrategy;

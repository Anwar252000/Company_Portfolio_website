// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Technologypg = () => {
  const location = useLocation();  // Get the current location

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the location changes
  }, [location]);  // Trigger scrollTo on location change

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".stagger-card");
      cards.forEach((card) => {
        const cardPosition = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardPosition < windowHeight && cardPosition > 0) {
          card.classList.add("animate");
        } else {
          card.classList.remove("animate");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Background Container */}
      <div
        className="background-container"
        style={{
          boxShadow: "0 8px 50px rgba(0, 0, 0, 0.8)", // Add bottom blur shadow
        }}
      >
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-md-3 mb-4">
              <div className="card stagger-card up position-relative">
                <img
                  src="tech1.jpg"
                  alt="Card 1"
                  className="card-img-top img-fluid"
                />
                <div className="card-overlay">
                  <h4 className="card-title fw-bold">
                    <Link
                      to="/mission"
                      style={{ textDecoration: "none", color: "white" }}
                      onClick={handleLinkClick}
                    >
                      Our Mission
                    </Link>
                  </h4>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3 mb-4">
              <div className="card stagger-card down position-relative">
                <img
                  src="tech2.jpg"
                  alt="Card 2"
                  className="card-img-top img-fluid"
                />
                <div className="card-overlay">
                  <h4 className="card-title fw-bold">
                    <Link
                      to="/vision"
                      style={{ textDecoration: "none", color: "white" }}
                      onClick={handleLinkClick}
                    >
                      Our Vision
                    </Link>
                  </h4>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3 mb-4">
              <div className="card stagger-card up position-relative">
                <img
                  src="tech3.jpg"
                  alt="Card 3"
                  className="card-img-top img-fluid"
                />
                <div className="card-overlay">
                  <h4 className="card-title fw-bold">
                    <Link
                      to="/philosophy"
                      style={{ textDecoration: "none", color: "white" }}
                      onClick={handleLinkClick}
                    >
                      Our Philosophy
                    </Link>
                  </h4>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3 mb-4">
              <div className="card stagger-card down position-relative">
                <img
                  src="tech4.jpg"
                  alt="Card 4"
                  className="card-img-top img-fluid"
                  style={{ height: "205px" }}
                />
                <div className="card-overlay">
                  <h4 className="card-title fw-bold">
                    <Link
                      to="/strategy"
                      style={{ textDecoration: "none", color: "white" }}
                      onClick={handleLinkClick}
                    >
                      Our Strategy
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Red Circle Section */}
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        {/* Your Red Circle Section */}
      </div>

      <div className="text-center px-3">
        <p className="text-dark fw-semibold" style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
          {/* Your text content */}
        </p>
      </div>
    </>
  );
};

export default Technologypg;

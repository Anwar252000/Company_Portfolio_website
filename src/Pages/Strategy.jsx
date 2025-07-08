// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Strategy = () => {
  const [isVisible, setIsVisible] = useState(false); // Track visibility of the image
  const imageRef = useRef(null); // Reference to the image element

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when the image enters the viewport
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the image is visible
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current); // Observe the image element
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current); // Cleanup observer on unmount
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Strategy Section */}
      <div
        className="container-fluid py-5 d-flex flex-column-reverse flex-lg-row align-items-center"
        style={{
          backgroundColor: "#f8f9fa",
        }}
      >
        {/* Image on the Left */}
        <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
          <img
            ref={imageRef}
            src="Strategy.png"
            alt="Strategy"
            className="img-fluid"
            style={{
              maxWidth: "90%",
              transform: isVisible ? "scale(1)" : "scale(0.8)", // Zoom effect
              opacity: isVisible ? 1 : 0, // Fade in effect
              transition: "transform 1.5s ease-out, opacity 1s ease-out",
            }}
          />
        </div>

        {/* Content on the Right */}
        <div className="col-lg-6 col-12 text-center text-lg-start">
          <h1 className="display-5 fw-bold mb-4 text-dark">Our Strategy</h1>
          <p className="text-muted" style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            Our strategy revolves around putting customers at the center of our
            actions while leveraging data-driven insights to guide decision-making.
            We focus on a customer-first mindset, striving to create value at every
            step while staying ahead of industry trends. We believe in the power of
            innovation, collaboration, and agility to achieve sustainable growth.
          </p>
        </div>
      </div>

      {/* What Drives Our Strategy Section */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="mb-4 text-danger fw-bold">What Drives Our Strategy</h2>
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-4 col-12">
              <div className="p-4 bg-white shadow rounded-3 h-100">
                <i className="fas fa-cogs text-danger mb-3" style={{ fontSize: "3rem" }}></i>
                <h5 className="fw-bold">Innovation at the Core</h5>
                <p className="text-muted">
                  We drive our strategy by integrating cutting-edge technology and innovation into every decision and action we take.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4 col-12">
              <div className="p-4 bg-white shadow rounded-3 h-100">
                <i className="fas fa-chart-line text-danger mb-3" style={{ fontSize: "3rem" }}></i>
                <h5 className="fw-bold">Data-Driven Decisions</h5>
                <p className="text-muted">
                  Our strategy is built on data. We analyze market trends, customer behavior, and performance metrics to optimize our processes.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4 col-12">
              <div className="p-4 bg-white shadow rounded-3 h-100">
                <i className="fas fa-users text-danger mb-3" style={{ fontSize: "3rem" }}></i>
                <h5 className="fw-bold">Customer-Centric Culture</h5>
                <p className="text-muted">
                  We deliver exceptional customer service and build long-term relationships, placing customers at the center of everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <div className="py-5 bg-white text-center">
        <h2 className="text-danger fw-bold mb-3">Join Our Strategic Vision</h2>
        <p className="text-muted mx-auto" style={{ maxWidth: "600px", lineHeight: "1.8" }}>
          Our strategy balances innovation with practical solutions. We simplify processes, enhance efficiency, and continually evolve to stay ahead.
        </p>
        <Link
          to="/learnmore"
          className="btn btn-danger mt-4 px-4 py-2 text-white fw-bold rounded-pill"
          onClick={scrollToTop}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Strategy;

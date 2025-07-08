// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Mainpage = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation when the component is mounted
    setAnimate(true);
  }, []);

  return (
    <div
      className="d-flex align-items-center"
      style={{
        height: "80vh",
        padding: "2rem", // Add padding for a clean look
        backgroundColor: "#f8f9fa", // Light gray background for contrast
      }}
    >
      {/* Left Content */}
      <div
        className="flex-grow-1"
        style={{
          maxWidth: "50%",
          textAlign: "left", // Align text to the left
        }}
      >
        <h1 className="display-3 fw-bold" style={{ color: "black" }}>
          Advance Technology
        </h1>
        <p style={{ fontSize: "1rem", marginTop: "1rem", color: "#333" }}>
          Advancing technology continuously reshapes our world, driving
          innovation in various sectors. From artificial intelligence to
          cutting-edge robotics, these advancements enhance efficiency and
          productivity across industries.
        </p>
        <button
          className="btn btn-primary mt-3"
          style={{
            fontSize: "1.2rem",
            backgroundColor: "#e03334", // Red background for the button
            borderRadius: "25px",
            padding: "0.5rem 1.5rem",
            border: "none",
            transition: "background-color 0.3s ease-in-out",
          }}
        >
          <Link
            to="/learnmore"
            className="text-white"
            style={{ textDecoration: "none" }}
          >
            Learn More
          </Link>
        </button>
      </div>

      {/* Right Image */}
      <div
        className={`flex-grow-1 d-flex justify-content-center align-items-center ${
          animate ? "slide-in" : ""
        }`}
        style={{ maxWidth: "50%" }}
      >
        <img
          src="mainpage.jpg"
          alt="Technology"
          style={{
            width: "100%",
            maxWidth: "600px",
            height: "auto",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)", // Add shadow for a premium look
          }}
        />
      </div>

      {/* CSS for Animation */}
      <style>
        {`
          .slide-in {
            animation: slideIn 1.1s ease-out forwards;
          }

          @keyframes slideIn {
            from {
              transform: translateX(100%); /* Start off-screen */
              opacity: 0; /* Start invisible */
            }
            to {
              transform: translateX(0); /* Final position */
              opacity: 1; /* Fully visible */
            }
          }
        `}
      </style>
    </div>
  );
};

export default Mainpage;

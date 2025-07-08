import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Trusted = () => {
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

  return (
    <div
      id="trusted-section"
      className="container-fluid p-5 d-flex flex-column flex-lg-row align-items-center"
      style={{
        backgroundColor: "#f8f9fa", // Light gray background for contrast
      }}
    >
      {/* Image on the Left Side */}
      <div
        className="col-lg-6 col-12 d-flex justify-content-center align-items-center mb-4 mb-lg-0"
        style={{
          height: "100%",
        }}
      >
        <img
          ref={imageRef}
          src="Strategy.png"
          alt="Innovative Technology"
          className="img-fluid"
          style={{
            maxWidth: "90%",
            transform: isVisible ? "translateX(0)" : "translateX(-100%)", // Move from off-screen left to its position
            opacity: isVisible ? 1 : 0, // Fade in as it slides
            transition: "transform 1.5s ease-out, opacity 1s ease-out", // Smooth transition for both transform and opacity
          }}
        />
      </div>

      {/* Content on the Right Side */}
      <div
        className="col-lg-6 col-12 d-flex flex-column justify-content-center align-items-start"
        style={{
          paddingLeft: "30px",
          textAlign: "left", // Align text to the left
        }}
      >
        <h2
          className="display-5 fw-bold mb-4"
          style={{
            color: "#333", // Neutral dark color
            fontSize: "3rem", // Set font size for large screens
          }}
        >
          Advancing Technology with Innovation
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#555", // Subtle gray for the paragraph
            lineHeight: "1.6",
          }}
        >
          Technology is transforming industries by creating smarter solutions,
          enhancing efficiency, and driving progress. With AI, automation, and
          data analytics, we are reshaping the future for a more connected and
          sustainable world.
        </p>
      </div>
    </div>
  );
};

export default Trusted;

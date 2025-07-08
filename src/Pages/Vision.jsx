import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Vision = () => {
  const [isVisible, setIsVisible] = useState(false); // Track visibility of the image
  const imageRef = useRef(null); // Reference to the image element

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when the image enters the viewport
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the image is visible
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
      {/* Vision Section */}
      <div
        id="vision-section"
        className="container-fluid p-5 d-flex flex-column flex-lg-row align-items-center"
        style={{
          minHeight: "80vh",
          backgroundColor: "#f8f9fa",
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
            src="vission.jpg"
            alt="Vision"
            className={`img-fluid ${isVisible ? "visible" : "invisible"}`}
            style={{
              maxWidth: "90%",
              transform: isVisible ? "scale(1)" : "scale(0.8)", // Scale down to 0.8 initially and zoom to 1
              opacity: isVisible ? 1 : 0, // Fade in as it zooms
              transition: "transform 1.5s ease-out, opacity 1s ease-out", // Smooth transition for both transform and opacity
            }}
          />
        </div>

        {/* Content on the Right Side */}
        <div className="col-lg-6 col-12 d-flex flex-column justify-content-center px-lg-5">
          <h1
            className="display-5 fw-bold mb-4 text-center text-lg-start"
            style={{
              color: "#333",
              fontSize: "calc(2.5rem + 1vw)", // Responsive font size
            }}
          >
            Our Vision
          </h1>
          <p
            className="text-center text-lg-start"
            style={{
              fontSize: "1.1rem",
              color: "#555",
              lineHeight: "1.6",
            }}
          >
            Our vision is to be a leading provider of cutting-edge technology
            solutions that drive innovation, growth, and success for our
            clients. We strive to develop exclusive and advanced solutions that
            create significant value for our clients and set them apart from
            their competitors. By leveraging our expertise and staying at the
            forefront of the latest technology trends, we aim to be the go-to
            partner for organizations seeking to achieve a sustainable and
            consistent business advantage. Ultimately, our goal is to make a
            positive impact on the world by empowering organizations to reach
            their full potential and thrive in the digital age.
          </p>
        </div>
      </div>

      {/* Our Focus Section with Cards */}
      <section
        style={{
          backgroundColor: "#f4f4f4",
          padding: "50px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2
            className="mb-4"
            style={{
              color: "#FF0000",
              fontSize: "calc(2rem + 0.5vw)",
              fontWeight: "bold",
            }}
          >
            What We Stand For
          </h2>
          <div className="row g-4">
            {[
              {
                icon: "fas fa-lightbulb",
                title: "Inspiring Future Generations",
                description:
                  "We aim to inspire the next generation of innovators, creators, and problem-solvers by providing a platform for learning and growth.",
              },
              {
                icon: "fas fa-handshake",
                title: "Empowering Change Makers",
                description:
                  "We are dedicated to empowering individuals and organizations to make a meaningful impact and create positive change across the world.",
              },
              {
                icon: "fas fa-users",
                title: "Collaborative Innovation",
                description:
                  "We are focused on fostering collaboration and community-building, empowering teams to work together and share innovative ideas for a sustainable future.",
              },
            ].map((service, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div
                  className="service-box p-4 shadow-sm rounded-3 bg-white h-100"
                  style={{ transition: "transform 0.3s ease" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <i
                    className={service.icon}
                    style={{
                      fontSize: "3rem",
                      color: "#FF0000",
                      marginBottom: "15px",
                    }}
                  ></i>
                  <h3 className="h5">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <div
        className="text-center py-4"
        style={{
          backgroundColor: "#fff",
          color: "#333",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "10px",
            color: "#ff0000",
          }}
        >
          Be Part of Our Vision
        </h2>
        <p className="mt-2" style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
          Join us in shaping the future with technology that drives innovation
          and success.
        </p>
        <button
          className="btn btn-danger mt-3 px-4 py-2"
          onClick={scrollToTop}
        >
          <Link
            to="/learnmore"
            className="text-white"
            style={{ textDecoration: "none" }}
          >
            Get Started
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Vision;

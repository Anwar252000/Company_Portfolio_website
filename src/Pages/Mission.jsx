import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Mission = () => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className="container-fluid px-4 py-5" style={{ backgroundColor: "#f8f9fa" }}>
      {/* Responsive Layout */}
      <div className="row align-items-center">
        {/* Image Section */}
        <div
          className="col-lg-6 col-12 d-flex justify-content-center"
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
              transform: isVisible ? "scale(1)" : "scale(0.8)",
              opacity: isVisible ? 1 : 0,
              transition: "transform 1.5s ease-out, opacity 1s ease-out",
            }}
          />
        </div>

        {/* Content Section */}
        <div className="col-lg-6 col-12 text-center text-lg-start">
          <h1
            className="display-4 fw-bold mb-4"
            style={{
              color: "#333",
              lineHeight: "1.3",
              fontSize: "calc(1.5rem + 1vw)",
            }}
          >
            Our Mission
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#555",
              lineHeight: "1.6",
            }}
          >
            Our mission is to empower organizations through innovative technology
            solutions that enable them to achieve their goals, improve their
            processes, and drive growth. We are committed to staying ahead of the
            curve in the rapidly-evolving technology landscape and providing our
            clients with cutting-edge solutions tailored to their specific needs.
          </p>
        </div>
      </div>

      {/* Who We Are Section */}
      <section
        style={{
          backgroundColor: "white",
          padding: "50px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2
            style={{
              color: "#FF0000",
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: "30px",
            }}
          >
            Who We Are
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}
          >
            At Baibrus Technologies, our mission is to empower organizations through
            cutting-edge technology, enabling them to thrive in a dynamic digital
            world.
          </p>
        </div>
      </section>

      {/* What We Stand For Section */}
      <section
        style={{
          backgroundColor: "#f4f4f4",
          padding: "50px ",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2
            style={{
              color: "#FF0000",
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: "30px",
            }}
          >
            What We Stand For
          </h2>
          <div className="row">
            {[
              {
                icon: "fas fa-leaf",
                title: "Sustainable Growth",
                text: "Supporting eco-friendly solutions that balance innovation and responsibility."
              },
              
              {
                icon: "fas fa-wifi",
                title: "Bridging the Digital Divide",
                text: "Creating accessible technology to eliminate barriers in the digital age.",
              },
              {
                icon: "fas fa-handshake",
                title: "Collaboration & Impact",
                text: "Working closely with clients to create meaningful change in communities.",
              },
            ].map((item, index) => (
              <div className="col-md-4 col-12 mb-4 mb-md-0" key={index}>
                <div
                  className="service-box"
                  style={{
                    backgroundColor: "white",
                    padding: "30px",
                    margin: "10px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                    transition: "transform 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <i
                    className={item.icon}
                    style={{
                      fontSize: "3rem",
                      color: "#FF0000",
                      marginBottom: "15px",
                    }}
                  ></i>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;

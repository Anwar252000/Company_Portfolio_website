import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Philosophy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Philosophy Section */}
      <div className="container-fluid py-5 d-flex flex-column flex-lg-row align-items-center bg-light">
        {/* Image */}
        <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
          <img style={{width:"90vh"}}
            ref={imageRef}
            src="philosophy.jpg"
            alt="Philosophy"
            className={`img-fluid ${isVisible ? "animate-visible" : "animate-hidden"}`}
            
          />
        </div>

        {/* Content */}
        <div className="col-lg-6 col-md-12 text-center text-lg-start px-3">
          <h1 className="display-5 fw-bold text-dark mb-4">Our Philosophy</h1>
          <p className="text-muted fs-5 lh-base">
            Our philosophy is centered around the idea that technology should not only solve
            problems but should also inspire creativity, innovation, and progress. We believe in
            a holistic approach, considering ethical implications, societal impact, and sustainability.
            By fostering collaboration and embracing diverse perspectives, we aim to create meaningful
            solutions that enrich the world.
          </p>
        </div>
      </div>

      {/* Philosophy Cards */}
      <section className="bg-light py-5 text-center">
        <div className="container">
          <h2 className="text-danger fw-bold mb-4">Our Core Philosophies</h2>
          <div className="row">
            {[
              {
                icon: "fas fa-brain",
                title: "Innovation at the Core",
                description:
                  "We believe that innovation drives progress, and we continuously strive to develop creative solutions that push the boundaries of what's possible.",
              },
              {
                icon: "fas fa-users",
                title: "Collaboration and Teamwork",
                description:
                  "Collaboration is key to success. We value teamwork and believe that diverse ideas lead to the most impactful solutions.",
              },
              {
                icon: "fas fa-globe-americas",
                title: "Sustainability for Future",
                description:
                  "We are committed to building solutions that not only solve problems today but also ensure a sustainable tomorrow for future generations.",
              },
            ].map((item, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                <div className="service-box bg-white shadow-sm p-4 rounded">
                  <i className={`${item.icon} text-danger fs-1 mb-3`} />
                  <h3 className="fs-4 fw-bold">{item.title}</h3>
                  <p className="text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <div className="text-center py-4 bg-white">
        <h2 className="text-danger fw-bold">Be Part of Our Philosophy</h2>
        <p className="text-muted fs-5">
          Join us in embracing a philosophy that drives meaningful change and lasting impact.
        </p>
        <button className="btn btn-danger rounded-pill px-4 py-2 mt-3" onClick={scrollToTop}>
          <Link to="/learnmore" className="text-white text-decoration-none">
            Get Started
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Philosophy;

// eslint-disable-next-line no-unused-vars
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const LearnMore = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="container-fluid py-2">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12 text-lg-start text-center mb-1 mb-lg-0">
            <h1 className="display-3 fw-bold text-black">Services and Support</h1>
            <p className="lead text-muted">
              The journey we’ve embarked on to make an impact through innovative solutions and dedicated service.
            </p>
          </div>
          <div className="col-lg-6 col-12 text-center">
            <img
              src="Learnmore.jpg"
              alt="Learn More"
              className="img-fluid rounded slideInRight"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center text-danger mb-4 fw-bold">Our Core Values</h2>
    <p className="text-center text-muted mb-5">
      Guiding principles that define our commitment to excellence, innovation, and integrity.
    </p>
    <div className="row gy-4">
      {[
        { title: "Innovation", icon: "fas fa-lightbulb" },
        { title: "Integrity", icon: "fas fa-balance-scale" },
        { title: "Sustainability", icon: "fas fa-leaf" },
        { title: "Collaboration", icon: "fas fa-users" },
        { title: "Excellence", icon: "fas fa-star" },
        { title: "Customer Focus", icon: "fas fa-handshake" },
      ].map((item, index) => (
        <div className="col-lg-4 col-md-6 col-12" key={index}>
          <div
            className="bg-white p-4 shadow-sm rounded text-center"
            style={{ transition: "transform 0.3s ease" }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <i className={`${item.icon} mb-3`} style={{ fontSize: "3rem", color: "#FF0000" }}></i>
            <h3 className="h5 fw-bold mb-3">{item.title}</h3>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae.
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section className="py-5 text-white" style={{ backgroundColor: "#e03334" }}>
        <div className="container text-center">
          <h2 className="mb-3 fw-bold">Join Our Journey</h2>
          <p className="lead mx-auto mb-4" style={{ maxWidth: "700px" }}>
            Ready to learn more about how we can work together? Contact us to find out how we can create value for you and your business.
          </p>
          <Link
            to="/contact"
            className="btn btn-light btn-lg text-danger fw-bold"
            onClick={scrollToTop}
          >
            Contact Us
          </Link>
        </div>
      </section>
      
      {/* CSS Keyframes */}
      <style>{`
        @keyframes slideInFromRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .slideInRight {
          animation: slideInFromRight 1.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default LearnMore;

// eslint-disable-next-line no-unused-vars
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const SoftwareDevelopment = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ paddingTop: "50px" }}>
      {/* Hero Section */}
      <section className="container-fluid py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12 text-lg-start text-center mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold text-black">Software Development Services</h1>
            <p className="lead text-muted">
              We are a team of skilled software developers dedicated to helping
              businesses achieve their technological goals. Our mission is to
              create high-quality, efficient, and innovative software solutions
              that meet the unique needs of each client.
            </p>
          </div>
          <div
            className="col-lg-6 col-12 text-center"
            style={{
              animation: "slideIn 1.5s ease-out", // Animation only on the image
            }}
          >
            <img
              src="softwaredev.jpg"
              alt="Software Development"
              className="img-fluid rounded"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center text-danger mb-4 fw-bold">Our Services</h2>
          <p className="text-center text-muted mb-5">
            We offer custom software development services to help businesses
            create software solutions that are specifically tailored to their
            needs. Our team of developers has experience in a wide range of
            technologies and programming languages, allowing us to create
            solutions that are both innovative and effective.
          </p>
          <div className="row gy-4">
            {[
              { title: "Custom Applications", icon: "fas fa-code" },
              { title: "Mobile Development", icon: "fas fa-mobile-alt" },
              { title: "Web Development", icon: "fas fa-globe" },
              { title: "Cloud Integration", icon: "fas fa-cloud" },
              { title: "AI Solutions", icon: "fas fa-robot" },
              { title: "Data Analytics", icon: "fas fa-chart-bar" },
            ].map((item, index) => (
              <div className="col-lg-4 col-md-6 col-12" key={index}>
                <div
                  className="bg-white p-4 shadow-sm rounded text-center"
                  style={{
                    transition: "transform 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <i
                    className={`${item.icon} mb-3`}
                    style={{ fontSize: "3rem", color: "#FF0000" }}
                  ></i>
                  <h3 className="h5 fw-bold mb-3">{item.title}</h3>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                    vitae.
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
          <h2 className="mb-3 fw-bold">Let's Build Something Amazing!</h2>
          <p className="lead mx-auto mb-4" style={{ maxWidth: "700px" }}>
            Ready to bring your ideas to life? Contact us today to learn how we
            can develop a solution tailored to your needs.
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
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default SoftwareDevelopment;

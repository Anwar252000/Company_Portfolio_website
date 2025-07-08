// eslint-disable-next-line no-unused-vars
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const EnterprisesApplication = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ paddingTop: "50px" }}>
      {/* Hero Section */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold text-dark mb-3">
              Enterprise Application Services
            </h1>
            <p className="fs-5 text-muted">
              We are a team of experienced professionals who specialize in
              developing and implementing enterprise-level software solutions. Our
              mission is to help businesses optimize their operations by providing
              innovative and efficient software applications.
            </p>
          </div>
          <div
            className="col-lg-6 text-center"
            style={{ animation: "slideIn 1.5s ease-out" }}
          >
            <img
              src="Enterprisesapp.jpg"
              alt="Enterprise Application"
              className="img-fluid rounded w-100"
              style={{ maxWidth: "650px" }}
            />
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-light py-5 text-center">
        <div className="container">
          <h2 className="text-danger fw-bold mb-4">Our Services</h2>
          <p className="text-muted">
            We offer enterprise application development services to help
            businesses create software solutions that are specifically tailored
            to their needs. Our team of developers has experience in a wide
            range of technologies and programming languages, allowing us to
            create solutions that are both innovative and effective.
          </p>
          <div className="row mt-4">
            {[
              { title: "ERP Development", icon: "fas fa-chart-line" },
              { title: "CRM Solutions", icon: "fas fa-users" },
              { title: "Business Intelligence", icon: "fas fa-database" },
              { title: "Workflow Automation", icon: "fas fa-sync-alt" },
              { title: "Custom Dashboards", icon: "fas fa-chart-pie" },
              { title: "Cloud Solutions", icon: "fas fa-cloud" },
            ].map((item, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
                <div
                  className="bg-white p-4 shadow-sm rounded text-center h-100"
                  style={{
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0px 6px 10px rgba(0, 0, 0, 0.2)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0px 4px 6px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  <i
                    className={`${item.icon} text-danger mb-3`}
                    style={{ fontSize: "2.5rem" }}
                  ></i>
                  <h3 className="fs-5 fw-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-danger text-white py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">Ready to Transform Your Enterprise?</h2>
          <p className="fs-5 mx-auto" style={{ maxWidth: "800px" }}>
            Contact us to learn more about our enterprise application services
            and how we can help you achieve your business objectives.
          </p>
          <button
            className="btn btn-light text-danger fw-bold rounded-pill mt-3 px-4 py-2"
            onClick={scrollToTop}
          >
            <Link to="/contact" className="text-decoration-none text-danger">
              Contact Us
            </Link>
          </button>
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

export default EnterprisesApplication;

// eslint-disable-next-line no-unused-vars
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const Consulting = () => {
  const scrollToTop = () => {
    window.scrollTo({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="container-fluid py-2">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12 text-lg-start text-center mb-1 mb-lg-0">
            <h1 className="display-3 fw-bold text-black">Consulting Services</h1>
            <p className="lead text-muted">
              Welcome to our software consulting and integrations page! We are
              a team of experienced professionals who specialize in helping
              businesses optimize their software solutions. Our mission is to
              provide the highest quality consulting and integration services
              to help our clients achieve their business goals.
            </p>
          </div>
          <div className="col-lg-6 col-12 text-center">
            <img
              src="consultancy.jpg"
              alt="Consulting"
              className="img-fluid rounded slideInRight"
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
            Our consulting services focus on helping businesses identify and
            address their software-related challenges. We work closely with our
            clients to gain an in-depth understanding of their business needs
            and offer customized solutions to meet those needs.
          </p>
          <div className="row gy-4">
            {[ 
              { title: "Software Analysis", icon: "fas fa-cogs" },
              { title: "Strategy Development", icon: "fas fa-lightbulb" },
              { title: "Custom Development", icon: "fas fa-laptop-code" },
              { title: "Vendor Management", icon: "fas fa-handshake" },
              { title: "Project Management", icon: "fas fa-tasks" },
              { title: "System Integration", icon: "fas fa-network-wired" },
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
          <h2 className="mb-3 fw-bold">Ready to Elevate Your Business?</h2>
          <p className="lead mx-auto mb-4" style={{ maxWidth: "700px" }}>
            Contact us to explore how our consulting services can help your
            business thrive in the digital age.
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

export default Consulting;

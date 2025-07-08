// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaHome, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function ContactPage() {
  return (
    <div
      style={{
        paddingTop: "50px",
        paddingBottom: "50px",
        backgroundColor: "#fff",
        color: "#333",
      }}
    >
      <div className="container">
        {/* Title Section */}
        <div className="text-center mb-5">
          <h1
            className="display-4 fw-bold mb-4"
            style={{
              letterSpacing: "2px",
              color: "#e03334",
            }}
          >
            CONTACT DETAILS
          </h1>
          <p className="lead fw-light" style={{ letterSpacing: "1px", color: "#555" }}>
            Give us a call or drop by anytime. We endeavor to answer all enquiries within 24 hours on business days.
          </p>
        </div>

        {/* Cards Section */}
        <div className="row row-cols-1 row-cols-md-3 justify-content-center">
          {/* Address Card */}
          <div className="col mb-4">
            <div
              className="card p-3 text-center"
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                border: "1px solid #e03334",
              }}
            >
              <FaHome size={38} color="#e03334" />
              <h4 className="" style={{ color: "#e03334", fontWeight: "bold" }}>
                Our Address:
              </h4>
              <p className="" style={{ fontSize: "1.1rem" }}>
                #505, 5th Floor, Progressive Square, Block-6, PECHS, Shahrah-e-Faisal, Karachi.
              </p>
            </div>
          </div>

          {/* Mailbox Card */}
          <div className="col mb-4">
            <div
              className="card p-4 text-center"
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                border: "1px solid #e03334",
              }}
            >
              <FaEnvelope size={40} color="#e03334" />
              <h4 className="" style={{ color: "#e03334", fontWeight: "bold" }}>
                Our Mailbox:
              </h4>
              <p className="mt-2" style={{ fontSize: "1.1rem" }}>
                info@baibrus.com
              </p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="col mb-4">
            <div
              className="card p-3 text-center"
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                border: "1px solid #e03334",
              }}
            >
              <FaPhoneAlt size={40} color="#e03334" />
              <h4 className="mt-3" style={{ color: "#e03334", fontWeight: "bold" }}>
                Our Phone:
              </h4>
              <p className="mt-2" style={{ fontSize: "1.1rem" }}>
                +92-300-2520244
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-md-8">
            <div
              className="p-4"
              style={{
                border: "1px solid #e03334",
                borderRadius: "10px",
                backgroundColor: "#f9f9f9",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3
                className="text-center mb-4"
                style={{ color: "#e03334", fontSize: "2rem", fontWeight: "bold" }}
              >
                Contact Form
              </h3>
              <form>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-control mb-3"
                  style={{
                    padding: "12px",
                    borderRadius: "5px",
                    border: "1px solid #ddd",
                  }}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form-control mb-3"
                  style={{
                    padding: "12px",
                    borderRadius: "5px",
                    border: "1px solid #ddd",
                  }}
                />
                <textarea
                  placeholder="Your Message"
                  className="form-control mb-3"
                  style={{
                    padding: "12px",
                    borderRadius: "5px",
                    border: "1px solid #ddd",
                    height: "150px",
                  }}
                ></textarea>
                <button
                  type="submit"
                  className="btn w-100"
                  style={{
                    padding: "12px",
                    backgroundColor: "#e03334",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    fontSize: "1rem",
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div
          className="mt-5"
          style={{
            width: "100%",
            height: "400px",
            borderRadius: "10px",
            overflow: "hidden",
            marginTop: "40px",
          }}
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.990307175851!2d67.06113217515197!3d24.86007677792958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f9e04023ba9%3A0xff00a60f4bc51619!2sProgressive%20Square!5e1!3m2!1sen!2s!4v1733393002767!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

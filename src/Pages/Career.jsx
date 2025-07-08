// eslint-disable-next-line no-unused-vars
import React from "react";

function CareerPage() {
  return (
    <div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
      {/* Hero Section */}
      <section
        style={{
          textAlign: "center",
          padding: "50px 20px",
          backgroundColor: "#f4f4f4",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "20px",
          }}
        >
          Join the Team
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            color: "#555",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Let us recruit, train, and reward you! Explore exciting career
          opportunities and become a part of our growing team.
        </p>
      </section>

      {/* Career Form Section */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "40px 20px",
          backgroundColor: "#fff",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
            backgroundColor: "#fff",
            padding: "30px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
          }}
        >
          <form>
            {/* Name Field */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Phone Number Field */}
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Position Applied For Field */}
            <div className="mb-3">
              <label htmlFor="position" className="form-label">
                Position Applied For
              </label>
              <input
                type="text"
                className="form-control"
                id="position"
                placeholder="Enter the position you are applying for"
                required
              />
            </div>

            {/* Email Instruction */}
            <div className="mb-3 text-center">
              <p
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Send your email to:{" "}
                <a
                  href="mailto:info@baibrus.com"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  career@baibrus.com
                </a>
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-danger w-100"
              style={{
                padding: "12px 0",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              Ready to Join!
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default CareerPage;

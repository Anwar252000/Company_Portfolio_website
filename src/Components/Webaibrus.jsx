// eslint-disable-next-line no-unused-vars
import React from "react";

const Webaibrus = () => {
  return (
    <div className="container my-4 text-center">
      <h5
        style={{
          fontSize: "16px", // Small and subtle subheading
          textTransform: "uppercase", // Make text uppercase for emphasis
          marginBottom: "10px",
          letterSpacing: "2px", // Add spacing for a modern look
          color: "#e03334",
        }}
      >
        WE ARE BAIBRUS TECHNOLOGY
      </h5>
      <h2
        style={{
          fontWeight: "bold",
          fontSize: "2.5rem", // Large heading
          color: "#333", // Neutral dark color for readability
          lineHeight: "1.3", // Adjust line height for readability
        }}
        className="display-4" // Bootstrap class for responsive text size
      >
        We are Trusted in 4+ Countries Worldwide
      </h2>
    </div>
  );
};

export default Webaibrus;

// eslint-disable-next-line no-unused-vars
import React from 'react';
// import './Beforefooter.css';  // Assuming you have this CSS file for styling

const Beforefooter = () => {
  const text = "BAIBRUS TECHNOLOGY";
  
  return (
    <div className="container-fluid px-3">
      <div className="row justify-content-center">
        <div className="col-12 d-flex justify-content-center">
          <div className="letter-container">
            {text.split("").map((char, index) => (
              <span
                key={index}
                className="letter"
                style={{ animationDelay: `${index * 0.1}s` }} // Delay for each letter
              >
                {char === " " ? "\u00A0" : char} {/* Preserve spaces */}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beforefooter;

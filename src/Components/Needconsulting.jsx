// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Needconsulting = () => {
  const [folding, setFolding] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(
      (entries) => {
        // When the section comes into view, trigger the folding animation
        if (entries[0].isIntersecting) {
          setFolding(false); // Start the folding animation
        }
      },
      {
        threshold: 0.7, // Trigger when 50% of the section is in view
      }
    );

    // Observe the section element
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer when the component unmounts
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        position: 'relative', // To contain the pseudo-element
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '450px',
        backgroundColor: '#f5f5f5',
        margin: '80px',
        overflow: 'hidden',
      }}
    >
      {/* Folding effect wrapper */}
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundColor: '#f5f5f5',
          transition: 'transform 1.5s ease-out',
          transform: folding ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'right',
        }}
      />

      {/* Left section for image */}
      <div
        style={{
          flex: '0.6',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <img
          src="consultation.jpg"
          alt="Consulting"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Right section for heading and cards */}
      <div
        style={{
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: 'black',
          }}
        >
          Need a Consultation?
        </h1>
        <h4>Drop us a line! We are here to answer your questions</h4>
        <br />

        {/* Cards container */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 2fr)',
            gap: '20px', // Add some space between cards
          }}
        >
          {/* Card 1 */}
          <div
            className="consult-card"
            style={{
              backgroundColor: 'white',
              padding: '20px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
              borderRadius: '8px',
              transition: 'transform 0.3s ease', // Smooth transition for the hover effect
            }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
              Consultation
            </h3>
            <a
              href="#"
              style={{
                textDecoration: 'none',
                color: '#FF0000',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <span to="/learnMore" style={{ marginRight: '10px' }}>Learn More</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>

      {/* CSS for hover effect */}
      <style>
        {`
          .consult-card:hover {
            transform: scale(1.05); /* Slight bump effect */
            box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.3); /* Enhanced shadow for focus */
          }
        `}
      </style>
    </div>
  );
};

export default Needconsulting;

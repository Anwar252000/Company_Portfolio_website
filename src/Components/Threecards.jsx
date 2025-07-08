// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

function Threecards() {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "20px",
        backgroundImage: "url('cardsbg4.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        background: "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
      }}
    >
      {/* Row with cards */}
      <div className="container">
        <div className="row g-4 justify-content-center">
          {[
            {
              image: "card1.jpg",
              title: "Software Consultancy",
              description:
                "We help businesses elevate their value through custom software development, product design, QA, and consultancy.",
              features: [
                "IDENTIFYING BUSINESS NEEDS",
                "RESPONDING TO PROBLEMS",
                "DESIGNING THE SOLUTION",
              ],
            },
            {
              image: "card2.jpg",
              title: "Requirement Development",
              description:
                "We help businesses elevate their value through custom software development, product design, QA, and consultancy.",
              features: [
                "SEARCH ENGINE OPTIMIZATION (SEO)",
                "SOCIAL MEDIA MARKETING (SMM)",
                "AFFILIATE MARKETING",
              ],
            },
            {
              image: "card3.jpg",
              title: "Enterprise Applications",
              description:
                "Achieving business targets with our application development services becomes effortless.",
              features: ["DESKTOP APPLICATIONS", "WEB APPLICATION", "MOBILE APPS"],
            },
          ].map((card, index) => (
            <div
              className="col-12 col-md-6 col-lg-4"
              key={index}
              style={{ perspective: "1000px" }} // Add perspective for the 3D effect
            >
              <div
                className="card-container"
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: "350px",
                  position: "relative",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.8s",
                }}
              >
                {/* Front of Card */}
                <div
                  className="card-front"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    borderRadius: "15px",
                    background: "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <img
                    src={card.image}
                    alt="Card Thumbnail"
                    className="img-fluid"
                    style={{
                      width: "100%",
                      height: "200px",
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                      objectFit: "cover",
                    }}
                  />
                  <div style={{ padding: "15px" }}>
                    <h3
                      style={{
                        margin: "0 0 8px 0",
                        color: "#1a1a40",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p style={{ margin: "0 0 8px 0", color: "#555" }}>
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Back of Card */}
                <div
                  className="card-back"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    borderRadius: "15px",
                    backgroundColor: "#e03334",
                    color: "white",
                    textAlign: "center",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {card.features.map((feature, i) => (
                    <h6 key={i} style={{ margin: "10px 0" }}>
                      {feature}
                    </h6>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AFTER CARD SECTION */}
      <div style={{ padding: "15px", marginTop: "40px" }}>
        <h1
          className="text-white fw-bold"
          style={{
            fontSize: "2rem",
            textAlign: "center",
            lineHeight: "1.2",
          }}
        >
          Drop us a line! We are here to answer your questions 24/7
        </h1>
        <h1
          className="text-white"
          style={{
            fontFamily: "fantasy",
            fontWeight: "bold",
            fontSize: "clamp(3rem, 9vw, 9rem)",
            letterSpacing: "1vw",
            textAlign: "center",
          }}
        >
          NEED A CONSULTATION?
        </h1>
        <  button
          className="btn text-white"
          style={{
            fontSize: "1.2rem",
            backgroundColor: "#e03334",
            borderRadius: "25px",
            border: "none",
            transition: "transform 0.2s",
            padding: "10px 20px",
            display: "block",
            margin: "20px auto",
          }}
          type="button"
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          onClick={handleLinkClick}

        >
          <Link to="/learnmore"style={{color:"white",textDecoration:"none"}}>Need More Info</Link>
        </button>
      </div>
    </div>
  );
}

export default Threecards;

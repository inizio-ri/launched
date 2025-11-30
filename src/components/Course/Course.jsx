import React, { useState } from "react";
import "./Course.css";

const cards = [
  { id: 1, img: "./ai.png", title: "ARTIFICIAL INTELLIGENCE", sub: "by Shruthi Ganta", enroll: "4143 Students Enrolled" },
  { id: 2, img: "./wd.png", title: "WEB DEVELOPMENT", sub: "by Amrit Raj", enroll: "3897 Students Enrolled" },
  { id: 3, img: "./ds.png", title: "DATA SCIENCE", sub: "by Meghana Gowda V", enroll: "2465 Students Enrolled" },
  { id: 4, img: "./cs.png", title: "CYBER SECURITY", sub: "by Rohit Mukherjee", enroll: "1675 Students Enrolled" },
  { id: 5, img: "./da.png", title: "DATA ANALYTICS", sub: "by Meghana Gowda V", enroll: "2626 Students Enrolled" }
];

const VISIBLE = 3; // number of cards visible at a time

const FlipCarousel = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    // max start index so that last view still shows VISIBLE cards
    const maxIndex = cards.length - VISIBLE;
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="section-wrapper">

      <div className="section-heading">
        <p className="heading-label">Mentorship Courses</p>
        <h1 className="heading-title">
          Unlock your potential with the <br /><span>right mentor</span>
        </h1>
      </div>
      {/* Carousel */}
      <div className="carousel-container">

        <button
          className={`nav-button left ${index === 0 ? "disabled" : ""}`}
          onClick={prev}
          aria-label="Previous"
          disabled={index === 0}
        >
          ❮
        </button>

        <div className="carousel-viewport">
          <div
            className="carousel-slider"
            style={{ transform: `translateX(-${index * (100 / VISIBLE)}%)` }}
          >
            {cards.map((card) => (
              <div key={card.id} className="flip-card">
                <div className="flip-card-inner">

                  {/* FRONT */}
                  <div className="flip-card-front">
                    <img src={card.img} className="card-img" alt={card.title} />
                    <div className="front-text">
                      <p className="enroll">{card.enroll}</p>
                      <h2 className="card-title">{card.title}</h2>
                      <p className="card-sub">{card.sub}</p>
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="flip-card-back">
                    <h2 className="card-title">{card.title}</h2>
                    <p className="back-desc">
                      AI-powered UGC tools for avatar content creation.
                      <br /><br />
                      • Create avatar assets using AI<br />
                      • Generate textures matching mesh<br />
                      • Mix & match assets easily
                    </p>
                    <button className="button">Learn more</button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className={`nav-button right ${index === cards.length - VISIBLE ? "disabled" : ""}`}
          onClick={next}
          aria-label="Next"
          disabled={index === cards.length - VISIBLE}
        >
          ❯
        </button>
      </div>
    <button className="explore-button">Explore More Courses</button>
    </div>
  );
};

export default FlipCarousel;

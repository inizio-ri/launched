import React, { useState } from "react";
import "./Course.css";

const cards = [
  { id: 1, 
    img: "./ai.png", 
    title: "ARTIFICIAL INTELLIGENCE", 
    sub: "by Shruthi Ganta", 
    enroll: "4143 Students Enrolled", 
    desc:"This course introduces you to the fundamentals of Artificial Intelligence, focusing on how machines learn, think, and make decisions. You will explore machine learning algorithms, neural networks, and intelligent systems used across industries. By the end, you’ll understand real-world AI applications such as NLP, computer vision, and automated prediction models."},
  { id: 2, 
    img: "./wd.png", 
    title: "WEB DEVELOPMENT", 
    sub: "by Amrit Raj", 
    enroll: "3897 Students Enrolled",
    desc:"This course provides a complete understanding of how modern websites and web applications are built. You will learn frontend development for creating responsive interfaces and backend development for handling databases, servers, and APIs. The curriculum equips you with full-stack capabilities to build, deploy, and maintain professional web projects." },
  { id: 3, 
    img: "./ds.png", 
    title: "DATA SCIENCE", 
    sub: "by Meghana Gowda V", 
    enroll: "2465 Students Enrolled",
    desc:"This course blends programming, statistics, and machine learning to help you extract deep insights from complex datasets. You will build predictive models, explore advanced algorithms, and work with large-scale data using modern technologies. It prepares you for real-world data science workflows—from data collection to model deployment." },
  { id: 4, 
    img: "./cs.png", 
    title: "CYBER SECURITY", 
    sub: "by Rohit Mukherjee", 
    enroll: "1675 Students Enrolled",
    desc:"This course equips you with the knowledge needed to protect systems, networks, and digital assets from cyber threats. You will learn about vulnerabilities, encryption, network defense mechanisms, and ethical hacking techniques. The training prepares you to identify risks, prevent attacks, and respond effectively to security incidents." },
  { id: 5, 
    img: "./da.png", 
    title: "DATA ANALYTICS", 
    sub: "by Meghana Gowda V", 
    enroll: "2626 Students Enrolled",
    desc:"This course teaches you how to work with raw data, transform it into meaningful information, and support data-driven decisions. You will learn essential techniques like data cleaning, statistical analysis, and creating visual dashboards. By the end, you’ll be able to interpret datasets, uncover trends, and present insights with clarity." }
];

const getVisibleCards = () => {
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 900) return 2;
  return 3;
};


const FlipCarousel = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(getVisibleCards());

React.useEffect(() => {
  const handleResize = () => setVisible(getVisibleCards());
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);



  const next = () => {
    // max start index so that last view still shows VISIBLE cards
    const maxIndex = cards.length - visible;
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
            style={{ transform: `translateX(-${index * (100 / visible)}%)` }}

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
                    <p className="back-desc">{card.desc}</p>
                    <button className="button">Learn more</button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className={`nav-button right ${index === cards.length - visible ? "disabled" : ""}`}
          onClick={next}
          aria-label="Next"
          disabled={index === cards.length - visible}
        >
          ❯
        </button>
      </div>
    <button className="explore-button">Explore More Courses</button>
    </div>
  );
};

export default FlipCarousel;

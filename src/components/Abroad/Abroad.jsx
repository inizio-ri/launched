import React from "react";
import "./Abroad.css";
import CountUp from "react-countup";



export default function Abroad() {
  const countries = [
    {
      title: "United Kingdom",
      src: "/uk.png",
    },
    {
      title: "United States of America",
      src: "/us.png",
    },
    {
      title: "Australia",
      src: "/australia.png",
    },
    {
      title: "Germany",
      src: "/germany.png",
    },
  ];

  const partners = [
    "/abroad1.png",
    "/abroad2.png",
    "/abroad3.png",
    "/abroad4.png",
    "/abroad5.png"
  ];

  const loopLogos = [...partners, ...partners]; 

  return (
    <div className="study-container">
      <div className="study-inner">

        {/* LEFT SECTION */}
        <div className="study-left">
          <h1 className="study-title">
            Find Your Perfect <br />
            <span>Study Destination</span>
          </h1>

          <p className="study-text">
            Explore top study-abroad destinations across the globe,  
            from the USA, UK, and Australia, to New Zealand, Europe, Dubai,  
            and many more.
          </p>

          <div className="study-buttons">
            <button className="btn explore-btn">Explore More</button>
            <button className="btn quick-btn">Quick Apply</button>
          </div>

          <div className="partner-text"><div
          className="abroad-stat"
        >
          <CountUp start={0} end={500} duration={3}>
            {({ countUpRef, start, reset }) => (
              <span
                onMouseEnter={() => {
                  reset();
                  start();
                }}
              >
                Choose from <span ref={countUpRef} />+ Universities</span>
            )}
          </CountUp>
        </div>
          </div>

          <div className="logo-marquee-container">
            <div className="logo-marquee-track">
              {loopLogos.map((src, i) => (
                <img key={i} src={src} alt={`slide-${i}`} className="partner-logo" />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="study-right">
          <div className="grid-box">
            {countries.map((item, i) => (
              <div className="country-card" key={i}>
                <img src={item.src} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

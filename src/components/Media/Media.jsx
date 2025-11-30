import React from "react";
import "./Media.css";

const images = [
  "./Media1.png",
  "./Media2.jpg",
  "./Media3.png",
  "./Media4.png",
  "./Media5.png",
  "./Media6.png",
  "./Media7.jpg",
  "./Media8.png",
  "./Media9.png",
  "./Media10.png",
  "./Media11.png",
  "./Media12.png"
];

// Duplicate for infinite loop
const loopImages = [...images, ...images];

export default function Media() {
  return (
    <div className="Media">
        <div className="description">
      <div className="des1" fontColor="orange">
        <h3><center>Our Collaborations</center></h3>
      </div>
      <div className="des2" fontColor="white">
        <h1><center>Powered by Industry Partnerships.</center></h1>
      </div>
    </div>
    <div className="l3d-container">
        <div className="l3d-track">
          {loopImages.map((src, i) => (
            <div className="l3d-card" key={i}>
              <img src={src} alt={`slide-${i}`} />
            </div>
          ))}
        </div>
    </div></div>
  );
}

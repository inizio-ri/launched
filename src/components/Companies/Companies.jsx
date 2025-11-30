import React from "react";
import "./Companies.css";

const images = [
  "./1.png",
  "./2.jpg",
  "./3.png",
  "./4.png",
  "./5.png",
  "./6.png",
  "./7.png",
  "./8.png",
  "./9.png",
  "./10.png",
  "./11.png",
  "./12.png",
  "./13.png",
  "./14.gif",
  "./15.jpg",
  "./16.jpg",
  "./17.jpg",
  "./18.jpg",
  "./19.png"
];

// Duplicate for infinite loop
const loopImages = [...images, ...images];

export default function Linear3DSlider() {
  return (
    <><div className="description">
      <div className="des1" fontColor="orange">
        <h3><center>Our Collaborations</center></h3>
      </div>
      <div className="des2" fontColor="black">
        <h1><center>Powered by Industry Partnerships.</center></h1>
      </div>
    </div>
    <div className="linear-3d-container">
        <div className="linear-3d-track">
          {loopImages.map((src, i) => (
            <div className="linear-3d-card" key={i}>
              <img src={src} alt={`slide-${i}`} />
            </div>
          ))}
        </div>
    </div></>
  );
}

import React, { useEffect, useRef } from "react";
import "./Hero.css";
import CountUp from "react-countup";

export default function Carousel() {
  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const runningRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const list = listRef.current;
    const nextBtn = nextRef.current;
    const prevBtn = prevRef.current;
    const runningTime = runningRef.current;

    let timeRunning = 3000;
    let timeAutoNext = 7000;
    let runTimeOut;
    let runNextAuto;

    const resetTimeAnimation = () => {
      runningTime.style.animation = "none";
      runningTime.offsetHeight; // trigger reflow
      runningTime.style.animation = null;
      runningTime.style.animation = "runningTime 7s linear 1 forwards";
    };

    const showSlider = (type) => {
      let sliderItemsDom = list.querySelectorAll(".item");

      if (type === "next") {
        list.appendChild(sliderItemsDom[0]);
        carousel.classList.add("next");
      } else {
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        carousel.classList.add("prev");
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carousel.classList.remove("next");
        carousel.classList.remove("prev");
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextBtn.click();
      }, timeAutoNext);

      resetTimeAnimation();
    };

    nextBtn.onclick = () => showSlider("next");
    prevBtn.onclick = () => showSlider("prev");

    runNextAuto = setTimeout(() => {
      nextBtn.click();
    }, timeAutoNext);

    resetTimeAnimation();

    return () => {
      clearTimeout(runNextAuto);
      clearTimeout(runTimeOut);
    };
  }, []);

  return (
    <>

      <div className="carousel" ref={carouselRef}>
        <div className="list" ref={listRef}>

          {/* Convert all your items */}
          <div className="item" style={{ backgroundImage: "url(./jobs.png)" }}>
            <div className="content">
              <div className="title">HEALTHCARE</div>
              <div className="nameStudy">JOBS ABROAD</div>
              <div className="desStudy">Training and placement assistance worldwide.</div>
              <div className="button">
                <a href="#">See More</a>
              </div>
            </div>
          </div>

          <div className="item" style={{ backgroundImage: "url(./thumb.png)" }}>
          <div className="content">
              <div className="titled">India's #1</div>
              <div className="nameStudy">Career Accelerator</div>
              <div className="button">
                <a href="#">Enroll Now</a>
              </div>
            </div>
          </div>

          <div className="item" style={{ backgroundImage: "url(./study.png)" }}>
            <div className="content">
              <div className="title">STUDY</div>
              <div className="nameStudy">ABROAD</div>
              <div className="desStudy">Expert guidance, scholarships & visa support.</div>
              <div className="button">
                <a href="#">See More</a>
              </div>
            </div>
          </div>

          <div className="item" style={{ backgroundImage: "url(./career.png)" }}>
            <div className="content">
              <div className="title">CAREER</div>
              <div className="nameStudy">LAUNCHPAD</div>
              <div className="desStudy">Mentorship and tools to fast‑track your growth.</div>
              <div className="button">
                <a href="#">See More</a>
              </div>
            </div>
          </div>

          <div className="item" style={{ backgroundImage: "url(./courses.png)" }}>
            <div className="content">
              <div className="title">PROFESSIONAL</div>
              <div className="nameStudy">COURSES</div>
              <div className="desStudy">Industry‑relevant courses for better roles.</div>
              <div className="button">
                <a href="#">See More</a>
              </div>
            </div>
          </div>

        </div>

        <div className="arrows">
          <button className="prev" ref={prevRef}>{"<"}</button>
          <button className="next" ref={nextRef}>{">"}</button>
        </div>

        <div className="timeRunning" ref={runningRef}></div>
    </div>
    </>
  );
}

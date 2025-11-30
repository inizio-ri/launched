import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Featured.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common.js";

  const Featured = () => {
    return (
      <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
          <Swiper {...sliderSettings}>
            <SliderButtons />
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="flexColStart r-card">
                <img src={card.image}/>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
  };

export default Featured;

const SliderButtons = () => {
const swiper = useSwiper();
return (
  <>
<div className="flexCenter left-button">
<button onClick={()=> swiper.slidePrev() }>&lt;</button>
</div>
<div className="flexCenter right-button">
  <button onClick={()=> swiper.slideNext() }>&gt;</button>
</div>
</>
);
};
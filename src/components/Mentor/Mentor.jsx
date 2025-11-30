import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Mentor.css';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


function Mentor() {
  return (
    <div className="mentor">
      {/* <h1 className="heading">Flower Gallery</h1> */}
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.mentor-pagination', clickable: true }}
        navigation={{
          nextEl: '.mentor-button-next',
          prevEl: '.mentor-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mentor_container"
      >
        <SwiperSlide>
          <img src={"./r1.png"} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"./r2.png"} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"./r3.png"} alt="slide_image" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide> */}

        <div className="swiper-controler">
          <div className="mentor-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="mentor-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="mentor-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Mentor;
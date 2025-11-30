import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Mentor.css';

// 1. Import Autoplay module
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

function Mentor() {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const [paginationEl, setPaginationEl] = useState(null);

  return (
    <div className="mentor">
        <h1 className="heading">Our Mentors</h1>
        <h3 className="sub-heading">Learn from those who've been there, done that, and nailed it</h3>
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
        // 2. Add Autoplay configuration
        autoplay={{
          delay: 2500,                // Time in ms between slides (2.5 seconds)
          disableOnInteraction: false, // Keeps scrolling even after user clicks
        }}
        pagination={{ el: paginationEl, clickable: true }}
        navigation={{
          prevEl: prevEl,
          nextEl: nextEl,
          clickable: true,
        }}
        // 3. Add Autoplay to the modules list
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mentor_container"
      >
        {/* Mentor1 - Apurva */}
        <SwiperSlide className="mentor-slide">
            <a href ="https://www.linkedin.com/in/apurvadonde/" target='blank'>
          <img src="./mentor1.png" alt="slide_image" />
          </a>
        </SwiperSlide>
        {/* Mentor2 - Meghana */}
        <SwiperSlide className="mentor-slide">
          <a href ="https://www.linkedin.com/in/meghana-gowda-v-a322b916b/" target='blank'>
            <img src="./mentor2.png" alt="slide_image" />
          </a>
        </SwiperSlide>
        {/* Mentor3 - Samrat */}
        <SwiperSlide className="mentor-slide">
            <a href ="https://www.linkedin.com/in/samrat-tomar-779288a9/" target='blank'>
                <img src="./mentor3.png" alt="slide_image" />
            </a>
        </SwiperSlide>
        {/* Mentor4 - Piyush */}
        <SwiperSlide className="mentor-slide">
            <a href ="https://www.linkedin.com/in/piiyush/" target='blank'>
                <img src="./mentor4.png" alt="slide_image" />
            </a>
        </SwiperSlide>
        {/* Mentor5 - Ayush */}
        <SwiperSlide className="mentor-slide">
            <a href ="https://www.linkedin.com/in/ayusofayush/" target='blank'>
                <img src="./mentor5.png" alt="slide_image" />
            </a>
        </SwiperSlide>
      </Swiper>

      <div className="mentor-controler">
        <div className="mentor-button-prev slider-arrow" ref={(node) => setPrevEl(node)}>
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="mentor-pagination" ref={(node) => setPaginationEl(node)}></div>
        <div className="mentor-button-next slider-arrow" ref={(node) => setNextEl(node)}>
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}

export default Mentor;
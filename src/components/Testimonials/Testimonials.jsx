import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { TestimonialsData } from "../../images/Testimonialsdata.js";



export default function Testimonials() {
return (
    <div className="testimonials">
        <div className="wrapper">
            <div className="container">
                <span>Top Rated</span>
                <span>
                Seedily say has suitable disposal and boy. Exercise joy man children rejoiced.
                </span>
            </div>
            <img src="./testimonials.png" alt="testimonials" />
            <div className="container">
                <span>100k</span>
                <span>Happy Customers with us</span>
            </div>
        </div>

        <div className="reviews">Loved by Thousands of Students</div>

        <div className="carousel">
        <Swiper
        slidesPerView={3}
        slidesPerGroup={1}
        spaceBetween={20}
        className="tCarousel"
        >
        {
            TestimonialsData.map((testimonial)=> (
                <SwiperSlide>
                <div className="testimonial">
                <img src={testimonial.image} alt="" />
                <span>{testimonial.comment}</span>
                <hr/>
                <span>{testimonial.name}</span>
                </div>
                </SwiperSlide>
            ) )
        }
    </Swiper>
    </div>
    </div>
);
}

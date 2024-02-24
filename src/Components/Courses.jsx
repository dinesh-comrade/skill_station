/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../CSS/Courses.css";
import fullstack from "../assets/images/card_image_one.png";
import mobile from "../assets/images/card_image_two.png";
import data from "../assets/images/card_image_three.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

const Courses = () => {
  return (
    <main className="course pb-5" id="courses">
      <div className="container">
        <div className="row mb-2">
          <div className="col-12">
            <h1 className="text-center h1-course">Courses</h1>
            <p className="text-center text-body-secondary">
              Choose your course and start learning
            </p>
          </div>
        </div>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card">
              <img src={fullstack} className="card-img-top" alt="..." />
              <div className="card-body h-100">
                <h5 className="card-title">
                  Full Stack Web Application Development(MERN)
                </h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                  Course Modules
                </h6>
                <div className="d-flex justify-content-start align-items-start flex-column gap-2 mb-4">
                  <a href="#" className="btn btn-course rounded-pill">
                    Fundamentals of Javascript
                  </a>
                  <a href="#" className="btn btn-course rounded-pill">
                    Introduction to Web Application Development with ReactJs
                  </a>
                  <a href="#" className="btn btn-course rounded-pill">
                    Introduction to Server Side App Development with NodeJs
                  </a>
                </div>

                <p className="card-text">
                  {" "}
                  Beginner <span>.</span> Professional <span>.</span> 3 Months
                </p>
                <div className="d-flex justify-content-evenly align-items-center gap-2">
                  <a href="#" className="btn btn-view px-3 py-1">
                    View More
                  </a>
                  <a href="#" className="btn btn-apply px-3 py-1">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src={mobile} className="card-img-top" alt="..." />
              <div className="card-body h-100">
                <h5 className="card-title">Mobile Web App Development</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                  Course Modules
                </h6>
                <div className="d-flex justify-content-start align-items-start flex-column gap-2 mb-4">
                  <a href="#" className="btn btn-course rounded-pill">
                    Programming in Dart
                  </a>
                  <a href="#" className="btn btn-course rounded-pill">
                    Flutter App Development
                  </a>
                  <a href="#" className="btn btn-course rounded-pill">
                    Flutter App Development with Firebase
                  </a>
                </div>

                <p className="card-text">
                  {" "}
                  Beginner <span>.</span> Professional <span>.</span> 3 Months
                </p>
                <div className="d-flex justify-content-evenly align-items-center gap-2">
                  <a href="#" className="btn btn-view px-3 py-1">
                    View More
                  </a>
                  <a href="#" className="btn btn-apply px-3 py-1">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src={data} className="card-img-top" alt="..." />
              <div className="card-body h-100">
                <h5 className="card-title">Static Website Development</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                  Course Modules
                </h6>
                <div className="d-flex justify-content-start align-items-start flex-column gap-2 mb-4">
                  <a href="#" className="btn btn-course rounded-pill">
                    Learn from Scratch
                  </a>
                  <a href="#" className="btn btn-course rounded-pill">
                    Fundamental of HTML, JS and CSS
                  </a>
                  <a href="#" className="btn btn-course rounded-pill">
                    Build Static website Development
                  </a>
                </div>

                <p className="card-text">
                  {" "}
                  Beginner <span>.</span> Professional <span>.</span> 3 Months
                </p>
                <div className="d-flex justify-content-evenly align-items-center gap-2">
                  <a href="#" className="btn btn-view px-3 py-1">
                    View More
                  </a>
                  <a href="#" className="btn btn-apply px-3 py-1">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
};

export { Courses };

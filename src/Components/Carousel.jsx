/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import one from "../assets/images/Carousel/1.png";
import two from "../assets/images/Carousel/2.png";
import three from "../assets/images/Carousel/3.png";
import "../CSS/Carousel.css";

const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="3000">
          <img src={one} className="d-block w-100 slider-img" alt="..." />
          <div class="bg-overlay"></div>
          <div class="carousel-caption">
            <a className="caption-head">
              International Workshop on "Social Entrepreneurship" organised by
              CSIE-IITM
            </a>
            <br />
            <a className="caption-para">
              Team with Prof R Nagarajan and Prof L S Ganesh
            </a>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img src={two} className="d-block w-100 slider-img" alt="..." />
          <div class="bg-overlay"></div>
          <div class="carousel-caption">
            <a className="caption-head">Team Project</a>
            <br />

            <a className="caption-para">And Activities</a>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img src={three} className="d-block w-100 slider-img" alt="..." />
          <div class="bg-overlay"></div>
          <div class="carousel-caption">
            <a className="caption-head">Cultural Night</a>
            <br />
            <a className="caption-para">And Social Events</a>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export { Carousel };

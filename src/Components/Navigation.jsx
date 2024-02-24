/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../assets/icons/logo.svg";
import "../CSS/Navigation.css";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand ms-3" href="#">
          <div className="row">
            <div className="col-4 p-1">
              <img
                src={logo}
                alt="Logo"
                width={60}
                height={60}
                className="d-inline-block align-text-top"
              />
            </div>
            <div className="col-8 gap-0 p-1 mt-1">
              <span className="shine-title">
                Skill Station <br /> Academy
              </span>
            </div>
          </div>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="sidebar offcanvas offcanvas-start"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header text-white">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <div className="row">
                <div className="col-4 p-1">
                  <img
                    src={logo}
                    alt="Logo"
                    width={60}
                    height={60}
                    className="d-inline-block align-text-top"
                  />
                </div>
                <div className="col-8 gap-0 p-1 mt-1">
                  <span className="shine-title">
                    Skill Station <br /> Academy
                  </span>
                </div>
              </div>
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white text-reset b-0"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end align-items-center flex-grow-1 pe-3">
              <li className="nav-item mx-3">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#about"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#courses"
                >
                  Courses
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#feedback"
                >
                  Feedbacks
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#partners"
                >
                  Partners
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link active" aria-current="page" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navigation };

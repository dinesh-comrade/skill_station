/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../CSS/Footer.css";
import facebook from "../assets/icons/Social Media Icons/facebook.svg";
import gmail from "../assets/icons/Social Media Icons/gmail.svg";
import linkedin from "../assets/icons/Social Media Icons/linkedin.svg";
import whatsapp from "../assets/icons/Social Media Icons/whatsapp.svg";
import youtube from "../assets/icons/Social Media Icons/youtube.svg";
import logo from "../assets/icons/logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row row-cols-1 justify-content-evenly">
          <div className="col-lg-4">
            <div className="d-flex">
              <img
                src={logo}
                alt="Logo"
                width={70}
                height={70}
                className="d-inline-block align-text-top"
              />
              <div className="col-8 gap-0 p-1 mt-1">
                <span className="shine-title">
                  Skill Station <br /> Academy
                </span>
              </div>
            </div>
            <p className="p-footer mb-3">
              Skill Station is a non-profit educational and research academy
              founded with mission to impact the lives of young minds.
            </p>
            <div className="d-flex social-icons mb-3">
              <a
                href="https://www.facebook.com/"
                className="me-2"
                target="_blank"
              >
                <img
                  src={facebook}
                  className="social-icon"
                  alt="Facebook"
                  width={30}
                  height={30}
                />
              </a>
              <a
                href="https://wa.me/917307959397"
                className="me-2"
                target="_blank"
              >
                <img
                  src={whatsapp}
                  className="social-icon"
                  alt="Whatsapp"
                  width={30}
                  height={30}
                />
              </a>
              <a
                href="mailto:info@skillstation.org"
                className="me-2"
                target="_blank"
              >
                <img
                  src={gmail}
                  className="social-icon"
                  alt="Gmail"
                  width={30}
                  height={30}
                />
              </a>
              <a
                href="https://www.linkedin.com/"
                className="me-2"
                target="_blank"
              >
                <img
                  src={linkedin}
                  className="social-icon"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                />
              </a>
              <a
                href="https://www.youtube.com/"
                className="me-2"
                target="_blank"
              >
                <img
                  src={youtube}
                  className="social-icon"
                  alt="Youtube"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>
          <div className="col-lg-2 mt-1">
            <h5 className="h5-footer">Skills Ahead</h5>
            <ul className="ul-footer">
              <li className="li-footer">
                <a href="#" className="a-footer">
                  Home
                </a>
              </li>
              <li className="li-footer">
                <a href="#about" className="a-footer">
                  About Us
                </a>
              </li>
              <li className="li-footer">
                <a href="#courses" className="a-footer">
                  Courses
                </a>
              </li>
              <li className="li-footer">
                <a href="#feedback" className="a-footer">
                  Feedbacks
                </a>
              </li>
              <li className="li-footer">
                <a href="#partners" className="a-footer">
                  Partners
                </a>
              </li>
              <li className="li-footer">
                <a
                  href="https://wa.me/917307959397"
                  className="a-footer"
                  target="_blank"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2">
            <h5 className="h5-footer">Our Partners</h5>
            <ul className="ul-footer">
              <li className="li-footer">
                <a href="#partners" className="a-footer">
                  IlaiLabs
                </a>
              </li>
              <li className="li-footer">
                <a href="#partners" className="a-footer">
                  Easy Prop
                </a>
              </li>
              <li className="li-footer">
                <a href="#partners" className="a-footer">
                  Saras
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5 className="h5-footer">What we do?</h5>
            <ul className="ul-footer">
              <li className="li-footer">
                <a href="#about" className="a-footer">
                  Career Guidance
                </a>
              </li>
              <li className="li-footer">
                <a href="#about" className="a-footer">
                  Workshops
                </a>
              </li>
              <li className="li-footer">
                <a href="#about" className="a-footer">
                  Professional Courses
                </a>
              </li>
              <li className="li-footer">
                <a href="#about" className="a-footer">
                  Internships & Placements
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };

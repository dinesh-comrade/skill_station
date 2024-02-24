import React from "react";
import "../CSS/Partners.css";
import ilailabs from "../assets/images/Partners/ilailabs.png";
import easyprops from "../assets/images/Partners/easyprop.png";
import saras from "../assets/images/Partners/saras.png";

const Partners = () => {
  return (
    <main className="partners" id="partners">
      <div className="container">
        <div className="row title-partners">
          <div className="col-12">
            <h1 className="text-center h1-partners">Our Partners</h1>
            <p className="text-body-secondary text-center">
              We are proud to be associated with the following companies
            </p>
          </div>
        </div>
        <div className="row justify-content-center align-items-center row-cols-1 partner-brands">
          <div className="col-lg-4 col-md-4 col-sm-6 text-center my-3">
            <img
              src={ilailabs}
              alt="Partner-1"
              className="img-fluid partners-img"
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 text-center my-3">
            <img
              src={easyprops}
              alt="Partner-2"
              className="img-fluid partners-img"
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 text-center my-3">
            <img
              src={saras}
              alt="Partner-3"
              className="img-fluid partners-img"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export { Partners };

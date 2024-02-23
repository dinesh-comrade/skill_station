import React from "react";
import "../CSS/Who.css";

const Who = () => {
  return (
    <main className="who">
      <div className="container-fluid">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <h1 className="text-center h1-who">Who we are?</h1>
          <p className="text-center p-who">
            Skill Station is a{" "}
            <span>non-profit educational and research academy</span> founded
            with mission to impact the lives of young minds.
          </p>
          <button class="custom-btn btn-who">
            <span>MORE!</span>
            <span>READ</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export { Who };

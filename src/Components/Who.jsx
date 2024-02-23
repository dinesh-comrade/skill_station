/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../CSS/Who.css";
import career from "../assets/icons/career_guidance_icon.svg";
import workshop from "../assets/icons/workshops_icon.svg";
import course from "../assets/icons/professional_courses_icon.svg";
import placement from "../assets/icons/internships_placements_icon.svg";

const Who = () => {
  return (
    <main className="who">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center h1-who">Who We Are?</h1>
          </div>
        </div>
        <div className="who-cards">
          <div className="container-cards">
            <div className="card-main-who">
              <div class="card-who">
                <div class="box-who">
                  <div class="content-who">
                    <img src={career} className="img-who" alt="career" />
                    <h3 className="h3-who mt-5">Career Guidance</h3>
                    <p className="p-who">
                      Skill Station is a non profit educational and research
                      academy founded with mission to impact the lives of young
                      minds in our Skill Station is a non profit educational and
                      research academy founded with mission to impact the lives
                      of young minds
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-main-who">
              <div class="card-who">
                <div class="box-who">
                  <div class="content-who">
                    <img src={workshop} className="img-who" alt="workshop" />
                    <h3 className="h3-who mt-5">workshops</h3>
                    <p className="p-who">
                      Skill Station is a non profit educational and research
                      academy founded with mission to impact the lives of young
                      minds in our Skill Station is a non profit educational and
                      research academy founded with mission to impact the lives
                      of young minds
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-main-who">
              <div class="card-who">
                <div class="box-who">
                  <div class="content-who">
                    <img src={course} className="img-who" alt="courses" />
                    <h3 className="h3-who mt-5">Professional Courses</h3>
                    <p className="p-who">
                      Skill Station is a non profit educational and research
                      academy founded with mission to impact the lives of young
                      minds in our Skill Station is a non profit educational and
                      research academy founded with mission to impact the lives
                      of young minds
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-main-who">
              <div class="card-who">
                <div class="box-who">
                  <div class="content-who">
                    <img src={placement} className="img-who" alt="placement" />
                    <h3 className="h3-who mt-5">Internships & Placements</h3>
                    <p className="p-who">
                      Skill Station is a non profit educational and research
                      academy founded with mission to impact the lives of young
                      minds in our Skill Station is a non profit educational and
                      research academy founded with mission to impact the lives
                      of young minds
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export { Who };

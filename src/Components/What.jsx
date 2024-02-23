/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../CSS/What.css";
import career from "../assets/icons/career_guidance_icon.svg";
import workshop from "../assets/icons/workshops_icon.svg";
import course from "../assets/icons/professional_courses_icon.svg";
import placement from "../assets/icons/internships_placements_icon.svg";

const What = () => {
  return (
    <main className="what" id="about">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center h1-what">What we do?</h1>
          </div>
        </div>
        <div className="what-cards">
          <div className="container-cards">
            <div className="card-main-what">
              <div class="card-what">
                <div class="box-what">
                  <div class="content-what">
                    <img src={career} className="img-what" alt="career" />
                    <h3 className="h3-what mt-5">Career Guidance</h3>
                    <p className="p-what">
                      SkillStation guides your career journey with personalized
                      advice, skill assessments, and industry insights. Unlock
                      your potential, navigate career paths, and thrive with
                      confidence. Your success, our mission
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-main-what">
              <div class="card-what">
                <div class="box-what">
                  <div class="content-what">
                    <img src={workshop} className="img-what" alt="workshop" />
                    <h3 className="h3-what mt-5">Workshops</h3>
                    <p className="p-what">
                      Empower your career with SkillStation's workshops, where
                      learning meets innovation. Harness industry insights,
                      refine your abilities, and emerge as a trailblazer.
                      Transform your skills, transform your future
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-main-what">
              <div class="card-what">
                <div class="box-what">
                  <div class="content-what">
                    <img src={course} className="img-what" alt="courses" />
                    <h3 className="h3-what mt-5">Professional Courses</h3>
                    <p className="p-what">
                      Invest in your future with SkillStation's professional
                      courses. Experience dynamic learning, gain in-depth
                      knowledge, and stay ahead in your industry. Elevate your
                      professional profile and thrive in the ever-evolving
                      workplace
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-main-what">
              <div class="card-what">
                <div class="box-what">
                  <div class="content-what">
                    <img src={placement} className="img-what" alt="placement" />
                    <h3 className="h3-what mt-5">Internships & Placements</h3>
                    <p className="p-what">
                      Skill Station has collabrated with various startups and
                      organisations for their hiring needs. We ensure you land
                      up a internship position right after the course
                      completion. Depending on the candidates performance this
                      can be a paid or non-paid internship
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

export { What };

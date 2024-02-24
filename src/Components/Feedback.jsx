import React from "react";
import "../CSS/Feedback.css";
import avatar1 from "../assets/images/feedback_avatar_one.jpg";
import avatar2 from "../assets/images/feedback_avatar_two.jpg";
import avatar3 from "../assets/images/feedback_avatar_three.png";

const Feedback = () => {
  return (
    <main className="feedback pb-5" id="feedback">
      <div className="container-fluid">
        <div className="row title-feedback">
          <div className="col-12">
            <h1 className="text-center h1-feedback">Students Feedback</h1>
            <p className="text-center text-body-secondary">
              What our students say about us
            </p>
          </div>
        </div>
        <div className="row justify-content-center align-items-center mb-5">
          <div className="col-lg-6 col-md-10 col-sm-10">
            <div className="card-feedback">
              <img src={avatar1} id="img-feedback" alt="Student-1" />
              <div>
                <h2 className="h2-feedback">Varun</h2>
                <h3 className="h3-feedback mb-2">UI/UX Designer</h3>
                <p className="p-feedback">
                  Skill Station Academy provided an exceptional UI design course
                  with a thoughtfully structured curriculum. The teachers'
                  polite and supportive approach made learning a breeze,
                  fostering an environment where grasping new concepts was not
                  only easy but enjoyable. Highly recommend for anyone looking
                  to dive into the world of UI Design
                </p>
                <a href="#courses">
                  <button className="btn-feedback">Explore Courses</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center mt-3 mb-5">
          <div className="col-lg-6 col-md-10 col-sm-10">
            <div className="card-feedback">
              <img src={avatar2} id="img-feedback" alt="Student-2" />
              <div>
                <h2 className="h2-feedback">Mahin</h2>
                <h3 className="h3-feedback mb-2">Graphic Designer</h3>
                <p className="p-feedback">
                  SkillStation's Graphic journey was transformative. Real
                  projects, expert guidance, and a vibrant community shaped a
                  dynamic learning experience. Grateful for the skills honed
                </p>
                <a href="#courses">
                  <button className="btn-feedback">Explore Courses</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center mt-3 mb-5">
          <div className="col-lg-6 col-md-10 col-sm-10">
            <div className="card-feedback">
              <img src={avatar3} id="img-feedback" alt="Student-3" />
              <div>
                <h2 className="h2-feedback">Jeevlin</h2>
                <h3 className="h3-feedback mb-2">Fullstack Developer</h3>
                <p className="p-feedback">
                  SkillStation's Full Stack Development program is outstanding.
                  Robust curriculum, hands-on projects, and excellent
                  mentorship. A transformative learning experience, highly
                  recommended
                </p>
                <a href="#courses">
                  <button className="btn-feedback">Explore Courses</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export { Feedback };

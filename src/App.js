import React from "react";
import { Navigation } from "./Components/Navigation";
import { Carousel } from "./Components/Carousel";
import { What } from "./Components/What";
import { Who } from "./Components/Who";
import { Courses } from "./Components/Courses";
import { Feedback } from "./Components/Feedback";
import Partners from "./Components/Partners";

const App = () => {
  return (
    <>
      <Navigation />
      <Carousel />
      <What />
      <Who />
      <Courses />
      <Feedback />
      <Partners />
    </>
  );
};

export default App;

import React from "react";
import { Navigation } from "./Components/Navigation";
import { Carousel } from "./Components/Carousel";
import { What } from "./Components/What";
import { Who } from "./Components/Who";

const App = () => {
  return (
    <>
      <Navigation />
      <Carousel />
      <What />
      <Who />
    </>
  );
};

export default App;

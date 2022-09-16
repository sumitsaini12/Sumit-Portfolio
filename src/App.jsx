import React from "react";
import About from "./Components/About";
import Navber from "./Components/Navber";
import Project from "./Components/Project";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

function App() {

  return (
    <div>
      <Navber />
      <Home />
      <About />
      <Project />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import About from "./Components/About";
import Navber from "./Components/Navber";
import Project from "./Components/Project";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";

function App() {

  return (
    <div>
      <Navber />
      <Home />
      <About />
      <Skills />
      <Project />
      <Footer />
      
    </div>
  );
}

export default App;

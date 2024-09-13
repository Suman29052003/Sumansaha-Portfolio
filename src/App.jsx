import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Service from "./components/Service";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Service />
      <Education />
      <Projects />
      <Contact />
      <Analytics />
    </>
  );
};

export default App;

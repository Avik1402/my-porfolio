import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="container">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <footer className="footer">
        <p>&copy; 2024 Avik Kumar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
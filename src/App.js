import React from "react";
import { NavBar } from "./components/NavBar";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div>
        <NavBar />
        <About />
        <Projects />
        <Experience />
        <Contact />
    </div>
    );
}

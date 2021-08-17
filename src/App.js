import React from "react";
import { NavBar } from "./components/NavBar";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <main main className="text-gray-400 bg-gray-900 body-font">
        <NavBar />
        <About />
        <Projects />
        <Experience />
        <Contact />
    </main>
    );
}

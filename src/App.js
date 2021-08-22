import React from "react";
import { NavBar } from "./components/NavBar";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Skills } from "./components/Skills";

export default function App() {
  

  return (
     <main className="text-gray-400 bg-gray-900 body-font">
        <NavBar />
        <About />
        <Projects />
        <Experience />
        <Skills /> 
        <Contact />
        <Footer />
     </main>
    );
}

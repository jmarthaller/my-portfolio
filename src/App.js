import React, { useState, useEffect } from "react";
import { NavBar } from "./components/NavBar";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";

export default function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {

    const handleCount = () => {
      for (let i = 0; i < 100000; i++) { console.log(1) }
      setCount(count + 1)
    }
    handleCount()
  }, [count])

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

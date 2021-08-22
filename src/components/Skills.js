import { ChipIcon } from "@heroicons/react/solid";
import React from "react";

export function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="container px-5 py-10 mx-auto">
          <div id="skills" className="text-center mb-20">
            <ChipIcon className="w-10 inline-block mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              Skills &amp; Technologies
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Placeholder text
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

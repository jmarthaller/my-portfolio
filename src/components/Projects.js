import { TerminalIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export function Projects() {
  return (
    <section id="projects">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40 text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col w-full mb-20">
            <TerminalIcon className="mx-auto inline-block w-10 mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              Things I've Built
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Source code for all projects can be found on <br />
              <a
                href="https://github.com/jmarthaller"
                className="inline-flex text-white bg-letterboxd border-0 py-2 px-6 focus:outline-none hover:bg-letterboxd-hover rounded text-lg mt-3"
              >
                GitHub
              </a>
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {projects.map((project) => (
              <a
                href={project.link}
                key={project.image}
                className="sm:w-1/2 w-100 p-4"
              >
                <div className="flex relative">
                  <img
                    alt="project-screenshot"
                    className="absolute inset-0 w-full h-full object-cover h-48 w-full object-fill"
                    src={project.image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-letterboxd-outline bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

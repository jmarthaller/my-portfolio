import React from "react";

export function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center mb-28">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Jacob{" "}
            <span role="img" aria-label="waving hand emjoi">
              👋
            </span>
            <br className="hidden lg:inline-block" />I love to build amazing
            software
          </h1>
          <p className="mb-6 leading-relaxed">
            I'm a Full Stack Software Engineer working primarily in TypeScript,
            React, and Ruby on Rails. I love building software that solves complex problems
            <br />
            <br />
            Before getting into web development I was a court reporter,
            where I narrowly avoided becoming an attorney. When I'm not
            progamming I'm usually{" "}
            <span
              role="img"
              aria-label="ballpoint pen emjoi"
              style={{ "font-size": "25px", "margin-left": "5px" }}
            >
              &#128395;
            </span>{" "}
            on Medium,{" "}
            <span
              role="img"
              aria-label="surfing emjoi"
              style={{ "font-size": "25px" }}
            >
              &#127940;
            </span>
            , or{" "}
            <span
              role="img"
              aria-label="chef emjoi"
              style={{ "font-size": "24px", "margin-right": "7px" }}
            >
              👨‍🍳
            </span>
            something French
          </p>
          <div className="flex justify-center mb-8">
            <a
              href="https://www.linkedin.com/in/jacob-marthaller/"
              className="inline-flex items-center bg-gray-900 border-0 py-1 px-3 focus:outline-none rounded text-base mt-2 md:mt-0"
            >
              <img
                align="left"
                alt="linkedin-logo"
                src="https://icongr.am/fontawesome/linkedin-square.svg?size=128&color=9099a5"
                height="30"
                width="30"
              />
            </a>
            <a
              href="https://github.com/jmarthaller"
              className="inline-flex items-center bg-gray-900 border-0 py-1 px-3 focus:outline-none rounded text-base mt-2 md:mt-0"
            >
              <img
                align="left"
                alt="github-logo"
                src="https://icongr.am/fontawesome/github.svg?size=128&color=9099a5"
                height="30"
                width="30"
              />
            </a>
            <a
              href="https://twitter.com/jmartNYC"
              className="inline-flex items-center bg-gray-900 border-0 py-1 px-3 focus:outline-none rounded text-base mt-2 md:mt-0"
            >
              <img
                align="left"
                alt="twitter-logo"
                src="https://icongr.am/simple/twitter.svg?size=128&color=9099a5"
                height="30"
                width="30"
              />
            </a>
            <a
              href="https://marthaller-jr.medium.com/"
              className="inline-flex items-center bg-gray-900 border-0 py-1 px-3 focus:outline-none rounded text-base mt-2 md:mt-0"
            >
              <img
                align="left"
                alt="medium-logo"
                src="https://icongr.am/fontawesome/medium.svg?size=128&color=9099a5"
                height="30"
                width="30"
              />
            </a>
          </div>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-letterboxd border-0 py-2 px-6 focus:outline-none hover:bg-letterboxd-hover transition delay-100 duration-200 ease-in-out rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 hover:text-white transition delay-100 duration-200 ease-in-out rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center w-90 h-100 rounded-3xl filter brightness-75 .shadow-2xl animate-wiggle"
            alt="profile-picture"
            src="https://upload.wikimedia.org/wikipedia/commons/2/29/Jacobpersonalphoto.jpg"
          />
        </div>
      </div>
    </section>
  );
}

import React from "react";

export function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Jacob{" "}
            <span role="img" aria-label="waving hand emjoi">
              👋
            </span>
            <br className="hidden lg:inline-block" />I love to build amazing
            software
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm a Full Stack Software Engineer working primarily in JavaScript,
            React, and Ruby on Rails. I make software because it
            allows me to solve hard problems while expressing myself creatively.
            <br />
            <br />
            Before getting into web development I worked in legal services,
            where I narrowly avoided becoming an attorney. When I'm not
            progamming I'm usually writing on Medium, surfing, or cooking
            something French (read: lots of butter).
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-letterboxd border-0 py-2 px-6 focus:outline-none hover:bg-letterboxd-hover rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center w-90 h-100 rounded-3xl filter brightness-75 .shadow-2xl"
            alt="profile-pic"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Jacobjacob.jpg"
          />
        </div>
      </div>
    </section>
  );
}
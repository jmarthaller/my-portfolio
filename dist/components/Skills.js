"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skills = void 0;
var react_1 = require("react");
var solid_1 = require("@heroicons/react/solid");
var technologies_1 = require("../technologies");
function Skills() {
    return (<section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-20">
            <solid_1.CodeIcon className="w-10 inline-block mb-4"/>
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              Skills &amp; Technologies
            </h1>
            <div className="flex flex-wrap -m-4 mt-4 justify-center">
              {technologies_1.technologies.map(function (tech) { return (<a key={tech.image} className="w-40 p-4">
                  <div className="flex relative">
                    <img alt="language-screenshot" className="absolute inset-0 w-10 h-10 object-cover h-12 w-full object-fill" src={tech.image}/>
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h1 className="title-font text-sm font-normal text-white mb-3">
                        {tech.name}
                      </h1>
                    </div>
                  </div>
                </a>); })}
            </div>
          </div>
        </div>
      </div>
    </section>);
}
exports.Skills = Skills;

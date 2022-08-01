"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavBar = void 0;
var solid_1 = require("@heroicons/react/solid");
var react_1 = require("react");
var resume_pdf_1 = require("../resume.pdf");
function NavBar() {
    return (<header className="bg-gray-800 md:sticky top-0 z-40">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="" className="ml-3 text-xl">
            Jacob Marthaller
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#about" className="mr-5 hover:text-white">
            About
          </a>
          <a href="#projects" className="mr-5 hover:text-white">
            Portfolio
          </a>
          <a href="#experience" className="mr-5 hover:text-white">
            Experience
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#contact" className="mr-5 hover:text-white">
            Contact
          </a>
        </nav>
        
        <a href={resume_pdf_1.default} target="_blank" className="inline-flex items-center bg-gray-700 border-0 py-1 px-3 focus:outline-none hover:bg-gray-600 transition delay-100 duration-300 ease-in-out rounded text-base mt-4 md:mt-0">
          Resume
          <solid_1.BriefcaseIcon className="w-4 h-4 ml-1"/>
        </a>
      </div>
    </header>);
}
exports.NavBar = NavBar;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var NavBar_1 = require("./components/NavBar");
var About_1 = require("./components/About");
var Projects_1 = require("./components/Projects");
var Experience_1 = require("./components/Experience");
var Skills_1 = require("./components/Skills");
var Contact_1 = require("./components/Contact");
var Footer_1 = require("./components/Footer");
function App() {
    return (<main className="text-gray-400 bg-gray-900 body-font">
      <NavBar_1.NavBar />
      <About_1.About />
      <Projects_1.Projects />
      <Experience_1.Experience />
      <Skills_1.Skills />
      <Contact_1.Contact />
      <Footer_1.Footer />
    </main>);
}
exports.default = App;

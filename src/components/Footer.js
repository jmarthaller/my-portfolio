import React from "react";

export function Footer() {
  return (
    <div className="bg-gray-800">
      <div className="container static mx-auto flex flex-wrap p-7 flex-col md:flex-row items-center">
        <div className="-mr-5 text-xs text-gray-400">
          <h5>© mmxxi jacob marthaller</h5>
        </div>
        <div className="absolute right-10">
          <a
            href="https://www.linkedin.com/in/jacob-marthaller/"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none rounded text-base mt-2 md:mt-0"
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
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none rounded text-base mt-2 md:mt-0"
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
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none rounded text-base mt-2 md:mt-0"
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
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none rounded text-base mt-2 md:mt-0"
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
      </div>
    </div>
  );
}

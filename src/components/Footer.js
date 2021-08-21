
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";

export function Footer() {
  return (
    <div className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-2 md:mb-0">
          <h5 className="mr-5 hover:text-white">COPYRIGHT © 2021 JACOB MARTHALLER | ALL RIGHTS RESERVED</h5>
        </a>

        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-600 rounded text-base mt-4 md:mt-0"
        >
          <ArrowRightIcon className="w-4 h-4 ml-1" />
          GitHub
        </a>

        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-600 rounded text-base mt-4 md:mt-0"
        >
          <ArrowRightIcon className="w-4 h-4 ml-1" />
          Medium
        </a>

        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-600 rounded text-base mt-4 md:mt-0"
        >
          <ArrowRightIcon className="w-4 h-4 ml-1" />
          Twitter
        </a>
        
      </div>
    </div>
  );
}
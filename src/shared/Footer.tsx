"use client";
import React from "react";
import { FaHeartbeat } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-8 md:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Newsletter Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
            Subscribe to our Newsletter
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 md:mb-6">
            Stay up to date
          </h2>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 mb-3 md:mb-4">
              <input
                type="email"
                placeholder="name@email.com"
                className="w-full px-4 sm:px-6 py-3 md:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 md:py-4 px-4 sm:px-6 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mb-4 md:mb-6">
              by subscribing you will agree to privacy and policy
            </p>
            <div className="w-20 sm:w-24 h-0.5 sm:h-1 bg-gray-300 mx-auto mb-6 md:mb-8"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* HealthiClick Description */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 md:mb-4">
              <FaHeartbeat className="inline-block mr-2 " />
              HealthiClick
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 md:mb-6">
              The world`s most advanced SMART Weight Loss Plan, designed to
              create lasting behavioral changes, helps you become fitter and
              lose weight sustainably
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h4 className="font-bold text-gray-800 mb-3 md:mb-4 text-sm sm:text-base">
                Static pages
              </h4>
              <ul className="space-y-1 sm:space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-xs sm:text-sm text-gray-600 hover:text-blue-600"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs sm:text-sm text-gray-600 hover:text-blue-600"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs sm:text-sm text-gray-600 hover:text-blue-600"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs sm:text-sm text-gray-600 hover:text-blue-600"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-3 md:mb-4 text-sm sm:text-base">
                CMS Pages
              </h4>
              <ul className="space-y-1 sm:space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-xs sm:text-sm text-gray-600 hover:text-blue-600"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs sm:text-sm text-gray-600 hover:text-blue-600"
                  >
                    Doctors
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs sm:text-sm text-gray-600 hover:text-blue-600"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs sm:text-sm text-gray-600 hover:text-blue-600"
                  >
                    Blogs
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-bold text-gray-800 mb-3 md:mb-4 text-sm sm:text-base">
                Contact Us
              </h4>
              <ul className="space-y-1 sm:space-y-2">
                <li className="text-xs sm:text-sm text-gray-600">
                  team@healthiclick.co
                </li>
                <li className="text-xs sm:text-sm text-gray-600">
                  +91- 8958958004
                </li>
                <li className="text-xs sm:text-sm text-gray-600">
                  Monday-Saturday
                </li>
                <li className="text-xs sm:text-sm text-gray-600">
                  10am to 7pm
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

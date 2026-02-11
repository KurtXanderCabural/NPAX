import React from "react";
import nOxImage from "../assets/Nox.png";
import { Globe } from "lucide-react";
import logo1 from "../assets/1.png";
import logo2 from "../assets/2.png";
import logo3 from "../assets/3.png";
import logo4 from "../assets/4.png";
import logo5 from "../assets/5.png";
import logo6 from "../assets/6.png";
import awardImage from "../assets/award.png";
import chartImage from "../assets/Chart.png";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen text-white bg-black">
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 bg-black/80">
        <div className="flex items-center">
          <img src={nOxImage} alt="NOX Logo" className="h-12 w-auto" />
        </div>

        <div className="flex items-center space-x-12">
          <a href="#home" className="text-white hover:text-blue-500 transition">
            Home
          </a>
          <a
            href="#services"
            className="text-white hover:text-blue-500 transition"
          >
            Services
          </a>
          <a
            href="#blogs"
            className="text-white hover:text-blue-500 transition"
          >
            Blogs
          </a>
          <a
            href="https://www.n-pax.com/update/index_careers.php#"
            className="text-white hover:text-blue-500 transition"
          >
            Careers
          </a>
          <a
            href="https://www.n-pax.com/about-us.php"
            className="text-white hover:text-blue-500 transition"
          >
            Abouts Us
          </a>
        </div>

        <Globe className="w-8 h-8 text-white cursor-pointer hover:text-blue-500 transition" />
      </nav>

      {/* Hero Section */}
      <div className="relative px-8 py-16 overflow-hidden h-auto">
        {/* Video Background */}
       <video
          className="absolute inset-0 w-full object-cover opacity-40"
          style={{ height: "600px" }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/npax.mp4" type="video/mp4" />
        </video>
  

        {/* Left Content */}
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-6xl font-bold leading-tight mb-6">
            <span className="text-blue-500">Technology Moves Fast.</span>
            <br />
            <span className="text-blue-500">But You Can Too.</span>
          </h1>

          <p className="text-2xl text-white mb-8">
            Evolve Your IT with First Focus
          </p>

          <button className="px-8 py-4 border-2 border-yellow-500 text-yellow-500 rounded-lg text-xl font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300 mb-12">
            Get Started
          </button>

          <p className="text-xl text-white mb-8">23 years in excellence</p>

          {/* Awards Section */}
          <img
            src={awardImage}
            alt="Awards"
            className="h-20 w-auto object-contain"
          />
        </div>
      </div>

      {/* Partners Section with Animation */}
      <div className="px-7 py-8 border-t border-gray-800 overflow-hidden">
        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="flex animate-scroll">
          {/* First set of logos */}
          <div className="flex items-center justify-around min-w-full px-8">
            <div className="px-12 flex items-center justify-center">
              <img
                src={logo1}
                alt="Logo 1"
                className="h-23 w-21 object-contain"
              />
            </div>

            <div className="px-12 flex items-center justify-center">
              <img
                src={logo2}
                alt="Logo 2"
                className="h-22 w-21 object-contain"
              />
            </div>

            <div className="px-12 flex items-center justify-center">
              <img
                src={logo3}
                alt="Logo 3"
                className="h-24 w-22 object-contain"
              />
            </div>

            <div className="px-12 flex items-center justify-center">
              <img
                src={logo4}
                alt="Logo 4"
                className="h-16 w-16 object-contain"
              />
            </div>

            <div className="px-12 flex items-center justify-center">
              <img
                src={logo5}
                alt="Logo 5"
                className="h-20 w-25 object-contain"
              />
            </div>

            <div className="px-12 flex items-center justify-center">
              <img
                src={logo6}
                alt="Logo 6"
                className="h-20 w-23 object-contain"
              />
            </div>
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="flex items-center justify-around min-w-full px-8">
            <div className="px-12 flex items-center justify-center">
              <img
                src={logo1}
                alt="Logo 1"
                className="h-23 w-21 object-contain"
              />
            </div>

            <div className="px-12 flex items-center justify-center">
              <img
                src={logo2}
                alt="Logo 2"
                className="h-22 w-21 object-contain"
              />
            </div>

            <div className="px-12 flex items-center justify-center">
              <img
                src={logo3}
                alt="Logo 3"
                className="h-24 w-22 object-contain"
              />
            </div>

            <div className="px-12 flex items-center justify-center">
              <img
                src={logo4}
                alt="Logo 4"
                className="h-16 w-16 object-contain"
              />
            </div>

            <div className="px-12 flex items-center justify-center">
              <img
                src={logo5}
                alt="Logo 5"
                className="h-20 w-25 object-contain"
              />
            </div>

            <div className="px-12 flex items-center justify-center">
              <img
                src={logo6}
                alt="Logo 6"
                className="h-20 w-23 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="px-8 py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-8">
              Our Services
            </h3>

            <h2 className="text-5xl font-bold text-blue-500 leading-tight mb-8">
              We Help People Use Technology to Make a Difference
            </h2>

            <p className="text-white text-lg mb-12 leading-relaxed">
              As a leading Managed Service Provider for mid-market businesses,
              First Focus provides high-quality and reliable managed IT services
              to help organisations between 50-200 staff succeed with IT.
            </p>
            <div className="flex gap-8 mb-6"></div>

            {/* Main Dashboard */}
            <div className="bg-gray-900 rounded-b-xl p-7 border-l border-r border-b border-gray-700">
              <div className="flex gap-8 mb-6">
                {/* Line Chart */}
                <div className="bg-gray-900 rounded-xl p-4 flex-1 border border-gray-700 relative overflow-hidden">
                  <img
                    src={chartImage}
                    alt="Chart"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Service List */}
            <div className="space-y-6 mb-16">
              <div className="border-b border-gray-700 pb-4">
                <a
                  href="https://www.n-pax.com/nxpert.php"
                  className="text-2xl font-semibold text-white hover:text-gray-300 no-underline hover:no-underline"
                >
                  ERP Systems
                </a>
              </div>

              <div className="border-b border-gray-700 pb-4">
                <a
                  href="https://www.n-pax.com/hrc.php"
                  className="text-2xl font-semibold text-white hover:text-gray-300 no-underline hover:no-underline"
                >
                  HRIS Systems
                </a>
              </div>

              <div className="border-b border-gray-700 pb-4">
                <a
                  href="https://www.n-pax.com/mcframega.php"
                  className="text-2xl font-semibold text-white hover:text-gray-300 no-underline hover:no-underline"
                >
                  Accounting Systems
                </a>
              </div>

              <div className="border-b border-gray-700 pb-4">
                <a
                  href="https://www.n-pax.com/mcframe_iot.php"
                  className="text-2xl font-semibold text-white hover:text-gray-300 no-underline hover:no-underline"
                >
                  IoT Systems
                </a>
              </div>

              <div className="border-b border-gray-700 pb-4">
                <a
                  href="https://www.n-pax.com/manage_services.php"
                  className="text-2xl font-semibold text-white hover:text-gray-300 no-underline hover:no-underline"
                >
                  IT Services
                </a>
              </div>
            </div>

            {/* Threat Intelligence Section */}
            <div className="mt-12">
              <div className="flex gap-8 mb-6"></div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Predict, prevent, and protect with elite actionable threat
                intelligence
              </h2>

              <p className="text-gray-300 mb-8 leading-relaxed">
                Stay ahead of emerging threats with deep insights from Trend™
                Research, one of the world's largest cyber security research
                networks.
              </p>

              <h3 className="text-2xl font-bold text-blue-500 mb-4">
                Proactive defense strategies
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Stay ahead of adversaries with industry <br /> leading{" "}
                <span className="text-white font-semibold">
                  Trend Zero Day Initiative™
                </span>
                (ZDI) <br /> intelligence, detecting and mitigating <br />{" "}
                vulnerabilities before they can be <br />
                exploited, up to 3 months ahead <br />
                of a patch.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blogs and Insights Section */}
      <div className="px-8 py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Blogs and Insights
            </h2>
            <p className="text-4xl font-bold text-white">Current Updates</p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* Blog Card 1 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-purple-900 to-red-900 flex items-center justify-center">
                <img
                  src="/src/assets/blog1.png"
                  alt="Event performance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Latest Event Highlights
                </h3>
                <p className="text-gray-400 text-sm">
                  Showcasing innovation and technology solutions at our recent
                  event
                </p>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-blue-900 to-cyan-900 flex items-center justify-center">
                <a
                  href="https://www.n-pax.com/update/news.php?p_id=15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full"
                >
                  <img
                    src="/src/assets/blog2.png"
                    alt="HRC Booth"
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  HRC Partnership Success
                </h3>
                <p className="text-gray-400 text-sm">
                  Expanding our human resource solutions and technology
                  integrations
                </p>
              </div>
            </div>

            {/* Blog Card 3 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-blue-900 to-cyan-900 flex items-center justify-center">
                <a
                  href="https://www.n-pax.com/update/news.php?p_id=17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full"
                >
                  <img
                    src="/src/assets/blog3.png"
                    alt="HRC Booth"
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Team Excellence Award
                </h3>
                <p className="text-gray-400 text-sm">
                  Celebrating our achievements and commitment to innovation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Bot */}
      {/* <div className="fixed bottom-8 right-8 z-50">
        <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-full p-2 shadow-2xl cursor-pointer hover:scale-110 transition-transform duration-300 border-2 border-gray-600">
          <svg
            width="40"
            height="40"
            viewBox="0 0 60 60"
            className="text-white"
          > */}
            {/* Bot head */}
            {/* <rect
              x="10"
              y="20"
              width="40"
              height="30"
              rx="8"
              fill="currentColor"
            /> */}

            {/* Antennas */}
            {/* <circle cx="18" cy="15" r="3" fill="#60a5fa" />
            <line
              x1="18"
              y1="18"
              x2="18"
              y2="20"
              stroke="currentColor"
              strokeWidth="2"
            /> */}
            {/* <circle cx="42" cy="15" r="3" fill="#60a5fa" />
            <line
              x1="42"
              y1="18"
              x2="42"
              y2="20"
              stroke="currentColor"
              strokeWidth="2"
            /> */}

            {/* Eyes */}
            {/* <circle cx="22" cy="32" r="4" fill="#60a5fa" />
            <circle cx="38" cy="32" r="4" fill="#60a5fa" /> */}

            {/* Smile */}
            {/* <path
              d="M 20,40 Q 30,46 40,40"
              stroke="#60a5fa"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div> */}

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 px-8 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={nOxImage} alt="NOX Logo" className="h-10 w-auto" />
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-base">
            2025 CodeAI Solutions. All rights reserved.
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.facebook.com/NPAXCEBU"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            <a
              href="https://x.com/npax_solutions"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/company/n-pax-cebu-corporation/posts/?feedView=all"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            <a
              href="https://www.youtube.com/@n-paxsolutions590"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

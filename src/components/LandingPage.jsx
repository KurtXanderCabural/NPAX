import React, { useMemo, useState } from "react";
import nOxImage from "../assets/NOX.png";
import { Globe, Menu, X } from "lucide-react";
import logo1 from "../assets/1.png";
import logo2 from "../assets/2.png";
import logo3 from "../assets/3.png";
import logo4 from "../assets/4.png";
import logo5 from "../assets/5.png";
import logo6 from "../assets/6.png";
import awardImage from "../assets/award.png";
import chartImage from "../assets/Chart.png";

export default function LandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = useMemo(
    () => [
      { href: "#home", label: "Home" },
      { href: "#services", label: "Services" },
      { href: "#blogs", label: "Blogs" },
      { href: "https://www.n-pax.com/update/index_careers.php#", label: "Careers", external: true },
      { href: "https://www.n-pax.com/about-us.php", label: "About Us", external: true },
    ],
    []
  );

  return (
    <div className="relative min-h-screen text-white bg-black">
      {/* Navigation */}
      <nav className="relative z-20 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60 border-b border-gray-900/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={nOxImage} alt="NOX Logo" className="h-10 sm:h-12 w-auto" />
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                className="text-white hover:text-blue-500 transition whitespace-nowrap"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Globe className="hidden sm:block w-7 h-7 sm:w-8 sm:h-8 text-white cursor-pointer hover:text-blue-500 transition" />

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-gray-800 px-3 py-2 hover:border-blue-500 transition"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-900/60">
            <div className="mx-auto max-w-7xl px-4 sm:px-8 py-4 flex flex-col gap-3">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener noreferrer" : undefined}
                  className="py-2 text-white hover:text-blue-500 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-[460px] sm:h-[560px] lg:h-[640px] object-cover opacity-40"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/npax.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 h-[460px] sm:h-[560px] lg:h-[640px] bg-gradient-to-b from-black/40 via-black/40 to-black" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 py-14 sm:py-16 lg:py-20">
          <div className="max-w-2xl">
            <h1 className="font-bold leading-tight mb-5 sm:mb-6 text-3xl sm:text-5xl lg:text-6xl">
              <span className="text-blue-500">Technology Moves Fast.</span>
              <br />
              <span className="text-blue-500">But You Can Too.</span>
            </h1>

            <p className="text-base sm:text-xl lg:text-2xl text-white mb-7 sm:mb-8">
              Evolve Your IT with First Focus
            </p>

            <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-yellow-500 text-yellow-500 rounded-lg text-base sm:text-lg lg:text-xl font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300 mb-8 sm:mb-12">
              Get Started
            </button>

            <p className="text-sm sm:text-lg lg:text-xl text-white mb-6 sm:mb-8">23 years in excellence</p>

            <img src={awardImage} alt="Awards" className="h-14 sm:h-16 lg:h-20 w-auto object-contain" />
          </div>
        </div>
      </section>

      {/* Partners Section with Animation */}
      <section className="px-4 sm:px-7 py-6 sm:py-8 border-t border-gray-800 overflow-hidden">
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll { animation: scroll 20s linear infinite; }
          .animate-scroll:hover { animation-play-state: paused; }
        `}</style>

        <div className="flex animate-scroll">
          {/* First set of logos */}
          <div className="flex items-center justify-around min-w-full px-4 sm:px-8">
            {[
              { src: logo1, alt: "Logo 1" },
              { src: logo2, alt: "Logo 2" },
              { src: logo3, alt: "Logo 3" },
              { src: logo4, alt: "Logo 4" },
              { src: logo5, alt: "Logo 5" },
              { src: logo6, alt: "Logo 6" },
            ].map((l) => (
              <div key={l.alt} className="px-3 sm:px-8 lg:px-10 flex items-center justify-center">
                <img
                  src={l.src}
                  alt={l.alt}
                  className="h-14 sm:h-16 lg:h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="flex items-center justify-around min-w-full px-4 sm:px-8">
            {[
              { src: logo1, alt: "Logo 1" },
              { src: logo2, alt: "Logo 2" },
              { src: logo3, alt: "Logo 3" },
              { src: logo4, alt: "Logo 4" },
              { src: logo5, alt: "Logo 5" },
              { src: logo6, alt: "Logo 6" },
            ].map((l) => (
              <div key={`${l.alt}-dup`} className="px-3 sm:px-8 lg:px-10 flex items-center justify-center">
                <img
                  src={l.src}
                  alt={l.alt}
                  className="h-14 sm:h-16 lg:h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-4 sm:px-8 py-14 sm:py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left Column */}
          <div>
            <h3 className="text-base sm:text-xl font-semibold text-white mb-6 sm:mb-8">
              Our Services
            </h3>

            <h2 className="text-3xl sm:text-5xl font-bold text-blue-500 leading-tight mb-6 sm:mb-8">
              We Help People Use Technology to Make a Difference
            </h2>

            <p className="text-white text-sm sm:text-lg mb-10 sm:mb-12 leading-relaxed">
              As a leading Managed Service Provider for mid-market businesses,
              First Focus provides high-quality and reliable managed IT services
              to help organisations between 50-200 staff succeed with IT.
            </p>

            {/* Main Dashboard */}
            <div className="bg-gray-900 rounded-xl p-4 sm:p-7 border border-gray-700">
              <div className="bg-gray-900 rounded-xl p-3 sm:p-4 border border-gray-700 relative overflow-hidden">
                <img src={chartImage} alt="Chart" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Service List */}
            <div className="space-y-5 sm:space-y-6 mb-12 sm:mb-16">
              {[
                "ERP Systems",
                "HRIS Systems",
                "Accounting Systems",
                "IoT Systems",
                "IT Services",
              ].map((name) => (
                <div key={name} className="border-b border-gray-700 pb-4">
                  <a
                    href="#"
                    className="text-lg sm:text-2xl font-semibold text-white hover:text-gray-300 no-underline hover:no-underline"
                  >
                    {name}
                  </a>
                </div>
              ))}
            </div>

            {/* Threat Intelligence Section */}
            <div className="mt-10 sm:mt-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 sm:mb-6">
                Predict, prevent, and protect with elite actionable threat intelligence
              </h2>

              <p className="text-gray-300 text-sm sm:text-base mb-7 sm:mb-8 leading-relaxed">
                Stay ahead of emerging threats with deep insights from Trend™ Research,
                one of the world's largest cyber security research networks.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-blue-500 mb-3 sm:mb-4">
                Proactive defense strategies
              </h3>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Stay ahead of adversaries with industry{" "}
                <span className="text-white font-semibold">Trend Zero Day Initiative™</span> (ZDI)
                intelligence, detecting and mitigating vulnerabilities before they can be exploited.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs and Insights Section */}
      <section id="blogs" className="px-4 sm:px-8 py-14 sm:py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">
              Blogs and Insights
            </h2>
            <p className="text-2xl sm:text-4xl font-bold text-white">Current Updates</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Blog Card 1 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-[1.02]">
              <div className="aspect-video bg-gradient-to-br from-purple-900 to-red-900">
                <img
                  src="/blog/blog1.png"
                  alt="Event performance"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Latest Event Highlights
                </h3>
                <p className="text-gray-400 text-sm">
                  Showcasing innovation and technology solutions at our recent event
                </p>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-[1.02]">
              <div className="aspect-video bg-gradient-to-br from-blue-900 to-cyan-900">
                <a href="#" className="block w-full h-full">
                  <img
                    src="/blog/blog2.png"
                    alt="HRC Booth"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </a>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  HRC Partnership Success
                </h3>
                <p className="text-gray-400 text-sm">
                  Expanding our human resource solutions and technology integrations
                </p>
              </div>
            </div>

            {/* Blog Card 3 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-[1.02]">
              <div className="aspect-video bg-gradient-to-br from-blue-900 to-cyan-900">
                <a href="#" className="block w-full h-full">
                  <img
                    src="/blog/blog3.png"
                    alt="Team excellence award"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </a>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Team Excellence Award
                </h3>
                <p className="text-gray-400 text-sm">
                  Celebrating our achievements and commitment to innovation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 px-4 sm:px-8 py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <img src={nOxImage} alt="NOX Logo" className="h-9 sm:h-10 w-auto" />
          </div>

          <div className="text-gray-400 text-sm sm:text-base text-center">
            2026 NOX Solutions. All rights reserved.
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
              <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="X">
              <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
              <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client"; // Mark this component as a Client Component

import Image from "next/image";
import { useState } from "react";
import FeaturesSection from "@/components/landing_page/FeaturesSection";
import AboutSection from "@/components/landing_page/AboutSection";
import OurTeamSection from "@/components/landing_page/OurTeamSection"; 
import Footer from "@/components/landing_page/Footer"; 
import ContactUs from "@/components/landing_page/ContactUs";  



export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <nav className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold">GetSkills</h1>

        {/* Hamburger Menu Icon (Visible on Small Screens) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu (Hidden on Small Screens) */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-gray-300 hover:text-white">
            Features
          </a>
          <a href="#about" className="text-gray-300 hover:text-white">
            About
          </a>
          <a href="#ourTeam" className="text-gray-300 hover:text-white">
            Our Teams
          </a>
          <button className="bg-blue-600 px-4 py-2 rounded mr-2">Sign In</button>
          <button className="bg-gray-700 px-4 py-2 rounded">Sign Up</button>
        </div>
      </nav>

        {/* Mobile Menu (Visible on Small Screens) */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 p-4">
          <ul className="space-y-4">
            <li>
              <a href="#features" className="text-gray-300 hover:text-white block">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-300 hover:text-white block">
                About
              </a>
            </li>
            <li>
              <a href="#team" className="text-gray-300 hover:text-white block">
                Our Teams
              </a>
            </li>
            <li>
              <button className="bg-blue-600 px-4 py-2 rounded w-full text-left">
                Sign In
              </button>
            </li>
            <li>
              <button className="bg-gray-700 px-4 py-2 rounded w-full text-left">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      )}

      

      <header className="flex flex-col-reverse md:flex-row justify-between items-center mt-16 p-6 max-w-6xl mx-auto">
        {/* Left Text Content */}
        <div className="max-w-lg text-center md:text-left">
          <span className="bg-gray-800 px-4 py-1 rounded-full text-sm">
            Learn Anytime, Anywhere with GetSkills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Empowering learners with high-quality courses from top instructors
          </h2>
          <p className="text-gray-400 mt-4">
            Whether you are looking to advance your career, learn a new skill, or explore your passion, we provide expertly crafted courses in various fields.
          </p>
          <div className="mt-6">
            <button className="bg-blue-600 px-6 py-3 rounded text-lg mr-4">Get Started →</button>
            <button className="bg-gray-700 px-6 py-3 rounded text-lg">How it Works</button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-auto flex justify-center">
          <Image 
            src="/interior-designer-working-out-office.jpg" 
            alt="Developer working" 
            width={500} 
            height={350} 
            className="rounded-lg object-cover"
          />
          
        </div>
      </header>  
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      
      <div id="ourTeam">
        <OurTeamSection />
      </div>

      <div id="contactUs">
        <ContactUs />
      </div>

      <Footer />
      

    </div>
    
  );
}


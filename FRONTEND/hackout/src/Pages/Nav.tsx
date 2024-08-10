import { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link, useLocation } from 'react-router-dom';
import SoilFertility from './SoilFertility';
import Weather from './Weather';
import Crop from './Crop';
import FertilizerPesticide from './Fertilizer';
import SoilImprovement from './SoilImprove';

const scrollToSection = (id) => {
  const navbarHeight = document.querySelector('header')?.offsetHeight || 0;
  const section = document.getElementById(id);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - navbarHeight - 13, // Adjust based on navbar height
      behavior: 'smooth',
    });
  }
};

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close the mobile menu when navigating
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (id) => {
    scrollToSection(id);
    setIsOpen(false); // Collapse the menu after selection
  };

  return (
    <>
      <header className="bg-white text-green-500 py-4 px-6 md:px-8 lg:px-10 shadow-md fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="leaf.png" alt="Logo" className="w-10 h-10 mr-3" />
            <h1 className="text-2xl font-bold text-[#67AD5B] header-font">AgroInsight</h1>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#soil-fertility" onClick={(e) => { e.preventDefault(); scrollToSection('soil-fertility'); }} className="hover:text-gray-700">Soil Fertility</a>
            <a href="#weather" onClick={(e) => { e.preventDefault(); scrollToSection('weather'); }} className="hover:text-gray-700">Weather</a>
            <a href="#crop-recommendations" onClick={(e) => { e.preventDefault(); scrollToSection('crop-recommendations'); }} className="hover:text-gray-700">Crop Recommendations</a>
            <a href="#fertilizer-pesticide" onClick={(e) => { e.preventDefault(); scrollToSection('fertilizer-pesticide'); }} className="hover:text-gray-700">Fertilizer & Pesticide</a>
            <a href="#soil-improvement" onClick={(e) => { e.preventDefault(); scrollToSection('soil-improvement'); }} className="hover:text-gray-700">Soil Improvement</a>
          </nav>
          <div className="text-lg font-semibold text-[#67AD5B] hidden md:block">
            HackOut 24
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center p-2 rounded-full hover:bg-gray-100 focus:outline-none"
          >
            <MenuIcon className="w-6 h-6 text-green-500" />
            <span className="sr-only">Toggle Menu</span>
          </button>
        </div>
        {/* Mobile Menu */}
        <nav
          className={`md:hidden fixed top-0 right-0 bg-white shadow-lg w-3/4 h-full z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex justify-between items-center p-4">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-gray-100 focus:outline-none"
            >
              <XIcon className="w-6 h-6 text-green-500" />
              <span className="sr-only">Close Menu</span>
            </button>
          </div>
          <div className="flex flex-col items-center mt-10">
            <a href="#soil-fertility" onClick={(e) => { e.preventDefault(); handleMenuClick('soil-fertility'); }} className="py-2 text-xl hover:text-gray-700">Soil Fertility</a>
            <a href="#weather" onClick={(e) => { e.preventDefault(); handleMenuClick('weather'); }} className="py-2 text-xl hover:text-gray-700">Weather</a>
            <a href="#crop-recommendations" onClick={(e) => { e.preventDefault(); handleMenuClick('crop-recommendations'); }} className="py-2 text-xl hover:text-gray-700">Crop Recommendations</a>
            <a href="#fertilizer-pesticide" onClick={(e) => { e.preventDefault(); handleMenuClick('fertilizer-pesticide'); }} className="py-2 text-xl hover:text-gray-700">Fertilizer & Pesticide</a>
            <a href="#soil-improvement" onClick={(e) => { e.preventDefault(); handleMenuClick('soil-improvement'); }} className="py-2 text-xl hover:text-gray-700">Soil Improvement</a>
          </div>
        </nav>
      </header>

      {/* Add top padding equal to the height of the navbar */}
      <div className="pt-20 md:pt-20">
        <SoilFertility />
        <Weather />
        <Crop />
        <FertilizerPesticide />
        <SoilImprovement />
      </div>
    </>
  );
}

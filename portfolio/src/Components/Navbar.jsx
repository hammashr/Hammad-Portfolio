import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-[#1a1b20] via-[#241e2e] to-[#0e0e11] backdrop-blur-lg border-b border-white/10 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-lg font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent tracking-wide">
          HAMMAD ASHRAF
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-white">
          {menuItems.map((item) => (
            <li key={item.name} className="relative group cursor-pointer">
              <Link
                to={item.path}
                className={`transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "text-orange-400"
                    : "hover:text-orange-400"
                }`}
              >
                {item.name}
              </Link>
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-500 ${
                  location.pathname === item.path
                    ? "w-full"
                    : "group-hover:w-full w-0"
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white text-2xl cursor-pointer p-2 hover:text-orange-400 transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-[72px] left-0 w-full bg-gradient-to-b from-[#1a1b20] via-[#241e2e] to-[#0e0e11] backdrop-blur-lg border-b border-white/10 shadow-lg transform transition-all duration-300 ease-in-out z-50 md:hidden ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col py-6 px-6 space-y-1">
          {menuItems.map((item) => (
            <li key={item.name} className="relative group">
              <Link
                to={item.path}
                onClick={closeMobileMenu}
                className={`block py-3 px-4 rounded-lg text-base font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? "text-orange-400 bg-orange-400/10 border-l-4 border-orange-400"
                    : "text-white hover:text-orange-400 hover:bg-white/5 hover:border-l-4 hover:border-orange-400/50"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

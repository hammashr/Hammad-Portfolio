import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      href: "https://github.com/hammashr",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      href: "https://www.linkedin.com/in/hammad-ashraf-/",
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.987 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-2.508 0-4.541-2.033-4.541-4.541s2.033-4.541 4.541-4.541 4.541 2.033 4.541 4.541-2.033 4.541-4.541 4.541zm7.519 0c-2.508 0-4.541-2.033-4.541-4.541s2.033-4.541 4.541-4.541 4.541 2.033 4.541 4.541-2.033 4.541-4.541 4.541z" />
        </svg>
      ),
      href: "https://www.instagram.com/hammadashraf82/",
    },
  ];

  return (
    <footer className="relative bg-black/90 text-white border-t border-white/10 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 animate-gradient-x"
          style={{
            background: `linear-gradient(45deg, #8B5CF6, #EC4899, #8B5CF6, #F97316, #8B5CF6)`,
            backgroundSize: "400% 400%",
            opacity: 0.1,
          }}
        ></div>

        {/* Floating Orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl animate-float-slow"
          style={{
            background: `radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)`,
          }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl animate-float-slow-reverse"
          style={{
            background: `radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Left: My Portfolio - Centered on mobile */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                My Portfolio
              </span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              Delivering{" "}
              <span className="text-purple-400 font-semibold">
                Web Development
              </span>
              ,{" "}
              <span className="text-pink-400 font-semibold">
                WordPress Solutions
              </span>
              , and{" "}
              <span className="text-orange-400 font-semibold">
                SEO/Digital Marketing
              </span>{" "}
              services tailored to grow your brand online.
            </p>
          </div>

          {/* Middle: Quick Links - Centered on all screens */}
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Quick Links
              </span>
            </h4>
            <div className="flex flex-wrap gap-4 justify-center">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Follow Me - Centered on all screens */}
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                Follow Me
              </span>
            </h4>
            <div className="flex gap-4 justify-center">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-purple-400/50 hover:scale-110"
                >
                  <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar - Centered on mobile */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center">
            <p className="text-gray-400 text-sm">
              © {year} My Portfolio. All rights reserved.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <a
                href="#privacy"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="#terms"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes float-slow-reverse {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(20px) translateX(-10px);
          }
        }

        .animate-gradient-x {
          animation: gradient-x 8s ease infinite;
        }

        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }

        .animate-float-slow-reverse {
          animation: float-slow-reverse 12s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}

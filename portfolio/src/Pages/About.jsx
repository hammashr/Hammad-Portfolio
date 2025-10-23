import React from "react";

const certifications = [
  // Degree (from your provided data)
  {
    title:
      "Bachelor's in Computer Science — Comsats University Islamabad, Wah Campus, Pakistan",
    link: "#",
    icon: "degree",
  },

  // Certifications (from your provided data)
  {
    title: "WordPress Development Certification (Completed March 2024)",
    link: "#",
    icon: "badge",
  },
  {
    title: "Advanced React.js Development Course (Completed Feb 2024)",
    link: "#",
    icon: "badge",
  },
  {
    title: "Frontend Web Development by FreeCodeCamp",
    link: "#",
    icon: "badge",
  },
  {
    title: "Responsive Web Design Certification",
    link: "#",
    icon: "badge",
  },
];

// tiny inline icons (no external deps)
function Icon({ name, className = "h-5 w-5" }) {
  if (name === "degree") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3zm0 11L5.21 9 12 5.5 18.79 9 12 14z" />
      </svg>
    );
  }
  if (name === "briefcase") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M10 4h4a2 2 0 0 1 2 2v1h3a2 2 0 0 1 2 2v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9a2 2 0 0 1 2-2h3V6a2 2 0 0 1 2-2Zm4 3V6h-4v1h4Z" />
      </svg>
    );
  }
  // default badge
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2 3 6v6c0 5 9 10 9 10s9-5 9-10V6l-9-4Zm0 2.18L19 7v5c0 3.58-4.38 7.12-7 8.8-2.62-1.68-7-5.22-7-8.8V7l7-2.82ZM12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
    </svg>
  );
}

function CertCard({ item }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur-sm transition-all duration-300 hover:translate-y-[-2px]">
      {/* bottom-focused glow on hover */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-[-30%] h-[140%] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 100%, rgba(249,115,22,0.6) 0%, rgba(217,70,239,0.35) 40%, transparent 70%)",
        }}
      />
      <div className="relative flex items-start gap-3">
        <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white/90">
          <Icon name={item.icon} className="h-5 w-5" />
        </div>
        <p className="text-sm leading-relaxed text-white/85">{item.title}</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div
      className="min-h-screen text-white relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #3F1732 0%, #5A1E3B 25%, #3F1732 50%, #2D1125 75%, #3F1732 100%)`,
      }}
    >
      {/* Animated Background Gradient with #3F1732 */}
      <div
        className="absolute inset-0 animate-gradient-x"
        style={{
          background: `linear-gradient(45deg, #3F1732, #5A1E3B, #3F1732, #6B2347, #3F1732)`,
          backgroundSize: "400% 400%",
        }}
      ></div>

      {/* Moving Gradient Waves with #3F1732 */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-0 w-full h-full animate-pulse"
          style={{
            background: `linear-gradient(135deg, rgba(63, 23, 50, 0.6) 0%, transparent 50%, rgba(90, 30, 59, 0.4) 100%)`,
          }}
        ></div>
        <div
          className="absolute top-0 right-0 w-3/4 h-3/4 animate-float"
          style={{
            background: `linear-gradient(225deg, rgba(107, 35, 71, 0.3) 0%, transparent 50%, rgba(63, 23, 50, 0.5) 100%)`,
          }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-2/3 h-2/3 animate-float-reverse"
          style={{
            background: `linear-gradient(45deg, rgba(63, 23, 50, 0.4) 0%, transparent 50%, rgba(90, 30, 59, 0.3) 100%)`,
          }}
        ></div>
      </div>

      {/* Animated Orbs with #3F1732 variations */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-float-slow"
        style={{
          background: `radial-gradient(circle, rgba(63, 23, 50, 0.3) 0%, transparent 70%)`,
        }}
      ></div>
      <div
        className="absolute bottom-1/3 left-1/5 w-80 h-80 rounded-full blur-3xl animate-float-slow-reverse"
        style={{
          background: `radial-gradient(circle, rgba(90, 30, 59, 0.25) 0%, transparent 70%)`,
        }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl animate-spin-slow"
        style={{
          background: `radial-gradient(circle, rgba(107, 35, 71, 0.2) 0%, transparent 70%)`,
        }}
      ></div>

      {/* Flowing Lines with #3F1732 tints */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-full h-px top-1/4 animate-slide-right"
          style={{
            background: `linear-gradient(90deg, transparent 0%, rgba(63, 23, 50, 0.8) 50%, transparent 100%)`,
          }}
        ></div>
        <div
          className="absolute w-full h-px top-3/4 animate-slide-left"
          style={{
            background: `linear-gradient(90deg, transparent 0%, rgba(90, 30, 59, 0.6) 50%, transparent 100%)`,
          }}
        ></div>
        <div
          className="absolute w-px h-full left-1/4 animate-slide-down"
          style={{
            background: `linear-gradient(180deg, transparent 0%, rgba(63, 23, 50, 0.6) 50%, transparent 100%)`,
          }}
        ></div>
        <div
          className="absolute w-px h-full right-1/3 animate-slide-up"
          style={{
            background: `linear-gradient(180deg, transparent 0%, rgba(107, 35, 71, 0.4) 50%, transparent 100%)`,
          }}
        ></div>
      </div>

      {/* Sparkling Particles */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-twinkle"
            style={{
              background:
                i % 3 === 0 ? "#3F1732" : i % 3 === 1 ? "#5A1E3B" : "#6B2347",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: 0.7,
            }}
          ></div>
        ))}
      </div>

      <section
        id="about"
        className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-white text-center"
      >
        {/* meta heading */}

        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        {/* intro text - centered */}
        <p className="mt-4 max-w-3xl mx-auto text-white/80">
          I'm a skilled <span className="text-white">WordPress</span> and{" "}
          <span className="text-white">Frontend Developer</span> passionate
          about creating fast, responsive, and visually appealing web
          experiences. I specialize in custom WordPress solutions and modern
          frontend technologies, focusing on clean code, usability, and websites
          that perform flawlessly across all devices.
        </p>

        {/* Mission & Vision cards - centered */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 max-w-5xl mx-auto">
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-orange-400/40 hover:bg-white/10 text-center">
            <div
              className="absolute inset-x-0 bottom-[-40%] h-[150%] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20"
              style={{
                background:
                  "radial-gradient(80% 60% at 50% 100%, rgba(168,85,247,0.6) 0%, rgba(236,72,153,0.35) 40%, transparent 70%)",
              }}
            />
            <div className="relative">
              <h3 className="text-lg font-semibold">Mission</h3>
              <p className="mt-2 text-sm text-white/80">
                Build performant, accessible, and beautiful websites that solve
                real business problems. I aim to combine clean engineering with
                thoughtful UX so every product feels fast, intuitive, and
                brand-true.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-orange-400/40 hover:bg-white/10 text-center">
            <div
              className="absolute inset-x-0 bottom-[-40%] h-[150%] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20"
              style={{
                background:
                  "radial-gradient(80% 60% at 50% 100%, rgba(249,115,22,0.6) 0%, rgba(217,70,239,0.35) 40%, transparent 70%)",
              }}
            />
            <div className="relative">
              <h3 className="text-lg font-semibold">Vision</h3>
              <p className="mt-2 text-sm text-white/80">
                Create digital experiences that feel effortless on every device,
                empower creators and businesses, and push the web toward
                elegant, inclusive design—with WordPress and the modern MERN
                toolchain.
              </p>
            </div>
          </div>
        </div>

        {/* Education and Certifications - centered */}
        <div className="mt-14">
          {/* heading */}
          <p className="text-xs uppercase tracking-[0.25em] text-white/60">
            Credentials
          </p>
          <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Education & Certifications
            </span>
          </h3>

          <div className="mt-6 grid gap-4 max-w-4xl mx-auto">
            {certifications.map((c) => (
              <CertCard key={c.title} item={c} />
            ))}
          </div>
        </div>
      </section>

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

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(20px) rotate(-180deg);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-30px) translateX(20px);
          }
        }

        @keyframes float-slow-reverse {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(30px) translateX(-20px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes slide-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes slide-left {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes slide-down {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        @keyframes slide-up {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 0.7;
            transform: scale(1);
          }
        }

        .animate-gradient-x {
          animation: gradient-x 8s ease infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }

        .animate-float-slow-reverse {
          animation: float-slow-reverse 12s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-slide-right {
          animation: slide-right 3s linear infinite;
        }

        .animate-slide-left {
          animation: slide-left 4s linear infinite;
        }

        .animate-slide-down {
          animation: slide-down 5s linear infinite;
        }

        .animate-slide-up {
          animation: slide-up 6s linear infinite;
        }

        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

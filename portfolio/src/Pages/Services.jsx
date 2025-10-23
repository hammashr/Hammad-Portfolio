import React from "react";

const services = [
  {
    title: "WordPress Development",
    intro:
      "Custom WordPress websites with modern design, optimal performance, and user-friendly content management.",
    points: [
      "Custom Theme Development",
      "Plugin Integration & Customization",
      "E-Commerce with WooCommerce",
      "SEO Optimization & Speed Enhancement",
    ],
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
        <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.105l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-.961 0-1.649.825-1.649 1.714 0 .795.465 1.469.945 2.149.371.615.795 1.407.795 2.554 0 .795-.313 1.714-.781 2.997L17.654 18.1 14.986 6.93M12 22.784c-1.059 0-2.081-.153-3.048-.437L12.52 10.02l3.715 10.19c.018.04.038.078.056.120-.952.23-1.942.454-3.291.454M2.696 12c0-1.784.516-3.45 1.392-4.846L8.4 21.188C5.006 19.396 2.696 15.984 2.696 12" />
      </svg>
    ),
  },
  {
    title: "Frontend Development",
    intro:
      "Modern, responsive web applications using React, JavaScript, and cutting-edge frontend technologies.",
    points: [
      "React.js Applications",
      "Responsive Design Implementation",
      "API Integration & State Management",
      "Performance Optimization",
    ],
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
        <path d="M14.23 12.004c2.235 0 4.044-1.81 4.044-4.044s-1.809-4.044-4.044-4.044-4.044 1.81-4.044 4.044 1.809 4.044 4.044 4.044zm2.235-4.044c0 1.236-1.004 2.235-2.235 2.235s-2.235-.999-2.235-2.235 1.004-2.235 2.235-2.235 2.235.999 2.235 2.235zm-6.283 2.235c-2.235 0-4.044 1.81-4.044 4.044s1.809 4.044 4.044 4.044 4.044-1.81 4.044-4.044-1.809-4.044-4.044-4.044zm0 6.283c-1.236 0-2.235-1.004-2.235-2.235s.999-2.235 2.235-2.235 2.235 1.004 2.235 2.235-.999 2.235-2.235 2.235zM4.283 10.239c-2.235 0-4.044 1.81-4.044 4.044s1.809 4.044 4.044 4.044 4.044-1.81 4.044-4.044-1.809-4.044-4.044-4.044zm0 6.283c-1.236 0-2.235-1.004-2.235-2.235s.999-2.235 2.235-2.235 2.235 1.004 2.235 2.235-.999 2.235-2.235 2.235z" />
        <path d="M12.004 7.96c.633 0 1.146-.513 1.146-1.146s-.513-1.146-1.146-1.146-1.146.513-1.146 1.146.513 1.146 1.146 1.146zm0-1.146c0 .316-.257.573-.573.573s-.573-.257-.573-.573.257-.573.573-.573.573.257.573.573z" />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    intro:
      "User-centered design solutions that combine aesthetics with functionality for exceptional user experiences.",
    points: [
      "Wireframing & Prototyping",
      "Modern Interface Design",
      "Mobile-First Responsive Layouts",
      "User Experience Optimization",
    ],
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: "Website Maintenance",
    intro:
      "Comprehensive website maintenance services to keep your site secure, updated, and performing optimally.",
    points: [
      "Regular Updates & Backups",
      "Security Monitoring",
      "Performance Optimization",
      "Content Management Support",
    ],
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </svg>
    ),
  },
];

function Check({ children }) {
  return (
    <li className="flex items-start gap-3 text-sm text-gray-300">
      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-purple-500/20">
        <svg
          viewBox="0 0 24 24"
          className="h-3 w-3 text-purple-400"
          fill="currentColor"
        >
          <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
      </span>
      <span>{children}</span>
    </li>
  );
}

function ServiceCard({ s }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-gray-700/50 bg-black/60 backdrop-blur-xl p-8 transition-all duration-300 hover:border-purple-500/30 hover:bg-black/70">
      {/* Glow effect on hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20"
        style={{
          background: `linear-gradient(135deg, rgba(168,85,247,0.3), rgba(236,72,153,0.2), rgba(249,115,22,0.1))`,
        }}
      />

      <div className="relative text-center">
        {/* Icon - No background, just the icon */}
        <div className="mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center text-purple-400">
          {s.icon}
        </div>

        {/* Title */}
        <h3 className="mb-4 text-xl font-bold text-white">{s.title}</h3>

        {/* Description */}
        <p className="mb-6 text-sm leading-relaxed text-gray-300">{s.intro}</p>

        {/* Points */}
        <ul className="space-y-3 text-left">
          {s.points.map((p) => (
            <Check key={p}>{p}</Check>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Services() {
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
        id="services"
        className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-white"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-white/60 mb-4">
            Services
          </p>
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              What I Offer
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-white/80">
            I help brands and teams ship fast, beautiful, and user-centered
            products—from WordPress sites to custom web apps and thoughtful
            UI/UX.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {services.map((s) => (
            <ServiceCard key={s.title} s={s} />
          ))}
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

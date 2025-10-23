import React from "react";

const contacts = [
  {
    label: "Email",
    value: "hammad2291@gmail.com",
    href: "mailto:hammad2291@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
      </svg>
    ),
    sub: "I usually reply within 4 hours",
    glow: "rgba(168,85,247,0.55)", // purple
  },
  {
    label: "WhatsApp",
    value: "+92 312 2497505",
    href: "https://wa.me/923122497505",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.02 0C5.39 0 .06 5.33.06 11.96c0 2.11.55 4.17 1.6 6.01L0 24l6.2-1.63a12.07 12.07 0 0 0 5.82 1.49h.01c6.63 0 12-5.33 12-11.96 0-3.2-1.25-6.2-3.51-8.42ZM12.03 21.3h-.01a10.2 10.2 0 0 1-5.2-1.43l-.37-.22-3.69.97.99-3.6-.24-.37a9.97 9.97 0 0 1-1.57-5.4c0-5.6 4.57-10.16 10.19-10.16 2.72 0 5.28 1.05 7.21 2.96a10.06 10.06 0 0 1 3 7.19c0 5.6-4.57 10.16-10.31 10.16Zm5.81-7.58c-.32-.16-1.9-.93-2.19-1.03-.29-.1-.5-.16-.72.16-.21.32-.83 1.02-1.02 1.23-.19.21-.38.24-.7.08-.32-.16-1.33-.49-2.54-1.56-.94-.8-1.57-1.79-1.75-2.1-.18-.32-.02-.49.14-.65.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.11-.22.06-.41-.03-.57-.08-.16-.72-1.72-.98-2.36-.26-.63-.52-.55-.72-.56h-.62c-.19 0-.5.07-.76.35-.26.28-1 1-1 2.43s1.02 2.82 1.16 3.02c.14.19 2.02 3.1 4.88 4.35 1.82.78 2.53.85 3.44.72.55-.09 1.9-.78 2.17-1.54.26-.76.26-1.41.18-1.54-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    ),
    sub: "Mon–Sat · 9:00–18:00 PKT",
    glow: "rgba(34,197,94,0.55)", // green-ish
  },
  {
    label: "LinkedIn",
    value: "hammad-ashraf-",
    href: "https://www.linkedin.com/in/hammad-ashraf-",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M6.94 7.5A1.94 1.94 0 1 1 6.94 3.62 1.94 1.94 0 0 1 6.94 7.5zM4.98 8.98H8.9V20H4.98V8.98zM13.16 8.98h3.77v1.5h.05c.52-.98 1.8-2.02 3.7-2.02 3.95 0 4.68 2.6 4.68 5.97V20h-3.92v-5.4c0-1.29-.03-2.94-1.79-2.94-1.8 0-2.07 1.4-2.07 2.85V20h-3.92V8.98z" />
      </svg>
    ),
    sub: "Let’s connect professionally",
    glow: "rgba(59,130,246,0.55)", // blue-ish
  },
];

function Card({ item }) {
  return (
    <a
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-orange-400/40 hover:bg-white/10"
    >
      {/* bottom-focused glow */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-[-45%] h-[160%] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25"
        style={{
          background: `radial-gradient(70% 60% at 50% 100%, ${item.glow} 0%, rgba(168,85,247,0.35) 40%, transparent 70%)`,
        }}
      />
      <div className="relative flex items-start gap-4">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white">
          {item.icon}
        </div>
        <div>
          <h3 className="text-base font-semibold">{item.label}</h3>
          <p className="text-sm text-white/80">{item.value}</p>
          {item.sub && <p className="mt-1 text-xs text-white/60">{item.sub}</p>}
        </div>
      </div>
    </a>
  );
}

export default function Contact() {
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
        id="contact"
        className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-white"
      >
        {/* header */}
        <p className="text-xs uppercase tracking-[0.25em] text-white/60">
          Contact
        </p>
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            Let’s work together
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-white/80">
          Reach out via email or message me on WhatsApp/LinkedIn. I’m quick to
          respond and happy to discuss your project.
        </p>

        {/* cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((c) => (
            <Card key={c.label} item={c} />
          ))}
        </div>

        {/* small note */}
        <p className="mt-10 text-xs text-white/60">
          *For fastest response, use Email or WhatsApp. No contact form
          submissions on this site.
        </p>
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

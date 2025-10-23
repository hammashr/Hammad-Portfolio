/* src/Pages/Home.jsx */
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import profile from "../assets/hmddp.jpg";
import CV from "../assets/Hammad Ashraf Updated_CV.pdf";

export default function Home() {
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--x", `${x}%`);
    el.style.setProperty("--y", `${y}%`);
  };

  const skills = [
    {
      name: "WordPress",
      level: 85,
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.105l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-.961 0-1.649.825-1.649 1.714 0 .795.465 1.469.945 2.149.371.615.795 1.407.795 2.554 0 .795-.313 1.714-.781 2.997L17.654 18.1 14.986 6.93M12 22.784c-1.059 0-2.081-.153-3.048-.437L12.52 10.02l3.715 10.19c.018.04.038.078.056.120-.952.23-1.942.454-3.291.454M2.696 12c0-1.784.516-3.45 1.392-4.846L8.4 21.188C5.006 19.396 2.696 15.984 2.696 12"></path>
        </svg>
      ),
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "React",
      level: 85,
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.402 5.584.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.402-5.583-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.01-1.36.034.44-.572.895-1.096 1.36-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.296-.69-.8-.706-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.01 1.36-.034-.44.572-.895 1.095-1.36 1.565-.455-.47-.91-.993-1.36-1.565z" />
        </svg>
      ),
      color: "from-cyan-400 to-cyan-500",
    },
    {
      name: "Tailwind CSS",
      level: 85,
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
        </svg>
      ),
      color: "from-cyan-500 to-teal-500",
    },
    {
      name: "Node.js",
      level: 80,
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L2.46,6.68C2.376,6.729,2.324,6.823,2.324,6.921v10.15c0,0.097,0.053,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
        </svg>
      ),
      color: "from-green-500 to-green-600",
    },
    {
      name: "MongoDB",
      level: 75,
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
        </svg>
      ),
      color: "from-green-600 to-green-700",
    },
    {
      name: "Express.js",
      level: 75,
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957c-2.864 1.607-6.509.018-8.2-2.779a5.601 5.601 0 01-.885-3.84zm8.814-5.701c-2.08.967-3.56 3.43-2.948 5.643H10.76c.036-2.167-1.352-4.771-3.945-5.643z" />
        </svg>
      ),
      color: "from-gray-600 to-gray-700",
    },
  ];

  return (
    <div
      onMouseMove={handleMouseMove}
      ref={glowRef}
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

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Welcome Badge */}
        <div className="text-center mb-16">
          <div
            className="inline-block px-8 py-3 border-2 rounded-full text-purple-200 text-sm backdrop-blur-md shadow-lg"
            style={{
              borderColor: "rgba(63, 23, 50, 0.8)",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            }}
          >
            Welcome to my Portfolio
          </div>
        </div>
        {/* Main Hero Card */}
        <div
          className="max-w-5xl mx-auto backdrop-blur-xl rounded-3xl border p-12 mb-20 shadow-2xl"
          style={{
            background: `linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(63, 23, 50, 0.3), rgba(0, 0, 0, 0.7))`,
            borderColor: "rgba(255, 255, 255, 0.1)",
          }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Image - Left Side */}
            <div className="flex-shrink-0">
              <div className="relative">
                <img
                  src={profile}
                  alt="Hammad Ashraf"
                  className="w-64 h-64 rounded-full object-cover border-4 grayscale hover:grayscale-0 transition-all duration-500"
                  style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
                />
                <div
                  className="absolute inset-0 rounded-full animate-pulse"
                  style={{
                    background: `linear-gradient(45deg, rgba(63, 23, 50, 0.3), transparent, rgba(90, 30, 59, 0.3))`,
                  }}
                ></div>
              </div>
            </div>

            {/* Content - Right Side */}
            <div className="flex-1 text-left">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Hi, I'm <span className="text-gray-300">Hammad Ashraf</span>
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
                A skilled{" "}
                <span className="text-purple-300 font-semibold">
                  WordPress and Frontend Developer
                </span>{" "}
                passionate about building fast, responsive, and visually
                appealing web experiences. I craft custom{" "}
                <span className="text-purple-300 font-semibold">
                  WordPress solutions
                </span>{" "}
                and also work with{" "}
                <span className="text-purple-300 font-semibold">React.js</span>{" "}
                and{" "}
                <span className="text-purple-300 font-semibold">
                  Tailwind CSS
                </span>{" "}
                to develop modern, high-performance interfaces. My focus is on{" "}
                <span className="text-purple-300 font-semibold">
                  clean code
                </span>
                , usability, and creating websites that look great and perform
                flawlessly across all devices.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="px-6 py-3 border-2 border-purple-500/70 text-purple-300 rounded-lg hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 backdrop-blur-sm font-medium"
                >
                  View My Work
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 border-2 border-pink-500/70 text-pink-300 rounded-lg hover:bg-pink-500/10 hover:border-pink-400 transition-all duration-300 backdrop-blur-sm flex items-center gap-2 font-medium"
                >
                  📧 Contact Me
                </Link>
                <a
                  href={CV}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-orange-500/70 text-orange-300 rounded-lg hover:bg-orange-500/10 hover:border-orange-400 transition-all duration-300 backdrop-blur-sm flex items-center gap-2 font-medium"
                >
                  📄 View CV
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              My Skills
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-black/40 backdrop-blur-lg rounded-2xl border border-white/10 p-8 hover:border-purple-400/30 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  {/* Remove background from icon container */}
                  <div className="w-10 h-10 flex items-center justify-center text-white">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {skill.name}
                  </h3>
                </div>

                <div className="mb-2">
                  <div className="flex justify-end items-center mb-3">
                    <span className="text-sm text-gray-400 font-medium">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
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

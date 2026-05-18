import parkingImg from "./assets/parking.png";
import hospitalImg from "./assets/hospital.png";

export default function Portfolio() {

  const projects = [
    {
      title: 'Smart Car Parking System',
      desc: 'A responsive parking management system with slot tracking and clean dashboard UI.',
      tech: ['Python', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/zairaizha10/Car-Parking-System.git',
      image: parkingImg
    },

    {
      title: 'Hospital Management System',
      desc: 'A management platform for handling patient records and hospital operations.',
      tech: ['Python', 'SQL', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/23f3001132/hospital-management-system',
      image: hospitalImg
    }
  ];

  const skills = [
    'Python',
    'Java',
    'SQL',
    'HTML',
    'CSS',
    'JavaScript',
    'Linux',
    'GitHub',
    'Data Science'
  ];

  return (

    <div className="bg-gradient-to-b from-black via-gray-950 to-black text-white min-h-screen font-sans">

      {/* Navbar */}
      <nav className="fixed top-0 w-full backdrop-blur-xl bg-black/40 border-b border-white/10 z-50">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

          <h1 className="text-3xl font-extrabold tracking-wider text-cyan-400">
            ZAIRA
          </h1>

          <div className="hidden md:flex gap-8 text-sm font-medium">

            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>

            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>

          </div>

        </div>

      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

        <div className="w-36 h-36 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center justify-center text-6xl font-extrabold shadow-[0_0_60px_rgba(34,211,238,0.5)] mb-10">

          Z

        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold leading-tight max-w-5xl">

          Hi, I'm <br />
          <span className="text-cyan-400"> Zaira Izhar</span>

        </h1>

        <p className="mt-8 text-gray-400 text-lg md:text-2xl max-w-3xl leading-9">

          IIT Madras BS Data Science Student passionate about
          Web development, Machine learning, Data Science, and building
          impactful digital experiences.

        </p>

        <div className="flex gap-6 mt-12 flex-wrap justify-center">

          <a
            href="https://github.com/zairaizha10"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-2xl font-semibold transition duration-300 shadow-[0_0_30px_rgba(34,211,238,0.4)]"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/zaira-izhar-a57198347"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-2xl font-semibold transition duration-300"
          >
            LinkedIn
          </a>

        </div>

      </section>

      {/* About */}
      <section id="about" className="px-8 md:px-20 py-32">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold mb-12 text-cyan-400">

            About Me

          </h2>

          <div className="bg-gray-900/60 backdrop-blur-lg border border-gray-800 rounded-[40px] p-10 shadow-[0_0_40px_rgba(34,211,238,0.1)]">

            <p className="text-gray-300 leading-10 text-lg">

              I am currently pursuing the BS Degree in Data Science from IIT Madras.
              I enjoy solving real-world problems using programming and exploring
              Web development, Machine Learning, Data Science, and building
              impactful digital experiences.

            </p>

          </div>

        </div>

      </section>

      {/* Skills */}
      <section id="skills" className="px-8 md:px-20 py-32 bg-black/30">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold mb-14 text-cyan-400">

            Skills

          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

            {skills.map((skill, index) => (

              <div
                key={index}
                className="bg-gray-900/70 border border-gray-800 hover:border-cyan-400 rounded-2xl p-6 text-center transition duration-300 hover:-translate-y-2 shadow-lg"
              >

                <h3 className="font-semibold text-lg">
                  {skill}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Projects */}
      <section id="projects" className="px-8 md:px-20 py-32">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold mb-14 text-cyan-400">

            Projects

          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {projects.map((project, index) => (

              <div
                key={index}
                className="bg-gray-900/60 border border-gray-800 hover:border-cyan-400 rounded-[35px] overflow-hidden transition duration-500 hover:-translate-y-3 shadow-[0_0_40px_rgba(34,211,238,0.1)]"
              >

                <div className="overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover hover:scale-110 transition duration-700"
                  />

                </div>

                <div className="p-8">

                  <h3 className="text-3xl font-bold mb-4">

                    {project.title}

                  </h3>

                  <p className="text-gray-400 leading-8 mb-6">

                    {project.desc}

                  </p>

                  <div className="flex gap-3 flex-wrap mb-8">

                    {project.tech.map((item, i) => (

                      <span
                        key={i}
                        className="bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm"
                      >

                        {item}

                      </span>

                    ))}

                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-cyan-400 hover:bg-cyan-400 hover:text-black px-6 py-3 rounded-2xl font-semibold transition duration-300"
                  >

                    View Project

                  </a>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Contact */}
      <section id="contact" className="px-8 md:px-20 py-32 text-center bg-black/40">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-5xl font-bold text-cyan-400 mb-8">

            Contact Me

          </h2>

          <p className="text-gray-400 text-lg leading-9 mb-12">

            Interested in collaborating, internships, AI projects,
            or development opportunities? Let's connect and build something amazing.

          </p>

          <div className="flex justify-center gap-6 flex-wrap">

            <a
              href="mailto:zaira.izhar.1@gmail.com"
              className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-2xl font-semibold transition duration-300 shadow-[0_0_30px_rgba(34,211,238,0.3)]"
            >

              Email Me

            </a>

            <a
              href="https://www.linkedin.com/in/zaira-izhar-a57198347"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-2xl font-semibold transition duration-300"
            >

              LinkedIn

            </a>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">

        © 2026 ZAIRA • Built with React & Tailwind CSS

      </footer>

    </div>

  );
}
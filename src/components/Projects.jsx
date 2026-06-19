import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";

// Import project mockup images
import prepedgeImg from "../assets/prepedge.png";
import smartcycleImg from "../assets/smartcycle.png";
import divineDriftImg from "../assets/divine-drift.png";
import eventManagementImg from "../assets/event-management.png";

function Projects() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  const projectsData = [
    {
      title: "PrepEdge",
      badge: "Web App",
      image: prepedgeImg,
      summary: "Developed a Flask-based interview preparation platform to help students practice technical concepts and interview questions. Implemented structured learning modules and user-friendly navigation.",
      tech: ["Python", "Flask", "Jinja2"],
      links: [
        { text: "Live Demo", url: "https://prepedge-ivev.onrender.com", primary: true }
      ],
      details: {
        problem: "University students lack a unified, structured platform to practice core computer science topics (like OOP, DBMS, and DSA) alongside practical web concepts in a consolidated prep guide.",
        role: "Full-Stack Developer. Set up the Python Flask routing, designed HTML/Jinja2 responsive layouts, and integrated practice roadmaps.",
        challenges: "Structuring learning hierarchies to offer incremental difficulty, and deploying the platform to Render with optimal cold-start loading times.",
        metrics: [
          "Successfully launched with 50+ hand-picked interview preparation questions.",
          "Reduced navigation onboarding friction for student preparation.",
          "Highly responsive templates rendering correctly on all device widths."
        ]
      }
    },
    {
      title: "SmartCycle",
      badge: "ML & Web",
      image: smartcycleImg,
      summary: "A web application designed to promote sustainable waste management and recycling awareness. Features user authentication, responsive design, and Firebase integration for data storage.",
      tech: ["HTML", "CSS", "JavaScript", "Firebase"],
      links: [
        { text: "Live Demo", url: "https://smartcyclee.netlify.app/", primary: true }
      ],
      details: {
        problem: "A lack of local recycling center visibility and user rewards programs prevents communities from engaging in consistent, proper waste sorting and green habits.",
        role: "Frontend Developer & Firebase Integrator. Designed user profile dashboards, integrated real-time location database fetch, and implemented user authentication.",
        challenges: "Handling asynchronous read/write states for dynamic crowd-sourced locations while keeping the page layout responsive and lag-free.",
        metrics: [
          "Successfully indexed and visualized 20+ verified local recycling centers.",
          "Integrated secure email/password user authentication using Firebase.",
          "Page load speed under 1.2s via optimized static asset loading."
        ]
      }
    },
    {
      title: "The Divine Drift",
      badge: "Graphics & Gaming",
      image: divineDriftImg,
      summary: "An immersive 2D browser game utilizing HTML5 Canvas API. Features complex collision detection, particle systems, and dynamic audio-visual feedback loops.",
      tech: ["JavaScript", "Canvas", "AudioAPI"],
      links: [
        { text: "Play Game", url: "https://divine-drift.vercel.app/", primary: true },
        { text: "GitHub", url: "https://github.com/KhushiWalia09/Divine-Drift.git" }
      ],
      details: {
        problem: "Many browser-based games are heavy to download, lag on mobile screens, and suffer from imprecise collision detectors that ruin high-speed gameplay.",
        role: "Creator & Physics Programmer. Developed the custom rigid-body collision algorithm, canvas render pipeline, and particle generator without external physics engines.",
        challenges: "Maintaining frame-rate independent physics loops at 60 FPS while rendering hundreds of active particles during explosions.",
        metrics: [
          "Maintained a stable 60 FPS across desktop and high-end mobile screens.",
          "Zero dependencies: built purely on vanilla JavaScript and Canvas API.",
          "Extremely light payload: entire game bundle loads in less than 2MB."
        ]
      }
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="projects" id="projects">
      <motion.h2 
        className="section-title"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="text-gradient">Projects</span>
      </motion.h2>

      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projectsData.map((project, index) => (
          <motion.div 
            key={index}
            className="project-card glass-card"
            variants={cardVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-badge">{project.badge}</div>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <div className="project-tech">
              {project.tech.map((t, idx) => (
                <span key={idx}>{t}</span>
              ))}
            </div>
            <div className="project-links">
              <button
                className="project-btn primary"
                onClick={() => setActiveCaseStudy(project)}
              >
                View Case Study
              </button>
              {project.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn secondary"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Case Study Modal Popup */}
      <AnimatePresence>
        {activeCaseStudy && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCaseStudy(null)}
          >
            <motion.div 
              className="modal-card glass-card"
              initial={{ y: 50, scale: 0.9, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 50, scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close" 
                onClick={() => setActiveCaseStudy(null)} 
                aria-label="Close case study modal"
              >
                &times;
              </button>

              <div className="modal-header">
                <div className="modal-image-container">
                  <img src={activeCaseStudy.image} alt={activeCaseStudy.title} className="modal-image" />
                </div>
                <span className="project-badge">{activeCaseStudy.badge}</span>
                <h3>{activeCaseStudy.title}</h3>
                <div className="project-tech">
                  {activeCaseStudy.tech.map((t, idx) => (
                    <span key={idx}>{t}</span>
                  ))}
                </div>
              </div>

              <div className="modal-body">
                <div className="modal-section">
                  <h4>The Problem</h4>
                  <p>{activeCaseStudy.details.problem}</p>
                </div>

                <div className="modal-section">
                  <h4>My Role & Tech Stack</h4>
                  <p>{activeCaseStudy.details.role}</p>
                </div>

                <div className="modal-section">
                  <h4>Key Challenges & Solutions</h4>
                  <p>{activeCaseStudy.details.challenges}</p>
                </div>

                <div className="modal-section">
                  <h4>Results & Metrics</h4>
                  <ul>
                    {activeCaseStudy.details.metrics.map((metric, idx) => (
                      <li key={idx}>{metric}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="modal-footer">
                <div className="project-links">
                  {activeCaseStudy.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`project-btn ${link.primary ? "primary" : "secondary"}`}
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;

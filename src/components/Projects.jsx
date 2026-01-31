import { motion } from "framer-motion";
import "./Projects.css";

function Projects() {
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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true, amount: 0.1 }}
      >

        <motion.div 
          className="project-card glass-card"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <div className="project-badge">Software</div>
          <h3>Event Management System</h3>
          <p>A comprehensive Java-based application for managing corporate and social events. Features a custom Swing-based dashboard with robust scheduling and attendee tracking logic.</p>
          <div className="project-tech">
            <span>Java</span>
            <span>Swing</span>
            <span>OOP</span>
          </div>
          <div className="project-links">
            <a
              href="https://github.com/KhushiWalia09/Event-Management-System.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              GitHub Source
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="project-card glass-card"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <div className="project-badge">Web App</div>
          <h3>PrepEdge</h3>
          <p>A high-performance interview preparation platform built with Python and Flask. Optimized for fast rendering and intuitive UX, helping students master technical concepts.</p>
          <div className="project-tech">
            <span>Python</span>
            <span>Flask</span>
            <span>Jinja2</span>
          </div>
          <div className="project-links">
            <a
              href="https://prepedge-ivev.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn primary"
            >
              Live Demo
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="project-card glass-card"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <div className="project-badge">ML & Web</div>
          <h3>SmartCycle</h3>
          <p>Predictive health analytics platform. Uses Machine Learning to forecast cycles with high accuracy. Integrated with Firebase for secure, real-time data persistence.</p>
          <div className="project-tech">
            <span>React</span>
            <span>Firebase</span>
            <span>Python</span>
            <span>ML</span>
          </div>
          <div className="project-links">
            <a
              href="https://smartcyclee.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn primary"
            >
              Live Demo
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="project-card glass-card"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <div className="project-badge">Graphics</div>
          <h3>The Divine Drift</h3>
          <p>An immersive 2D browser game utilizing HTML5 Canvas API. Features complex collision detection, particle systems, and dynamic audio-visual feedback loops.</p>
          <div className="project-tech">
            <span>JavaScript</span>
            <span>Canvas</span>
            <span>AudioAPI</span>
          </div>
          <div className="project-links">
            <a
              href="https://divine-drift.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn primary"
            >
              Play Game
            </a>
            <a
              href="https://github.com/KhushiWalia09/Divine-Drift.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projects;

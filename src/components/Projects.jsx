import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid reveal">
        <div className="project-card">
          <h3>Stop-Motion Animation Videos</h3>
          <div className="project-links">
            <a
              href="/tree.mp4"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn primary"
            >
              🎬 Tree
            </a>
            <a
              href="/play-with-scissors.mp4"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn secondary"
            >
              🎬 Play With Scissors
            </a>
          </div>
          <p>Animations made using stop-motion techniques.</p>
          <span>Stop Motion Studio • Capcut</span>
        </div>

        <div className="project-card">
          <h3>Event Management System</h3>
          <a
            href="https://github.com/KhushiWalia09/Event-Management-System.git"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            📄 View Project
          </a>

          <p>Java-based system with structured UI.</p>

          <span>Java • Swing</span>
        </div>
        <div className="project-card">
          <h3>Connectly</h3>
          <a
            href="https://github.com/KhushiWalia09/Connectly.git"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            📄 View Project
          </a>

          <p>React-based social connection app with a clean and responsive user interface.</p>

          <span>React • CSS • JavaScript</span>
        </div>
      </div>
    </section>
  );
}

export default Projects;

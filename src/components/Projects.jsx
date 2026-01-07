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
          <h3>The Divine Drift</h3>
          <div className="project-links">
            <a
              href="https://github.com/KhushiWalia09/Divine-Drift.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn primary"
            >
              📄 View Project
            </a>
            <a
              href="https://divine-drift.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn secondary"
            >
              🎮 Play
            </a>
          </div>
          <p>
            A 2D browser game built with HTML5 Canvas featuring smooth
            animations, sound effects, power-ups, and responsive controls across
            devices.
          </p>

          <span>HTML Canvas • CSS • JavaScript • Audio API</span>
        </div>
      </div>
    </section>
  );
}

export default Projects;

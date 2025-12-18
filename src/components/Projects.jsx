import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid reveal">
        <div className="project-card">
          <h3>Stop-Motion Animation Videos</h3>
          <p>Animations made using stop-motion techniques.</p>
          <span>Stop Motion Studio • Capcut</span>
        </div>

        <div className="project-card">
          <h3>Event Management System</h3>
          <p>Java-based system with structured UI.</p>
          <span>Java • Swing</span>
        </div>
      </div>
    </section>
  );
}

export default Projects;

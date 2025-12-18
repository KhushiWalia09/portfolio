import "./Achievements.css";

function Achievements() {
  return (
    <section className="achievements" id="achievements">
      <h2>Achievements</h2>

      <div className="achievement-list">
        <div className="achievement-card">
          <h3>Internship Completion</h3>
          <p>
            Successfully completed internship at{" "}
            <strong>Sanshil Foundation</strong>, contributing to community
            initiatives and digital awareness.
          </p>
        </div>

        <div className="achievement-card">
          <h3>Advanced Java Project</h3>
          <p>
            Designed and developed an <strong>Event Management System</strong>
            using Java Swing and OOP concepts.
          </p>
        </div>

        <div className="achievement-card">
          <h3>Poster-making Competition</h3>
          <p>
            Actively participated in various poster-making competitions,
            demonstrating creativity and design skills.          </p>
        </div>

        <div className="achievement-card">
          <h3>Continuous Learning</h3>
          <p>
            Actively improving skills in React, JavaScript, and modern web
            development through hands-on projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Achievements;

import "./Achievements.css";

function Achievements() {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 18;
    const rotateY = (x - centerX) / 18;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-6px)
    `;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
  };

  return (
    <section className="achievements" id="achievements">
      <h2>Achievements</h2>

      <div className="achievement-list reveal">
        <div
          className="achievement-card"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <h3>Internship Completion</h3>
          <p>
            Successfully completed internship at{" "}
            <strong>Sanshil Foundation</strong>, contributing to community
            initiatives and digital awareness.
          </p>
        </div>

        <div
          className="achievement-card"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <h3>Advanced Java Project</h3>
          <p>
            Designed and developed an{" "}
            <strong>Event Management System</strong> using Java Swing and OOP
            concepts.
          </p>
        </div>

        <div
          className="achievement-card"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <h3>Poster-making Competition</h3>
          <p>
            Actively participated in various poster-making competitions,
            demonstrating creativity and design skills.
          </p>
        </div>

        <div
          className="achievement-card"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
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

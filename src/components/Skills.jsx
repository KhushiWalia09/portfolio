import "./Skills.css";

function Skills() {
  const primarySkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Excel",
  ];
  const SecondarySkills = [
    "Git", 
    "GitHub",
    "Stop-Motion Animation",
    "Python",
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title reveal"><span className="text-gradient">My Skills</span></h2>


        <div className="skills-columns">
          {/* Primary Skills */}
          <div className="skills-column reveal-left">
            <h3 className="skills-subtitle">Primary Skills</h3>
            <div className="skills-grid">
              {primarySkills.map((skill, index) => (
                <div className="skill-card" key={index}>
                  <div className="skill-icon-placeholder"></div>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Skills */}
          <div className="skills-column reveal-right">
            <h3 className="skills-subtitle">Secondary Skills</h3>
            <div className="skills-grid">
              {SecondarySkills.map((skill, index) => (
                <div className="skill-card" key={index}>
                  <div className="skill-icon-placeholder"></div>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

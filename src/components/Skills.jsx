import { motion } from "framer-motion";
import "./Skills.css";

function Skills() {
  const skillsData = [
    {
      name: "React.js",
      category: "Frontend",
      level: "Advanced",
      percentage: 90,
      color: "rgba(97, 218, 251, 0.3)",
      glowColor: "0, 216, 255",
      projects: [{ name: "Portfolio", id: "hero" }],
      icon: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="skill-svg">
          <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
          <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
    },
    {
      name: "JavaScript",
      category: "Frontend",
      level: "Advanced",
      percentage: 88,
      color: "rgba(247, 223, 30, 0.2)",
      glowColor: "247, 223, 30",
      projects: [
        { name: "SmartCycle", id: "project-smartcycle" },
        { name: "The Divine Drift", id: "project-the-divine-drift" },
        { name: "Portfolio", id: "hero" },
      ],
      icon: (
        <svg viewBox="0 0 24 24" className="skill-svg" fill="#f7df1e">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M24 0H0v24h24V0zM8.37 18.26c-.34-.68-.8-1.12-1.42-1.12-.55 0-.84.28-.84.85 0 .86.8 1.15 1.72 1.55.93.38 1.83.84 1.83 1.95 0 1.22-1 2-2.33 2-1.32 0-2.12-.66-2.58-1.57l1-.62c.28.52.65.85 1.5.85.66 0 .93-.34.93-.83 0-1-.87-1.25-1.74-1.63-1.07-.46-1.8-.93-1.8-2 0-1.1 1-1.85 2.13-1.85 1.12 0 1.87.53 2.22 1.26l-.42.66zm10 .55c0 1.1-.9 2-2.1 2-1.26 0-2.07-.63-2.5-1.52l1-.63c.27.5.6.83 1.4.83.6 0 .87-.3.87-.8 0-1.2-2.3-1.3-2.3-3.2 0-1.1.9-2 2-2 1.1 0 1.83.5 2.16 1.13l-1 .6c-.22-.38-.55-.63-1.16-.63-.55 0-.8.27-.8.74 0 1 2.3 1.1 2.3 3.12v.37z" />
        </svg>
      ),
    },
    {
      name: "Python",
      category: "Programming",
      level: "Intermediate",
      percentage: 78,
      color: "rgba(55, 118, 171, 0.2)",
      glowColor: "55, 118, 171",
      projects: [{ name: "PrepEdge", id: "project-prepedge" }],
      icon: (
        <svg viewBox="0 0 24 24" className="skill-svg">
          <path d="M11.9 0C5.3 0 5.5 5.2 5.5 5.2h2.2c0 0-.2-3.1 4.2-3.1 4.4 0 4.2 2.7 4.2 2.7v2H9.2s-3.7-.1-3.7 3.7v3.2h2.2v-2.7c0-2.4 2.1-2.4 2.1-2.4h6.7s3.5-.1 3.5-3.7V5.2S20 0 11.9 0z" fill="#3776ab" />
          <path d="M12.1 24c6.6 0 6.4-5.2 6.4-5.2h-2.2c0 0 .2 3.1-4.2 3.1-4.4 0-4.2-2.7-4.2-2.7v-2H15s3.7.1 3.7-3.7v-3.2h-2.2v2.7c0 2.4-2.1 2.4-2.1 2.4H7.7s-3.5.1-3.5 3.7v3.5S4 24 12.1 24z" fill="#ffd343" />
        </svg>
      ),
    },
    {
      name: "Flask",
      category: "Backend",
      level: "Intermediate",
      percentage: 60,
      color: "rgba(79, 70, 229, 0.2)",
      glowColor: "79, 70, 229",
      projects: [{ name: "PrepEdge", id: "project-prepedge" }],
      icon: (
        <svg viewBox="0 0 24 24" className="skill-svg" fill="none" stroke="#fff" strokeWidth="1.5">
          <path d="M19 20L14 9V4h1a1 1 0 000-2H9a1 1 0 000 2h1v5L5 20a2 2 0 002 3h10a2 2 0 002-3zm-7-9.5l3.8 8.5H8.2L12 10.5z" />
          <path d="M12 4v3" />
        </svg>
      ),
    },
    {
      name: "Firebase",
      category: "Backend",
      level: "Intermediate",
      percentage: 50,
      color: "rgba(255, 160, 0, 0.2)",
      glowColor: "255, 160, 0",
      projects: [{ name: "SmartCycle", id: "project-smartcycle" }],
      icon: (
        <svg viewBox="0 0 24 24" className="skill-svg" fill="#ffca28">
          <path d="M3.89 15.75L1.13 8.35a.55.55 0 01.91-.56L12 19.5z" />
          <path d="M12.11 3.65a.55.55 0 00-.91 0L8.27 8.32 12 12z" fill="#ffa000" />
          <path d="M20.11 15.75l-2.76-7.4a.55.55 0 00-.91-.56L12 19.5z" fill="#f57c00" />
        </svg>
      ),
    },
    {
      name: "MySQL",
      category: "Backend",
      level: "Advanced",
      percentage: 80,
      color: "rgba(0, 117, 143, 0.2)",
      glowColor: "0, 117, 143",
      projects: [],
      icon: (
        <svg viewBox="0 0 24 24" className="skill-svg" fill="#00758f">
          <path d="M12 2C6.48 2 2 4.02 2 6.5v11c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5v-11C22 4.02 17.52 2 12 2zm0 2c4.48 0 8 1.41 8 2.5s-3.52 2.5-8 2.5-8-1.41-8-2.5 3.52-2.5 8-2.5zm0 14.5c-4.48 0-8-1.41-8-2.5v-2.17c1.95 1.2 5.05 1.67 8 1.67s6.05-.47 8-1.67V14c0 1.09-3.52 2.5-8 2.5zm0-4.5c-4.48 0-8-1.41-8-2.5v-2.17c1.95 1.2 5.05 1.67 8 1.67s6.05-.47 8-1.67V9.5c0 1.09-3.52 2.5-8 2.5z" />
        </svg>
      ),
    },
    {
      name: "HTML5 & CSS3",
      category: "Frontend",
      level: "Advanced",
      percentage: 85,
      color: "rgba(227, 79, 38, 0.2)",
      glowColor: "227, 79, 38",
      projects: [
        { name: "SmartCycle", id: "project-smartcycle" },
        { name: "PrepEdge", id: "project-prepedge" },
        { name: "Portfolio", id: "hero" },
      ],
      icon: (
        <svg viewBox="0 0 24 24" className="skill-svg" fill="#e34f26">
          <path d="M1.5 22L0 0h24l-1.5 22L12 24z" />
          <path d="M12 21.8l7.8-2.2L21 2h-9z" fill="#f06529" />
          <path d="M12 11h4.2l-.4 4.5-3.8 1-3.8-1-.2-2.5H6l.4 4.5 5.6 1.5 5.6-1.5.7-8H12z" fill="#eaeaea" />
          <path d="M12 5H6.2l.4 4.5H12v-4.5z" fill="#fff" />
        </svg>
      ),
    },
    {
      name: "Java",
      category: "Programming",
      level: "Intermediate",
      percentage: 60,
      color: "rgba(0, 115, 150, 0.2)",
      glowColor: "0, 115, 150",
      projects: [],
      icon: (
        <svg viewBox="0 0 24 24" className="skill-svg" fill="#007396">
          <path d="M2.5 17s3.5 1.5 6 1.5c4.5 0 5.5-2.5 5.5-4 0-3-3-4-3-6 0-2.5 2-4.5 4-4.5s3.5 1 3.5 1S17 3 15 3c-4.5 0-6 2.5-6 4 0 3.5 3 4 3 6.5 0 2.5-2 3.5-4.5 3.5-2.5 0-5-1-5-1zm3 4s3.5 1.5 6.5 1.5 6.5-1.5 6.5-1.5-2 1-6.5 1-6.5-1-6.5-1z" />
        </svg>
      ),
    },
    {
      name: "Git & GitHub",
      category: "Tools & Methods",
      level: "Advanced",
      percentage: 80,
      color: "rgba(240, 80, 50, 0.2)",
      glowColor: "240, 80, 50",
      projects: [
        { name: "The Divine Drift", id: "project-the-divine-drift" },
        { name: "PrepEdge", id: "project-prepedge" },
        { name: "SmartCycle", id: "project-smartcycle" },
      ],
      icon: (
        <svg viewBox="0 0 24 24" className="skill-svg" fill="#f05032">
          <path d="M23.3 10.9L13.1.7c-.9-.9-2.4-.9-3.3 0L7.7 2.8l3.1 3.1c.8-.3 1.8-.1 2.5.6.7.7.9 1.7.6 2.5l3.1 3.1c.8-.3 1.8-.1 2.5.6.9.9.9 2.4 0 3.3-.9.9-2.4.9-3.3 0-.7-.7-.9-1.7-.6-2.5L12.5 10c-.3.3-.7.5-1.2.5-.5 0-1-.2-1.3-.6-.7-.7-.9-1.7-.6-2.5L6.3 4.3.7 9.9c-.9.9-.9 2.4 0 3.3L10.9 23.3c.9.9 2.4.9 3.3 0L23.3 14.2c.9-.9.9-2.4 0-3.3z" />
        </svg>
      ),
    },
  ];

  const handleProjectClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="skills" id="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-gradient">Core Tech Stack</span>
        </motion.h2>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              className="skill-card glass-card"
              key={index}
              variants={cardVariants}
              style={{ "--skill-glow": skill.glowColor }}
            >
              <div className="skill-card-inner">
                <div className="skill-card-header">
                  <div className="skill-icon-wrapper" style={{ background: skill.color }}>
                    {skill.icon}
                  </div>
                  <div className="skill-header-meta">
                    <h3>{skill.name}</h3>
                    <span className={`skill-level-badge ${skill.level.toLowerCase()}`}>
                      {skill.level}
                    </span>
                  </div>
                </div>

                {/* Visual Proficiency Bar */}
                <div className="skill-proficiency">
                  <div className="proficiency-header">
                    <span className="proficiency-label">Proficiency</span>
                    <span className="proficiency-value">{skill.percentage}%</span>
                  </div>
                  <div className="proficiency-bar-bg">
                    <motion.div
                      className="proficiency-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>

                {/* Backed By Projects */}
                <div className="skill-backed-projects">
                  <span className="projects-heading">Applied In:</span>
                  {skill.projects.length > 0 ? (
                    <div className="project-tags-list">
                      {skill.projects.map((proj, pIdx) => (
                        <button
                          key={pIdx}
                          onClick={() => handleProjectClick(proj.id)}
                          className="project-tag-btn glass-card"
                        >
                          {proj.name}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <span className="no-projects-tag">Academic Concepts / Lab work</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;

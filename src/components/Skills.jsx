import { motion } from "framer-motion";
import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "React.js", level: "Advanced" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "HTML5 & CSS3", level: "Advanced" },
        { name: "Responsive Design", level: "Advanced" }
      ]
    },
    {
      name: "Programming",
      skills: [
        { name: "Python", level: "Intermediate" },
        { name: "Java", level: "Intermediate" }
      ]
    },
    {
      name: "Backend & Databases",
      skills: [
        { name: "Flask", level: "Intermediate" },
        { name: "MySQL", level: "Advanced" },
        { name: "Firebase", level: "Intermediate" }
      ]
    },
    {
      name: "Tools & Methods",
      skills: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "VS Code", level: "Advanced" },
        { name: "Software Engineering", level: "Intermediate" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
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
          {skillCategories.map((category, index) => (
            <motion.div 
              className="skill-card glass-card" 
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                borderColor: "rgba(99, 102, 241, 0.3)",
                boxShadow: "0 15px 30px rgba(99, 102, 241, 0.1)"
              }}
            >
              <div className="skill-content">
                <div className="skill-card-header">
                  <div className="skill-dot"></div>
                  <h3>{category.name}</h3>
                </div>
                
                <div className="skills-badge-container">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-badge glass-card">
                      <span className="skill-name">{skill.name}</span>
                      <span className={`skill-level ${skill.level.toLowerCase()}`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
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

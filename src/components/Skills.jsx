import { motion } from "framer-motion";
import "./Skills.css";

function Skills() {
  const skillCategories = [
    { name: "Frontend", level: "Next.js, React, Tailwind, Framer Motion" },
    { name: "Backend", level: "Node.js, Flask, PostgreSQL, Firebase" },
    { name: "Dev Tools", level: "Git, Docker, AWS, Postman" },
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
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((skill, index) => (
            <motion.div 
              className="skill-card glass-card" 
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                translateY: -10,
                borderColor: "var(--primary)"
              }}
            >
              <div className="skill-content">
                <div className="skill-dot"></div>
                <h3>{skill.name}</h3>
                <p>{skill.level}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;

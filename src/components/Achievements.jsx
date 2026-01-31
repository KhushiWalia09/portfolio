import { motion } from "framer-motion";
import "./Achievements.css";

function Achievements() {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 20;
    const rotateY = (x - centerX) / 20;

    card.style.transform = `
      perspective(2000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-10px)
    `;


    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform =
      "perspective(2000px) rotateX(0deg) rotateY(0deg) translateY(0)";

  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="achievements" id="achievements">
      <motion.h2 
        className="section-title"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="text-gradient">Achievements</span>
      </motion.h2>

      <motion.div 
        className="achievement-list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div
          className="achievement-card glass-card"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          variants={cardVariants}
        >
          <h3>Internship Completion</h3>
          <p>
            Successfully completed internship at{" "}
            <strong>Sanshil Foundation</strong>, contributing to community
            initiatives and digital awareness.
          </p>
        </motion.div>

        <motion.div
          className="achievement-card glass-card"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          variants={cardVariants}
        >
          <h3>Advanced Java Project</h3>
          <p>
            Designed and developed an{" "}
            <strong>Event Management System</strong> using Java Swing and OOP
            concepts.
          </p>
        </motion.div>

        <motion.div
          className="achievement-card glass-card"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          variants={cardVariants}
        >
          <h3>Poster-making Competition</h3>
          <p>
            Actively participated in various poster-making competitions,
            demonstrating creativity and design skills.
          </p>
        </motion.div>

        <motion.div
          className="achievement-card glass-card"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          variants={cardVariants}
        >
          <h3>Continuous Learning</h3>
          <p>
            Actively improving skills in React, JavaScript, and modern web
            development through hands-on projects.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Achievements;

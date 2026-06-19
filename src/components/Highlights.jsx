import { motion } from "framer-motion";
import "./Highlights.css";

function Highlights() {
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
    <section className="highlights" id="highlights">
      <motion.h2
        className="section-title"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="text-gradient">Milestones & Competencies</span>
      </motion.h2>

      <motion.div
        className="highlights-list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div
          className="highlights-card glass-card"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          variants={cardVariants}
        >
          <div className="project-badge">Leadership</div>
          <h3>Digital Educator</h3>
          <p>
            Taught programming basics, MS Office, and digital literacy to 50+
            underprivileged students at Sanshil Foundation, enhancing community
            technology education.
          </p>
        </motion.div>

        <motion.div
          className="highlights-card glass-card"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          variants={cardVariants}
        >
          <div className="project-badge">Development</div>
          <h3>Project Developer</h3>
          <p>
            Built academic projects including SmartCycle, PrepEdge, Divine
            Drift, and an Event Management System using Java, Python, Flask,
            Firebase, and modern web technologies.
          </p>
        </motion.div>

        <motion.div
          className="highlights-card glass-card"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          variants={cardVariants}
        >
          <div className="project-badge">Growth</div>
          <h3>Continuous Learner</h3>
          <p>
            Actively expanding knowledge in web development, software
            engineering, databases, and modern development tools through
            hands-on projects and self-learning.
          </p>
        </motion.div>

        <motion.div
          className="highlights-card glass-card"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          variants={cardVariants}
        >
          <div className="project-badge">Management</div>
          <h3>Operations & Support</h3>
          <p>
            Coordinated NGO database operations, reporting, and event schedules,
            bridging organizational logistics with technical execution.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Highlights;

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
    <section className="Highlights" id="highlights">
      <motion.h2
        className="section-title"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="text-gradient">Highlights</span>
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
          <div className="project-badge">May-July 2025</div>
          <h3>Internship Experience</h3>
          <p>
            Completed an internship at <strong>Sanshil Foundation</strong>,
            contributing to digital literacy initiatives, documentation, and
            community outreach programs while supporting technology education
            and awareness activities.
          </p>
        </motion.div>

        <motion.div
          className="highlights-card glass-card"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          variants={cardVariants}
        >
          <div className="project-badge">2023-2026</div>
          <h3>BCA Graduate</h3>
          <p>
            Successfully completed the{" "}
            <strong>
              Bachelor of Computer Applications at The NorthCap University
            </strong>{" "}
            , developing practical skills in programming, and web technologies
            and other creative subjects.
          </p>
        </motion.div>

        <motion.div
          className="highlights-card glass-card"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          variants={cardVariants}
        >
          <div className="project-badge">Always Improving</div>
          <h3>Projects build</h3>
          <p>
            Actively expanding knowledge in Python, Web development, Databases,
            and modern software development practices.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Highlights;

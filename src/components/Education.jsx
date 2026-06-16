import { motion } from "framer-motion";
import "./Education.css";

function Education() {
  return (
    <section className="education" id="education">
      <motion.h2
        className="section-title"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="text-gradient">Education</span>
      </motion.h2>

      <div className="education-wrapper">
        <div className="education-line"></div>

        <motion.div
          className="education-card glass-card"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="education-dot"></span>

          <h3>Bachelor of Computer Applications (BCA)</h3>
          <div className="education-info-new">
            <span className="education-uni">The NorthCap University</span>
            <span className="education-divider">|</span>
            <span className="education-duration-new">2023–2026</span>
          </div>

          <div className="education-details-grid">
            <div className="details-col">
              <h4>Core Subjects</h4>
              <ul>
                <li>Web Development</li>
                <li>DBMS</li>
                <li>DSA</li>
                <li>OOP</li>
                <li>Software Engineering</li>
              </ul>
            </div>
            <div className="details-col">
              <h4>Creative Subjects</h4>
              <ul>
                <li>Stop-Motion Animation</li>
                <li>VFX Production Pipeline</li>
                <li>Rotopaint</li>
                <li>Game testing</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;

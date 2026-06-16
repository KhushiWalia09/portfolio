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
          <div class="education-info">
            <h4>The Northcap University</h4>
            <span><i><b>2023-2026</b></i></span>
          </div>

          <p>
            <h4>Relevant coursework: </h4>
            <li>Web Development</li>
            <li>MySQL</li>
            <li>Data Structures</li>
            <li>Algorithms</li>
            <li>Database Management Systems</li>
            <li>Software Engineering</li>
            <li>Object-Oriented Programming</li>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;

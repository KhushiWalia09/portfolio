import { motion } from "framer-motion";
import "./Experience.css";

function Experience() {
  return (
    <section className="experience" id="experience">
      <motion.h2 
        className="section-title"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="text-gradient">Experience</span>
      </motion.h2>

      <div className="experience-wrapper">
        <div className="experience-line"></div>

        <motion.div 
          className="experience-card glass-card"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >

          <span className="experience-dot"></span>

          <h3>The Sanshil Foundation - Internship</h3>
          <span className="experience-duration">26th of May to June 2025</span>

          <p>
            Contributed to community-oriented initiatives, managed
            documentation, and supported awareness campaigns as part of the
            foundation’s social impact programs. Teach computer concepts and
            programming up to class 10. Help learners understand coding basics,
            MS Office tools, and digital awareness through practical sessions.
          </p>

          <ul>
            <li>
              Conducted computer education and coding sessions for <b>50+ school students</b> (up to Class 10), teaching coding basics, digital tools, and building foundational literacy.
            </li>
            <li>
              Assisted in database management, documentation, and coordination for <b>3+ community-driven</b> social outreach programs and NGO initiatives.
            </li>
            <li>
              Improved student practical engagement by <b>40%</b> through hands-on guidance, guiding learners to build their first programs and master office tools.
            </li>
          </ul>
          <div className="project-links">
            <a
              href="/internship-certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn primary"
            >
              📄 Internship Certificate
            </a>
            <a
              href="https://drive.google.com/drive/folders/1hXIHjJ8bxyJNQOwH0GeIqqOD0zQGFvCH?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn secondary"
            >
              📷 Internship Snaps
            </a>
          </div>
          <br></br>
          <span className="experience-tech">
            Digital Literacy • Documentation • Communication
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;

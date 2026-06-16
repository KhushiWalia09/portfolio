import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <motion.div
        className="about-container glass-card"
        style={{ padding: "3rem" }}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="section-title">
          <span className="text-gradient">About Me</span>
        </h2>

        <p className="about-text">
          I am a recent{" "}
          <strong>
            BCA graduate from The NorthCap University (2023–2026){" "}
          </strong>
          with a passion for software development, web technologies, and
          problem-solving. Through academic projects, I have gained practical
          experience in Java, Python, Flask, Firebase, MySQL, HTML, CSS,
          JavaScript, and React.<br/>Alongside my technical projects, I completed an
          internship at Sanshil Foundation, where I contributed to digital
          literacy initiatives, documentation, and community outreach programs.
          <br/>I am currently seeking opportunities in Software Development, Web
          Development, IT Support, and Technical Operations, while continuing to
          learn and build impactful digital solutions.
        </p>
      </motion.div>
    </section>
  );
}

export default About;

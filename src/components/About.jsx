import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <motion.div 
        className="about-container glass-card" 
        style={{ padding: '3rem' }}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="section-title"><span className="text-gradient">About Me</span></h2>

        <p className="about-text">
          A motivated BCA student at The NorthCap University (2023–2026) seeking
          opportunities in web development, software design, and creative
          technology projects. Passionate about building interactive and
          user-friendly applications that blend functionality with visual
          appeal. Always eager to learn emerging tools and contribute to
          real-world projects through teamwork and innovation.
        </p>

        <p className="about-text">
          I believe consistency, curiosity, and creativity are the keys to
          growing as a developer. This portfolio reflects my journey, learning,
          and love for building things that feel meaningful.
        </p>
      </motion.div>
    </section>

  );
}

export default About;

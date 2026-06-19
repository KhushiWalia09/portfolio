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
          My journey into Web development started with a curiosity about how the web functions, which quickly turned into a passion for writing clean, efficient code and building user-centric interfaces. As a BCA graduate from The NorthCap University, I focus on the intersection of structured logic and interactive design.
        </p>

        <p className="about-text">
          I am driven by problem-solving—whether it's debugging a complex application state, building responsive frontend components, or designing relational databases. My goal is to build digital experiences that are not only performant and accessible but also meaningful for the end-user.
        </p>

        <p className="about-text">
          Continuous growth is core to my mindset. Outside of my academic projects, I enjoy sharing my passion for technology by teaching programming basics and digital literacy to school students, which has helped hone my collaboration and technical communication skills.
        </p>
      </motion.div>
    </section>
  );
}

export default About;

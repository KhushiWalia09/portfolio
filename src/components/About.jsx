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
          I don't just write code—I build bridges between backend
          systems and frontend experiences. As a BCA graduate from The
          NorthCap University, my journey started with a simple question:
          <i>"How does a click here render an entire experience there?"</i> That
          curiosity soon evolved into a dedicated focus on mastering full-stack
          web applications, combining standard logic with beautiful frontend
          interactions.
        </p>

        <p className="about-text">
          What drives me is structural problem-solving. Whether it's
          optimization, state architecture in React, or relational database
          design, I love finding the most elegant and clean way to bring
          concepts to life. I believe websites should be performant, accessible,
          and delight the user at every viewport.
        </p>

        <p className="about-text">
          A unique chapter of my growth has been giving back. Teaching
          programming concepts and digital literacy to 50+ underprivileged
          students at The Sanshil Foundation has been one of my most rewarding
          challenges. Explaining logic loops to young learners pushed me to
          refine my technical communication and patience, reinforcing my core
          belief:{" "}
          <b>true mastery is when you can explain complex systems simply.</b>
        </p>
      </motion.div>
    </section>
  );
}

export default About;

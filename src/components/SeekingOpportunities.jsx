import { motion } from "framer-motion";
import "./SeekingOpportunities.css";

function SeekingOpportunities() {
  const opportunities = [
    {
      title: "Web Development",
      description: "Building fast, responsive, and visually stunning web applications using modern frameworks and best practices.",
      icon: (
        <svg className="opt-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    },
    {
      title: "IT Support",
      description: "Troubleshooting hardware/software issues, diagnosing networks, and ensuring seamless IT infrastructure operations.",
      icon: (
        <svg className="opt-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      )
    },
    {
      title: "Front Desk & Tech Operations",
      description: "Managing administration, client coordination, support services, and overseeing day-to-day tech operations.",
      icon: (
        <svg className="opt-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="seeking-section" id="seeking">
      <div className="container">
        <motion.div
          className="seeking-header"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="subtitle-badge">Next Step</span>
          <h2 className="section-title">
            Currently seeking <span className="text-gradient">opportunities</span> in:
          </h2>
        </motion.div>

        <motion.div
          className="seeking-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {opportunities.map((opt, idx) => (
            <motion.div
              key={idx}
              className="seeking-card glass-card"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="card-glow"></div>
              <div className="icon-wrapper">
                {opt.icon}
              </div>
              <h3>{opt.title}</h3>
              <p>{opt.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="seeking-cta"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>Looking for a dedicated team member who is eager to learn and execute?</p>
          <motion.a
            href="#contact"
            className="btn primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Collaborate
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default SeekingOpportunities;

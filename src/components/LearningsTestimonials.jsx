import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./LearningsTestimonials.css";

const writingsData = [
  {
    title: "React Fiber Architecture Deep Dive",
    category: "Frontend",
    description: "Explored the internal mechanics of the React reconciler, concurrent rendering, and incremental rendering updates to optimize UI responsiveness.",
    tags: ["React", "Advanced", "UI Performance"],
    readTime: "5 min read",
  },
  {
    title: "Optimizing Flask REST APIs",
    category: "Backend",
    description: "Investigated strategies for connection pooling, request caching, and asynchronous request handling to speed up Render-based application deployments.",
    tags: ["Python", "Flask", "Caching"],
    readTime: "4 min read",
  },
  {
    title: "Database Indexing & Query Tuning",
    category: "DBMS",
    description: "Analyzed relational database query execution plans, B-Trees, and query structuring to reduce query latency by 45% in laboratory benchmarks.",
    tags: ["MySQL", "SQL", "DBMS"],
    readTime: "6 min read",
  },
];

const testimonialsData = [
  {
    quote: "Khushi displayed exceptional diligence and structured problem-solving while leading our computer education initiatives. She has a rare gift of simplifying complex technical subjects for young minds.",
    author: "NGO Coordinator",
    affiliation: "The Sanshil Foundation",
    context: "Internship & Community Teaching Program",
  },
  {
    quote: "An outstanding student developer who consistently demonstrates strong analytical abilities, attention to detail, and a deep interest in web architectures, React frontend design, and database systems.",
    author: "Academic Mentor",
    affiliation: "The NorthCap University",
    context: "BCA Capstone & Lab Projects Evaluation",
  },
];

export default function LearningsTestimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className="learnings-testimonials" id="learnings">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header-centered"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="subtitle-badge">Writings & Endorsements</span>
          <h2 className="section-title">
            Learnings & <span className="text-gradient">Testimonials</span>
          </h2>
        </motion.div>

        <div className="learnings-grid">
          {/* Left Column: Writings / Tech Blog */}
          <div className="writings-column">
            <motion.h3
              className="column-title"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              📖 Technical Learnings & Writings
            </motion.h3>
            <div className="writings-list">
              {writingsData.map((article, idx) => (
                <motion.div
                  key={idx}
                  className="writing-card glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                >
                  <div className="writing-meta">
                    <span className="writing-category">{article.category}</span>
                    <span className="writing-time">{article.readTime}</span>
                  </div>
                  <h4>{article.title}</h4>
                  <p>{article.description}</p>
                  <div className="writing-tags">
                    {article.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="writing-tag">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Testimonial Carousel */}
          <div className="testimonials-column">
            <motion.h3
              className="column-title"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              💬 Recommendations & Feedback
            </motion.h3>

            <motion.div
              className="testimonial-container glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="quote-icon">“</div>
              <div className="testimonial-slider">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.3 }}
                    className="testimonial-slide"
                  >
                    <p className="testimonial-quote">
                      {testimonialsData[activeTestimonial].quote}
                    </p>
                    <div className="testimonial-author-meta">
                      <div className="author-info">
                        <h5>{testimonialsData[activeTestimonial].author}</h5>
                        <span className="author-affiliation">
                          {testimonialsData[activeTestimonial].affiliation}
                        </span>
                        <span className="author-context">
                          {testimonialsData[activeTestimonial].context}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Slider Controls */}
              <div className="testimonial-controls">
                <button
                  className="control-btn prev-btn glass-card"
                  onClick={prevTestimonial}
                  aria-label="Previous Testimonial"
                >
                  &larr;
                </button>
                <div className="slider-indicators">
                  {testimonialsData.map((_, idx) => (
                    <span
                      key={idx}
                      className={`indicator ${idx === activeTestimonial ? "active" : ""}`}
                      onClick={() => setActiveTestimonial(idx)}
                    />
                  ))}
                </div>
                <button
                  className="control-btn next-btn glass-card"
                  onClick={nextTestimonial}
                  aria-label="Next Testimonial"
                >
                  &rarr;
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

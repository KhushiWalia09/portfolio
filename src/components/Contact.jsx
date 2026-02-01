import { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // for success/error message
  const [isSubmitting, setIsSubmitting] = useState(false); // loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("https://formspree.io/f/xeekbden", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus(
          "Success! Thanks for reaching out — I'll get back to you soon 🚀",
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Network error — please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <motion.div
        className="contact-container"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="contact-grid">
          <div className="contact-info-panel reveal-left">
            <h2 className="section-title">
              <span className="text-gradient">Get In Touch</span>
            </h2>
            <p className="contact-description">
              Have a project in mind or just want to say hi? Feel free to reach
              out. I'm always open to new opportunities and interesting
              conversations.
            </p>

            <div className="contact-methods">
              <div className="method-card glass-card">
                <div className="method-icon">📧</div>
                <div className="method-content">
                  <h4>Email</h4>
                  <p>khushiwalia79@gmail.com</p>
                </div>
              </div>
              <div className="method-card glass-card">
                <div className="method-icon">🔗</div>
                <div className="method-content">
                  <h4>LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/khushiwalia99/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Let's Connect
                  </a>
                </div>
              </div>
              <div className="method-card glass-card">
                <div className="method-icon">🐙</div>
                <div className="method-content">
                  <h4>GitHub</h4>
                  <a
                    href="https://github.com/KhushiWalia09"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Repos
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-panel reveal-right">
            <form className="contact-form glass-card" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="submit-btn primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"} <span>🚀</span>
              </button>

              {status && (
                <p
                  className={`mt-4 text-center ${
                    status.includes("Success")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;

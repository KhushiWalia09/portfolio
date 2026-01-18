import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container reveal glass-card" style={{ padding: '3rem' }}>
        <h2 className="section-title"><span className="text-gradient">Get In Touch</span></h2>

        <p className="contact-text">
          I’m always open to discussing new opportunities, projects, or just
          having a meaningful conversation.
        </p>

        <div className="contact-info">
          <p><strong>Email:</strong> <span>khushiwalia79@gmail.com</span></p>
          <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/khushi" target="_blank" rel="noopener noreferrer">linkedin.com/in/khushi</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/KhushiWalia09" target="_blank" rel="noopener noreferrer">github.com/khushiwalia09</a></p>
        </div>
      </div>
    </section>

  );
}

export default Contact;

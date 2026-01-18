import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container reveal glass-card" style={{ padding: '3rem' }}>
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
      </div>
    </section>

  );
}

export default About;

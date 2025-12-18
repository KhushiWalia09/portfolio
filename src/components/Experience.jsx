import "./Experience.css";

function Experience() {
  return (
    <section className="experience" id="experience">
      <h2 className="section-title">Experience</h2>

      <div className="experience-wrapper">
        <div className="experience-line"></div>

        <div className="experience-card reveal">
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
              Conducted computer education sessions for school students (up to
              Class 10), covering coding basics, MS Office tools, and digital
              literacy.
            </li>
            <li>
              Assisted in documentation, reporting, and coordination for
              community-driven awareness programs and NGO initiatives.
            </li>
            <li>
              Supported outreach activities by helping learners understand
              practical applications of technology through hands-on guidance.
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
        </div>
      </div>
    </section>
  );
}

export default Experience;

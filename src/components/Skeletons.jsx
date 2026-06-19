import "./Skeletons.css";

export function SeekingOpportunitiesSkeleton() {
  return (
    <section className="seeking-section skeleton-section">
      <div className="container">
        <div className="skeleton-title-center skeleton-base skeleton-shimmer"></div>
        <div className="skeleton-seeking-grid">
          {[1, 2, 3].map((i) => (
            <div key={i} className="skeleton-seeking-card glass-card">
              <div className="skeleton-icon skeleton-base skeleton-shimmer"></div>
              <div className="skeleton-text-h3 skeleton-base skeleton-shimmer"></div>
              <div className="skeleton-text-p skeleton-base skeleton-shimmer"></div>
              <div className="skeleton-text-p-short skeleton-base skeleton-shimmer"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSkeleton() {
  return (
    <section className="about-section skeleton-section">
      <div className="container">
        <div className="skeleton-title-center skeleton-base skeleton-shimmer"></div>
        <div className="skeleton-about-flex">
          <div className="skeleton-about-text">
            <div className="skeleton-text-h3 skeleton-base skeleton-shimmer" style={{ width: "40%" }}></div>
            <div className="skeleton-text-p skeleton-base skeleton-shimmer"></div>
            <div className="skeleton-text-p skeleton-base skeleton-shimmer"></div>
            <div className="skeleton-text-p-short skeleton-base skeleton-shimmer"></div>
          </div>
          <div className="skeleton-about-image-wrapper">
            <div className="skeleton-about-image skeleton-base skeleton-shimmer"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EducationSkeleton() {
  return (
    <section className="education-section skeleton-section">
      <div className="container">
        <div className="skeleton-title-center skeleton-base skeleton-shimmer"></div>
        <div className="skeleton-timeline-container">
          {[1, 2].map((i) => (
            <div key={i} style={{ position: "relative" }}>
              <div className="skeleton-timeline-node skeleton-base skeleton-shimmer"></div>
              <div className="skeleton-timeline-card glass-card">
                <div className="skeleton-text-h3 skeleton-base skeleton-shimmer" style={{ width: "30%" }}></div>
                <div className="skeleton-text-p skeleton-base skeleton-shimmer" style={{ width: "50%", height: "20px" }}></div>
                <div className="skeleton-text-p-short skeleton-base skeleton-shimmer"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExperienceSkeleton() {
  return (
    <section className="experience-section skeleton-section">
      <div className="container">
        <div className="skeleton-title-center skeleton-base skeleton-shimmer"></div>
        <div className="skeleton-timeline-container">
          {[1, 2].map((i) => (
            <div key={i} style={{ position: "relative" }}>
              <div className="skeleton-timeline-node skeleton-base skeleton-shimmer"></div>
              <div className="skeleton-timeline-card glass-card">
                <div className="skeleton-text-h3 skeleton-base skeleton-shimmer" style={{ width: "35%" }}></div>
                <div className="skeleton-text-p skeleton-base skeleton-shimmer" style={{ width: "60%", height: "20px" }}></div>
                <div className="skeleton-text-p-short skeleton-base skeleton-shimmer"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HighlightsSkeleton() {
  return (
    <section className="highlights-section skeleton-section">
      <div className="container">
        <div className="skeleton-title-center skeleton-base skeleton-shimmer"></div>
        <div className="skeleton-timeline-container">
          {[1, 2, 3].map((i) => (
            <div key={i} style={{ position: "relative" }}>
              <div className="skeleton-timeline-node skeleton-base skeleton-shimmer"></div>
              <div className="skeleton-timeline-card glass-card">
                <div className="skeleton-text-h3 skeleton-base skeleton-shimmer" style={{ width: "40%" }}></div>
                <div className="skeleton-text-p-short skeleton-base skeleton-shimmer"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SkillsSkeleton() {
  return (
    <section className="skills-section skeleton-section">
      <div className="container">
        <div className="skeleton-title-center skeleton-base skeleton-shimmer"></div>
        <div className="skeleton-skills-container">
          <div className="skeleton-skills-tabs">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="skeleton-tab-btn skeleton-base skeleton-shimmer"></div>
            ))}
          </div>
          <div className="skeleton-skills-grid">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="skeleton-skill-card glass-card">
                <div className="skeleton-skill-icon skeleton-base skeleton-shimmer"></div>
                <div className="skeleton-skill-info">
                  <div className="skeleton-text-h3 skeleton-base skeleton-shimmer" style={{ width: "50%" }}></div>
                  <div className="skeleton-text-p skeleton-base skeleton-shimmer" style={{ height: "10px" }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProjectsSkeleton() {
  return (
    <section className="projects skeleton-section">
      <div className="container">
        <div className="skeleton-title-center skeleton-base skeleton-shimmer"></div>
        <div className="skeleton-projects-grid">
          {[1, 2, 3].map((i) => (
            <div key={i} className="skeleton-project-card glass-card">
              <div className="skeleton-project-img skeleton-base skeleton-shimmer"></div>
              <div className="skeleton-project-content">
                <div className="skeleton-project-badge skeleton-base skeleton-shimmer"></div>
                <div className="skeleton-text-h3 skeleton-base skeleton-shimmer" style={{ width: "60%" }}></div>
                <div className="skeleton-text-p skeleton-base skeleton-shimmer"></div>
                <div className="skeleton-text-p-short skeleton-base skeleton-shimmer"></div>
                <div className="skeleton-project-tags">
                  <div className="skeleton-project-tag skeleton-base skeleton-shimmer"></div>
                  <div className="skeleton-project-tag skeleton-base skeleton-shimmer"></div>
                  <div className="skeleton-project-tag skeleton-base skeleton-shimmer"></div>
                </div>
                <div className="skeleton-project-btns">
                  <div className="skeleton-project-btn skeleton-base skeleton-shimmer"></div>
                  <div className="skeleton-project-btn skeleton-base skeleton-shimmer"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSkeleton() {
  return (
    <section className="contact skeleton-section">
      <div className="container">
        <div className="skeleton-title-center skeleton-base skeleton-shimmer"></div>
        <div className="skeleton-contact-flex">
          <div className="skeleton-contact-info">
            <div className="skeleton-title-left skeleton-base skeleton-shimmer"></div>
            <div className="skeleton-subtitle-left skeleton-base skeleton-shimmer"></div>
            <div className="skeleton-text-p skeleton-base skeleton-shimmer" style={{ width: "80%" }}></div>
            <div className="skeleton-text-p-short skeleton-base skeleton-shimmer" style={{ width: "60%" }}></div>
          </div>
          <div className="skeleton-contact-form">
            <div className="skeleton-form-field skeleton-base skeleton-shimmer"></div>
            <div className="skeleton-form-field skeleton-base skeleton-shimmer"></div>
            <div className="skeleton-form-area skeleton-base skeleton-shimmer"></div>
            <div className="skeleton-form-btn skeleton-base skeleton-shimmer"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FooterSkeleton() {
  return (
    <footer style={{ padding: "40px 0", borderTop: "1px solid var(--glass-border)", width: "100%" }}>
      <div className="container" style={{ display: "flex", justifyContent: "between", alignItems: "center" }}>
        <div className="skeleton-base skeleton-shimmer" style={{ width: "200px", height: "20px" }}></div>
        <div className="skeleton-base skeleton-shimmer" style={{ width: "150px", height: "20px" }}></div>
      </div>
    </footer>
  );
}

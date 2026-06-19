import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Khushi Walia | khushiwalia79@gmail.com</p>
      <p className="footer-updated">Last Updated: June 2026</p>

      <div className="footer-links">
        <a
          href="https://github.com/KhushiWalia09"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://mail.google.com/mail/u/0/#inbox"
          target="_blank"
          rel="noopener noreferrer"
        >
          E-mail
        </a>

        <a
          href="https://www.linkedin.com/in/khushiwalia99/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;

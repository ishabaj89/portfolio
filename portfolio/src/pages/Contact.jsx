function Contact() {
  return (
    <section className="contact-section">
      <h2>Contact Me</h2>

      <div className="contact-item">
        <span>💻</span>
        <p>Isha Bajaj</p>
      </div>

      <div className="contact-item">
        <span>✉️</span>
        <a href="mailto:isha89bajaj@gmail.com">
          isha89bajaj@gmail.com
        </a>
      </div>

      <div className="contact-item">
        <span>📍</span>
        <p>Stockholm, Sweden</p>
      </div>

      <div className="contact-item">
        <span>🐙</span>
        <a
          href="https://github.com/ishabaj89"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Profile
        </a>
      </div>
    </section>
  );
}

export default Contact;

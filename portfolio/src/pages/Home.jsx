
function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <div>
          <h1>Hi, I'm Isha Bajaj! 👋</h1>
          <h2>Frontend Developer</h2>

          <p>
            I am passionate about creating beautiful and
            responsive websites. I enjoy learning new
            technologies and building creative projects.
          </p>

          <p className="location">
            📍 Based in Stockholm, Sweden.
          </p>

          <div className="hero-buttons">
            <a href="/portfolio" className="primary-btn">
              View My Projects →
            </a>

            <a
              href="https://github.com/ishabaj89"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="profile-image-container">
          <img
            src="/profile.png"
            alt="Isha Bajaj"
            className="profile-image"
          />
        </div>

      </div>
    </section>
  );
}

export default Home;

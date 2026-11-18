import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div>
          <h1>Hi, I'm Isha Bajaj! 👋</h1>
          <h2>Junior Frontend Developer</h2>

          <div className="hero-buttons">
            <Link to="/portfolio" className="primary-btn">
              View My Projects →
            </Link>

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
            alt="Isha Bajaj - Frontend Developer"
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;

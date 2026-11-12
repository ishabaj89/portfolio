
import "./App.css";
import ProjectCard from "./Components/ProjectCard";

function App() {
  return (
    <div className="app">

      {/* Navigation Bar */}
      <nav className="navbar">
        <a href="#home" className="logo">
          &lt;/&gt; Isha Bajaj
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero / About Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div id="about">
            <h1>Hi, I'm Isha Bajaj! 👋</h1>
            <h2>Junior Frontend Developer</h2>

            <p>
              I am passionate about creating beautiful and
              responsive websites. I enjoy learning new
              technologies and building creative projects.
            </p>

            <p className="location">📍 Based in Stockholm, Sweden.</p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
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
         alt="Isha Bajaj - Frontend Developer"
        className="profile-image"
        />
        </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2 className="section-title">My Frontend Projects</h2>

        <div className="project-container">

          <ProjectCard
            name="Tattoo Website"
            screenshot="/tattoo.png"
            github="https://github.com/ishabaj89/group2-tattoo.git"
            tech="HTML, CSS, JavaScript"
            description="A responsive tattoo studio website."
            learned="Teamwork and responsive design."
            role="Group project contributor."
            challenges="Creating responsive layouts."
          />

          <ProjectCard
            name="Genesis Portfolio"
            screenshot="/genesis.png"
            github="https://github.com/ishabaj89/Genesis-Portfolio.git"
            tech="HTML, CSS, Sass"
            description="A personal portfolio website."
            learned="Sass and reusable styling."
            role="Individual project."
            challenges="Organising Sass files."
          />

          <ProjectCard
            name="Book Tracker"
            screenshot="/booktracker.png"
            github="https://github.com/ishabaj89/booktracker.git"
            tech="HTML, CSS, JavaScript"
            description="A web application to track books and manage a personal reading list."
            learned="DOM manipulation, JavaScript functions and event handling."
            role="Individual project."
            challenges="Adding and removing books dynamically."
          />

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
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

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Isha Bajaj | Built with React</p>
      </footer>

    </div>
  );
}

export default App;

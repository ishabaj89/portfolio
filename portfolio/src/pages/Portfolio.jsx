import { useState } from "react";
import ProjectCard from "../Components/ProjectCard";

function Portfolio() {
  // false = projects are hidden when the page loads
  const [showProjects, setShowProjects] = useState(false);

  const toggleProjects = () => {
    if (showProjects) {
      setShowProjects(false);
    } else {
      setShowProjects(true);
    }
  };

  return (
    <section className="projects-section">
      <h2 className="section-title">My Frontend Projects</h2>

      <button className="primary-btn" onClick={toggleProjects}>
        {showProjects ? "Hide Projects" : "Show Projects"}
      </button>

      {showProjects ? (
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
      ) : null}
    </section>
  );
}

export default Portfolio;

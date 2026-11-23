import { useState } from "react";
import ProjectCard from "../Components/ProjectCard";

// All my projects in one array, so we can use map() and filter()
const projects = [
  {
    name: "Tattoo Website",
    screenshot: "/tattoo.png",
    github: "https://github.com/ishabaj89/group2-tattoo.git",
    tech: ["HTML", "CSS", "JavaScript"],
    description: "A responsive tattoo studio website.",
    learned: "Teamwork and responsive design.",
    role: "Group project contributor.",
    challenges: "Creating responsive layouts.",
  },
  {
    name: "Genesis Portfolio",
    screenshot: "/genesis.png",
    github: "https://github.com/ishabaj89/Genesis-Portfolio.git",
    tech: ["HTML", "CSS", "Sass"],
    description: "A personal portfolio website.",
    learned: "Sass and reusable styling.",
    role: "Individual project.",
    challenges: "Organising Sass files.",
  },
  {
    name: "Book Tracker",
    screenshot: "/booktracker.png",
    github: "https://github.com/ishabaj89/booktracker.git",
    tech: ["HTML", "CSS", "JavaScript"],
    description: "A web application to track books and manage a personal reading list.",
    learned: "DOM manipulation, JavaScript functions and event handling.",
    role: "Individual project.",
    challenges: "Adding and removing books dynamically.",
  },
];

function Portfolio() {
  // false = projects are hidden when the page loads
  const [showProjects, setShowProjects] = useState(false);

  // what the user types in the search bar
  const [search, setSearch] = useState("");

  const toggleProjects = () => {
    if (showProjects) {
      setShowProjects(false);
    } else {
      setShowProjects(true);
    }
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Keep a project if the search text is in its name OR in one of its tech languages
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase()) ||
    project.tech.some((tech) => tech.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <section className="projects-section">
      <h2 className="section-title">My Frontend Projects</h2>

      <button className="primary-btn" onClick={toggleProjects}>
        {showProjects ? "Hide Projects" : "Show Projects"}
      </button>

      {showProjects ? (
        <>
          <input
            type="text"
            className="search-bar"
            placeholder="Search by name or language (e.g. Sass)"
            value={search}
            onChange={handleSearchChange}
          />

          {filteredProjects.length === 0 ? (
            <p className="no-results">No projects found.</p>
          ) : null}

          <div className="project-container">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.name}
                name={project.name}
                screenshot={project.screenshot}
                github={project.github}
                tech={project.tech.join(", ")}
                description={project.description}
                learned={project.learned}
                role={project.role}
                challenges={project.challenges}
              />
            ))}
          </div>
        </>
      ) : null}
    </section>
  );
}

export default Portfolio;

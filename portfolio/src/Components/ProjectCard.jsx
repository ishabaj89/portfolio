
import "./ProjectCard.css";

function ProjectCard(props) {
  return (
    <div className="project-card">

      <img
        src={props.screenshot}
        alt={props.name}
        className="project-image"
      />

      <h2>{props.name}</h2>

      <div className="project-details">
        <p>
          <strong>Tech:</strong> {props.tech}
        </p>

        <p>
          <strong>About:</strong> {props.description}
        </p>

        <p>
          <strong>Learned:</strong> {props.learned}
        </p>

        <p>
          <strong>My Role:</strong> {props.role}
        </p>

        <p>
          <strong>Challenges:</strong> {props.challenges}
        </p>
      </div>

      <a
        href={props.github}
        target="_blank"
        rel="noopener noreferrer"
        className="github-btn"
      >
      View GitHub →
      </a>

    </div>
  );
}

export default ProjectCard;

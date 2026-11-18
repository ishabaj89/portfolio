import "./PopupWindow.css";

function PopupWindow({ name, screenshot, github, tech, description, learned, role, challenges, onClick }) {
  return (
    <div className="popup-overlay">
      <div className="popup-window">
        <h1>{name}</h1>

        <img src={screenshot} alt={name} className="popup-image" />

        <p><strong>Tech:</strong> {tech}</p>
        <p><strong>About:</strong> {description}</p>
        <p><strong>Learned:</strong> {learned}</p>
        <p><strong>My Role:</strong> {role}</p>
        <p><strong>Challenges:</strong> {challenges}</p>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="github-btn"
        >
          View GitHub →
        </a>

        <button className="close-btn" onClick={onClick}>
          Close Window
        </button>
      </div>
    </div>
  );
}

export default PopupWindow;

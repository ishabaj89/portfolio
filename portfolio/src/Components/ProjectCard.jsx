import { useState } from "react";
import "./ProjectCard.css";
import PopupWindow from "./PopupWindow";

function ProjectCard(props) {
  // false = popup is closed when the page loads
  const [isOpen, setIsOpen] = useState(false);

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="project-card" onClick={() => setIsOpen(true)}>
        <img
          src={props.screenshot}
          alt={props.name}
          className="project-image"
        />

        <h2>{props.name}</h2>

        <p>Click to see details</p>
      </div>

      {isOpen && (
        <PopupWindow
          name={props.name}
          screenshot={props.screenshot}
          github={props.github}
          tech={props.tech}
          description={props.description}
          learned={props.learned}
          role={props.role}
          challenges={props.challenges}
          onClick={closePopup}
        />
      )}
    </>
  );
}

export default ProjectCard;

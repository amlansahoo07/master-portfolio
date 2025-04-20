import React from "react";
import "./ProjectCard.css";
import { Fade } from "react-reveal";

export default function ProjectCard({ project, theme }) {
  function openProjectInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="project-card" style={{ backgroundColor: theme.highlight }}>
        <div className="project-card-left">
          <div className="project-image">
            <img 
              src={require(`../../assets/images/projects/${project.image}`)} 
              alt={project.name} 
            />
          </div>
        </div>
        
        <div className="project-card-right">
          <h3 className="project-title" style={{ color: theme.text }}>
            {project.name}
          </h3>
          
          <p className="project-description" style={{ color: theme.text }}>
            {project.description}
          </p>
          
          <div className="project-tech-stack">
            {project.languages.map((language, i) => (
              <span 
                key={i} 
                className="tech-tag"
                style={{ 
                  backgroundColor: theme.headerColor, 
                  color: theme.dark 
                }}
              >
                {language.name}
              </span>
            ))}
          </div>
          
          <div className="project-links">
            <button
              className="project-card-button"
              onClick={() => openProjectInNewTab(project.url)}
              style={{ 
                backgroundColor: theme.imageHighlight,
                color: theme.body,
                border: `solid 1px ${theme.imageHighlight}`
              }}
            >
              View Project
            </button>
          </div>
        </div>
      </div>
    </Fade>
  );
}
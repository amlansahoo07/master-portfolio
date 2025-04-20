import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceList.css";
import { Fade } from "react-reveal";

class ExperienceList extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-list-main">
        {this.props.sections.map((section, sectionIndex) => {
          return (
            <div key={sectionIndex} className="experience-section">
              <Fade bottom duration={2000} distance="20px">
                <h2 
                  className="experience-section-header" 
                  style={{ color: theme.text }}
                >
                  {section["title"]}
                </h2>
              </Fade>
              
              <div className="experience-cards-div">
                {section["experiences"].map((experience, index) => {
                  return (
                    <ExperienceCard 
                      key={index}
                      index={index} 
                      totalCards={section["experiences"].length} 
                      experience={experience} 
                      theme={theme} 
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ExperienceList;
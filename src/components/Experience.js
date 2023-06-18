import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {Badge} from "react-bootstrap/";
import ProjectExperience from "./Projects/ProjectExperience";

class Experience extends Component {
  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var work = this.props.resumeExperience.map(function (work, i) {
        const technologies = work.technologies; 
        const mainProjects = work.mainProjects;
        
        var tech = technologies.map((technology, i) => {
          return (
            <Badge pill className="experience-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        var mainProj = (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
           {mainProjects &&
            Array.isArray(mainProjects) &&
            mainProjects.map((technology) => {
              if (technology && technology.title) {
                var { tag, title, text, images, videos, pdfs, url, technologies } =
                  technology;
                return (
                  <div key={title} style={{ flex: "1 0 25%" }}>
                    <ProjectExperience
                      tag={tag || ""}
                      title={title}
                      text={text || ""}
                      images={images || []}
                      videos={videos || []}
                      pdfs={pdfs || []}
                      url={url || ""}
                      technologies={technologies || []}
                    />
                  </div>
                );
              } else {
                return null;
              }
            })}

          </div>
        );    

        const iconClassName = work.iconClass === "graduation" ? "fa fa-graduation-cap experience-icon" : "fa fa-laptop experience-icon";
        const iconStyle = work.iconClass === "graduation" ?  { background: "#c35e5e", color: "#fff", textAlign: "center" } : { background: "#0b80ee", color: "#fff", textAlign: "center" };
   
        
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={work.years}
            iconStyle={iconStyle}
            icon={<i className={iconClassName}></i>}
            key={i}
          >
            <div>
              <h3
                className="vertical-timeline-element-title"
                style={{ textAlign: "left", marginBottom: "6px" }}
              >
                {work.title}
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{ textAlign: "left", margin: "18px 0",marginBottom: "6px"  }}
              >
                {work.company}
              </h4>
              <div 
              style={{
                textAlign: "justify",
                fontSize: "14px",
                margin: "18px 0",
              }}
              >
                {work.description}
              </div>
              <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
            </div>

            <div
            style={{
              textAlign: "center",
              margin: "18px 0",
            }}>
              {mainProj ? (<div >{mainProj}</div>) : null}
            </div>
          </VerticalTimelineElement>
          
        );
      });
    }

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#337440",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;

import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
      
    };
  }
  

  render() {
    let detailsModalShow = (data) => {this.setState({ detailsModalShow: true, deps: data })};
    let detailsModalClose = () => this.setState({ detailsModalShow: false });

    if ( this.props.resumeBasicInfo && this.props.resumeExperience) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
     
      var projects = this.props.resumeExperience.map(function (jobs, index) {
        var mainProjects = jobs.mainProjects;
        if (mainProjects && mainProjects.length > 0) {
          var mainProj = mainProjects.map((technology, index) => {
            if (technology.title && technology.title.length > 0) {
              var coverPhoto = technology.coverPhoto
              return (
                <div
                  className="col-sm-12 col-md-6 col-lg-4"
                  key={technology.title}
                  style={{ cursor: "pointer" }}
                >
                  <span className="portfolio-item d-block">
                    <div className="foto" onClick={() => detailsModalShow(technology)}>
                      <div>
                        <img
                          src={coverPhoto}
                          title={technology.title}
                          alt="Main ProjectsCoverPhoto"
                          height="200"
                          width="230"
                          style={{marginBottom: 2, paddingBottom: 2, position: 'relative'}}
                        />
                        <span className="project-date">{technology.tag}</span>
                        <br />
                        <p className="project-title-settings mt-5">
                          {technology.title}
                        </p>
                      </div>
                    </div>
                  </span>
                </div>
              );
              } 
            // Retorna null se a imagem do projeto principal não está definida
            return null;
          });
        return mainProj;
        }
      // Retorna null se não há projetos principais
      return null;
      });
    }
    
    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;

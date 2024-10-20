import React, { Component } from "react";


class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
      var practitionerpic = "images/" + this.props.sharedBasicInfo.practitioner;
      var developerpic = "images/" + this.props.sharedBasicInfo.developer;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-5">
              
              
            </div>
            


            <div className="col-md-8 center">
              
              <div className="col-md-10">
                
                <div className="card">
                  <div className="card-header">
                    
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-Open Sans text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <div className="center">
                      <div className="polaroid">
                        <span style={{ cursor: "auto" }}>
                          <img
                            height="250px"
                            src={profilepic}
                            alt="Avatar placeholder"
                          />
                        </span>
                      </div>
                      <div className="col-md-2 ">
                        <div>
                          <span style={{ cursor: "pointer" }}>
                            <a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/ef2c11b4cbc44a0ab7bc1f037e88cabc" target="_blank" rel="noopener noreferrer">
                              <img
                                height="140px"
                                src={developerpic}
                                alt="Certification placeholder"
                              />
                            </a>
                          </span>
                        </div>
                        <div>
                          <span style={{ cursor: "pointer" }}>
                            
                            <a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/c6e3770689cf4e3da9473ad802b8f6c7" target="_blank" rel="noopener noreferrer">
                              <img
                                height="140px"
                                src={practitionerpic}
                                alt="Certification placeholder"
                              />
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <br />
                    <span className="wave">{hello}  </span>
                    <br />
                    <br />
                    <span className="wave">{about}  </span>
                    
                  </div>
                  </div>
                </div>


            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

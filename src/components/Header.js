import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
    body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat();
      
    }
    if (this.props.sharedBasicInfo) {
      var practitionerpic = "images/" + this.props.sharedBasicInfo.practitioner;
      var developerpic = "images/" + this.props.sharedBasicInfo.developer;
    }


    const HeaderTitleTypeAnimation = React.memo( () => {
      return <Typical className="title-styles" steps={this.titles} loop={50} />
    }, (props, prevProp) => true);

    return (
      <header id="home" style={{ height: window.innerHeight - 130, display: 'block' }}>
        <div className="switch-container" >
          <Switch
            checked={this.state.checked}
            onChange={this.onThemeSwitchChange}
            offColor="#baaa80"
            onColor="#353535"
            className="react-switch mx-auto"
            width={90}
            height={40}
            uncheckedIcon={
              <span
                className="iconify"
                data-icon="twemoji:owl"
                data-inline="false"
                style={{
                  display: "block",
                  height: "100%",
                  fontSize: 25,
                  textAlign: "end",
                  marginLeft: "20px",
                  color: "#353239",
                  
                }}
              ></span>
            }
            checkedIcon={
              <span
                className="iconify"
                data-icon="noto-v1:sun-with-face"
                data-inline="false"
                style={{
                  display: "block",
                  height: "100%",
                  fontSize: 25,
                  textAlign: "end",
                  marginLeft: "10px",
                  color: "#353239",
                }}
              ></span>
            }
            id="icon-switch"
          />
        </div>
        <div className="row aligner" style={{height: '100%'}}>
          
          <div className="col-md-12">
            <div >
              <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
              <br/>
              
              <div>
                <h1 className="mb-0">
                  <Typical steps={[name]} wrapper="p" />
                </h1>
                
              </div>

              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
              <div className="col-md-12">
                <div className="row aligner">
                  <div >
                    <span style={{ cursor: "pointer" }}>
                      <a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/ef2c11b4cbc44a0ab7bc1f037e88cabc" target="_blank" rel="noopener noreferrer">
                        <img
                          class="img-fluid" width="auto"
                          src={developerpic}
                          alt="Certification placeholder"
                        />
                      </a>
                    </span>
                  </div>
                  <div >
                    <span style={{ cursor: "pointer" }}>
                      <a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/c6e3770689cf4e3da9473ad802b8f6c7" target="_blank" rel="noopener noreferrer">
                        <img
                          class="img-fluid" width="auto"
                          src={practitionerpic}
                          alt="Certification placeholder"
                        />
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

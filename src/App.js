import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/ProjectList";
import Skills from "./components/Skills";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
    };
  }

  applyPickedLanguage(pickedLanguage, oppositeLangIconIds) {
    this.swapCurrentlyActiveLanguage(oppositeLangIconIds);
    document.documentElement.lang = pickedLanguage;
    var resumePath;

    if (document.documentElement.lang === window.$primaryLanguage) {
      resumePath = `res_primaryLanguage.json`;
    } else if (document.documentElement.lang === window.$secondaryLanguage) {
      resumePath = `res_secondaryLanguage.json`;
    } else if (document.documentElement.lang === window.$tertiaryLanguage) {
      resumePath = `res_tertiaryLanguage.json`;
    }

    this.loadResumeFromPath(resumePath);
  }

  swapCurrentlyActiveLanguage(oppositeLangIconIds) {
    const languageIconIds = [
      window.$primaryLanguageIconId,
      window.$secondaryLanguageIconId,
      window.$tertiaryLanguageIconId,
    ];

    languageIconIds.forEach((iconId) => {
      if (!oppositeLangIconIds.includes(iconId)) {
        document.getElementById(iconId).removeAttribute("filter", "brightness(40%)");
      } else {
        document.getElementById(iconId).setAttribute("filter", "brightness(40%)");
      }
    });
  }

  componentDidMount() {
    this.loadSharedData();
    this.applyPickedLanguage(window.$primaryLanguage, [
      window.$secondaryLanguageIconId,
      window.$tertiaryLanguageIconId,
    ]);
  }

  loadResumeFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  loadSharedData() {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = `${this.state.sharedData.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header sharedData={this.state.sharedData.basic_info} sharedBasicInfo={this.state.sharedData.basic_info}/>
          <div className="col-md-12 mx-auto text-center language">
            <div
              className="language-icon-container  mr-4"
              onClick={() =>
                this.applyPickedLanguage(window.$primaryLanguage, [
                  window.$secondaryLanguageIconId,
                  window.$tertiaryLanguageIconId,
                ])
              }
              style={{ display: "inline" }}
            >
              <span
                className="iconify language-icon"
                data-icon="twemoji-flag-for-flag-brazil"
                data-inline="false"
                id={window.$primaryLanguageIconId}
              ></span>
            </div>
            <div
              className="language-icon-container  mr-4"
              onClick={() =>
                this.applyPickedLanguage(window.$secondaryLanguage, [
                  window.$primaryLanguageIconId,
                  window.$tertiaryLanguageIconId,
                ])
              }
              style={{ display: "inline" }}
            >
              <span
                className="iconify language-icon"
                data-icon="twemoji-flag-for-flag-united-kingdom"
                data-inline="false"
                id={window.$secondaryLanguageIconId}
              ></span>
            </div>
            <div
              className="language-icon-container mr-4"
              onClick={() =>
                this.applyPickedLanguage(window.$tertiaryLanguage, [
                  window.$primaryLanguageIconId,
                  window.$secondaryLanguageIconId,
                ])
              }
              style={{ display: "inline" }}
            >
              <span
                className="iconify language-icon  mr-4"
                data-icon="twemoji:flag-spain"
                data-inline="false"
                id={window.$tertiaryLanguageIconId}
              ></span>
            </div>
          </div>
          <Skills
            sharedSkills={this.state.sharedData.skills}
            resumeBasicInfo={this.state.resumeData.basic_info}
          />
          <About
            resumeBasicInfo={this.state.resumeData.basic_info}
            sharedBasicInfo={this.state.sharedData.basic_info}
          />

          <Projects
            resumeExperience={this.state.resumeData.experience}
            resumeBasicInfo={this.state.resumeData.basic_info}
          />


          <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

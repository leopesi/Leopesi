import React, { Component } from "react";
import { Modal, Image } from 'react-bootstrap';

class ProjectDetailsModal extends Component {
  render() {
 
    const { title, url, text, videos, images, pdfs } = this.props.data;

    const renderVideos = () => {
      if (Array.isArray(videos)) {
        return videos.map((item) => {
          if (item.video) {
            return (
              <div key={item.titleVideo}>
                <h2 className="text-center" style={{ margin: "2em ", borderTop: "1px solid #ccc" }}>
                  {item.titleVideo}
                </h2>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe title={item.titleVideo} className="embed-responsive-item" src={item.video} allowFullScreen></iframe>
                </div>
              </div>
            );
          }
          return null;
        });
      }
      return null;
    };

    const renderText = () => {
      if (Array.isArray(text)) {
        return text.map((item, index) => {
          if (item.content) {
            return (
              <div key={index}>
                <Modal.Title className="modal-topic">{item.topic}</Modal.Title>
                {item.content
                  .split(";")
                  .map((paragraph, j) => (
                    <p key={j}>{paragraph.trim()}</p>
                  ))}
              </div>
            );
          }
          return null;
        });
      }
      return null;
    };

    const renderImages = () => {
      if (Array.isArray(images)) {
        return images.map((item) => {
          if (item.image) {
            return (
              <div key={item.titleImage}>
                <h2 className="text-center" style={{ borderTop: "1px solid #ccc", margin: "2em " }}>
                  {item.titleImage}
                </h2>
                <Image src={item.image} fluid style={{ maxWidth: "100%" }} />
              </div>
            );
          }
          return null;
        });
      }
      return null;
    };

    const renderPDFs = () => {
      if (Array.isArray(pdfs)) {
        return pdfs.map((item) => {
          if (item.pdf) {
            return (
              <div key={item.titlePDF}>
                <h2 className="text-center" style={{ margin: "2em ", borderTop: "1px solid #ccc" }}>
                  {item.titlePDF}
                </h2>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe title={item.titlePDF} className="embed-responsive-item" src={item.pdf} allowFullScreen></iframe>
                </div>
              </div>
            );
          }
          return null;
        });
      }
      return null;
    };

    return (
      <Modal
        {...this.props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        fullscreen
        dialogClassName="modal-fullscreen"
      >
        <span onClick={this.props.onHide} className="modal-close">
          <i className="fas fa-times fa-3x close-icon"></i>
        </span>
       
        <div className="col-md-12">

          <div className="col-md-10 mx-auto">
          <div className="modal-close">
 
              </div>
            <Modal.Header>
              <div>
                <div className="git-icon">
                        {url && (
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            
                            
                          >
                            <i class='fab fa-github fa-spin fa-3x'></i>
                          </a>
                        )}
                </div>
                <Modal.Title>
                  <div className="large-font">
                    {title}
                  </div>
                </Modal.Title>
              </div>
            </Modal.Header>
            
            <Modal.Body className="modal-body">
              {renderText()}
              {renderVideos()}
              {renderImages()}
              {renderPDFs()}
            </Modal.Body>
            <p className="modal-description"></p>
            <div className="col-md-12 text-center">
              <ul className="list-inline mx-auto"></ul>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default ProjectDetailsModal;

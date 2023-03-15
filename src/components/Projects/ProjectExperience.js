import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class ProjectExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  render() {
    const { tag, title, text, images, videos, url, technologies } = this.props;

    
    const tech = technologies.map((item, i) => {
      if (item.name) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center">
                <i className={item.class} style={{ fontSize: "300%" }}>
                  <p className="text-center" style={{ fontSize: "30%" }}>
                    {item.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      } else {
        return null; // retorna null caso item.video esteja vazio
      }
      });
    

  

  const video = videos.map((item, i) => {
    if (item.video) { // verifica se item.video tem um valor
      return (
        <div className="embed-responsive embed-responsive-16by9" key={i}>
          <h2 className="text-center" style={{ borderTop: "1px solid #ccc" }}>
            {item.titleVideo}
          </h2>
          <iframe title={item.titleVideo} className="embed-responsive-item" src={item.video} allowFullScreen></iframe>
        </div>
      )
    } else {
      return null; // retorna null caso item.video esteja vazio
    }
  });

  const img = images.map((item, i) => {
    if (item.image) {
      return (
        <div>
  <h2 className="text-center" style={{ borderTop: "1px solid #ccc", margin: "2em " }}>
    {item.titleImage}
  </h2>
  <Image key={i} src={item.image} fluid style={{ maxWidth: "100%", }} />
</div>

    
      );
    } else {
      return null; // retorna null caso item.video esteja vazio
    }   
      });
    

    const renderedText = text.map((item, i) => {
    if (!item.hasOwnProperty('content')) {
      return null;
    }

      return (
        <div key={i}>
          <Modal.Title className="modal-topic">{item.topic}</Modal.Title>
          {item.content
            .split(";")
            .map((paragraph, j) => (
              <p key={j}>{paragraph.trim()}</p>
            ))}
        </div>
      );
    });

    return (
      <div className="mr-2 mb-2">
        <Button onClick={() => this.setState({ show: true })}>{tag}</Button>
        <Modal
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
          size="xl"
          fullscreen
        >
          <div className="modal-content">
            <Modal.Header closeButton>
              <Modal.Title className="modal-title">{title}</Modal.Title>
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-href"
                >
                  <i
                    className="fas fa-external-link-alt"
                    style={{ marginLeft: "20px" }}
                  ></i>
                </a>
              ) : null}
            </Modal.Header>

            <Modal.Body className="modal-body">
              {renderedText}

              {img  ? (
                <div  style={{ paddingBottom: "50px" }}>
                  {img}
                </div>
              ) : null}
                            
              {video  ? (
                <div  style={{ paddingBottom: "100px" }}>
                  {video}
                </div>
              ) : null}
              
              
            </Modal.Body>
            <div className="col-md-12 text-center">
              <ul className="list-inline mx-auto">{tech}</ul>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

ProjectExperience.propTypes = {
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.arrayOf(
    PropTypes.shape({
      topic: PropTypes.string.isRequired,
      content: PropTypes.string,
    }).isRequired
  ).isRequired,

  images: PropTypes.arrayOf(PropTypes.string),
  videos: PropTypes.string,
  url: PropTypes.string,
  
  technologies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      class: PropTypes.string.isRequired,
    })
  ),
};

export default ProjectExperience;

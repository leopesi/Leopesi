import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class TaxiProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  render() {
    const { tag, title, text } = this.props;
  
    return (
      <div className="mr-2 mb-2">
        <Button onClick={() => this.setState({ show: true })}>{tag}</Button>
        <Modal 
  size="xl"
  show={this.state.show} 
  fullscreen onHide={() => this.setState({ show: false })}
  >
  <div className="modal-content">
    <Modal.Header closeButton>
      <Modal.Title className="modal-title">{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body className="modal-body">
      {text.map((item, i) => (
        <div key={i}>
          <Modal.Title className="modal-topic">{item.topic}</Modal.Title>
          {item.content.split(';').map((paragraph, j) => (
            <p key={j}>{paragraph.trim()}</p>
          ))}
        </div>
      ))}
    </Modal.Body>

  </div>
</Modal>


      </div>
    );
    
  }
}

TaxiProject.propTypes = {
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.arrayOf(
    PropTypes.shape({
      topic: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default TaxiProject;

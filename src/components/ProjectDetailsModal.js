import React, { Component } from "react";
import { Modal, Image } from 'react-bootstrap';

class ProjectDetailsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showImageModal: false,
      selectedImage: null
    };
  }

  // Função para abrir o modal com a imagem clicada
  handleImageClick = (image) => {
    this.setState({
      showImageModal: true,
      selectedImage: image
    });
  };

  // Função para fechar o modal de imagem
  handleCloseImageModal = () => {
    this.setState({
      showImageModal: false,
      selectedImage: null
    });
  };

  render() {
    const { title, url, text, videos, images, pdfs } = this.props.data;
    const { showImageModal, selectedImage } = this.state;

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
                {/* Adicionando onClick para abrir o modal de imagem */}
                <Image 
                  src={item.image} 
                  fluid 
                  style={{ maxWidth: "100%", cursor: "pointer" }} 
                  onClick={() => this.handleImageClick(item.image)}
                />
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
      <>
        <Modal
          {...this.props}
          size="lg"
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
              <Modal.Header>
                <div>
                  <div className="git-icon">
                    {url && (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className='fab fa-github fa-spin fa-3x'></i>
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
            </div>
          </div>
        </Modal>


        <Modal 
          show={showImageModal} 
          onHide={this.handleCloseImageModal} 
          centered 
          dialogClassName="image-modal" // Personalização via classe CSS
          size="lg" // Definir tamanho grande
        >
          {/* Ícone de fechar posicionado no canto superior direito */}
          <span 
            onClick={this.handleCloseImageModal} 
            style={{

              right: '10px',
              cursor: 'pointer',

            }}
          >
            <i className="fas fa-times fa-2x"></i>
          </span>

          {/* Ajuste no Modal.Body */}
          <Modal.Body 
            style={{
              padding: 0, 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              overflow: 'hidden', // Remove rolagem extra no modal
              maxHeight: '100vh' // Limita a altura máxima ao tamanho da viewport
            }}
          >
            {/* Aumentar o tamanho da imagem, mas garantir que não ultrapasse a tela */}
            <Image 
              src={selectedImage} 
              style={{ 
                width: '100%', // A imagem ocupa toda a largura do modal
                height: 'auto', // A altura é ajustada automaticamente para manter a proporção
                maxHeight: '100vh' // A altura máxima é o tamanho da viewport
              }} 
            />
          </Modal.Body>
</Modal>




      </>
    );
  }
}

export default ProjectDetailsModal;

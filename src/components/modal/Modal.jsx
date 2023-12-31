import React, { Component } from "react";
import css from './Modal.module.css';

class Modal extends Component {
  handleClickOnOverlay = (e) => {
    const { handleCLoseModal } = this.props;
    const { className } = e.target;

    if (className.includes("overlay")) {
      handleCLoseModal();
    }
  };

  render() {
    const { handleClickOnOverlay, props } = this;
    const { largeImageURL, tags } = props;

    return (
      <div className={css.Overlay} onClick={handleClickOnOverlay}>
        <div className={css.Modal}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}



export default Modal;

import React, { Component } from "react";
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    const { id, webformatURL, tags, handleOpenModal } = this.props;

    return (
      <li className={css.ImageGalleryItem} onClick={() => handleOpenModal(id)}>
        <img
          className={css.ImageGalleryItemImage}
          src={webformatURL}
          alt={tags}
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;

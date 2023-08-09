import React, { Component } from "react";
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/imagegalleryitem/ImageGalleryItem';
import css from './ImageGallery.module.css';

class ImageGallery extends Component {
  render() {
    const { images, handleOpenModal } = this.props;

    return (
      <ul className={css.ImageGallery}>
        {images.map(({ id, webformatURL, tags }) => (
          <ImageGalleryItem
            key={id}
            id={id}
            webformatURL={webformatURL}
            tags={tags}
            handleOpenModal={handleOpenModal}
          />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleOpenModal: PropTypes.func.isRequired,
};

export default ImageGallery;

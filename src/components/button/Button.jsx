import React, { Component } from "react";
import PropTypes from 'prop-types';
import css from './Button.module.css';

class Button extends Component {
  handleOneMorePage = () => {
    const { loadMoreImages, pageNumber } = this.props;

    const updatedPageNumber = pageNumber + 1;

    loadMoreImages(updatedPageNumber);
  };

  render() {
    const { handleOneMorePage } = this;

    return (
      <button className={css.Button} type="button" onClick={handleOneMorePage}>
        Load More
      </button>
    );
  }
}

export default Button;
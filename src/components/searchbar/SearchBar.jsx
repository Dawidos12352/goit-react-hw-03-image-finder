import React, { Component } from "react";
import css from './SearchBar.module.css';

class Searchbar extends Component {
  state = {
    requestedImages: "",
  };

  handleInputValue = (e) => {
    const { value } = e.target;

    this.setState({ requestedImages: value });
  };

  handleFetchImages = (e) => {
    e.preventDefault();

    const { requestedImages } = this.state;
    const { fetchImages, resetImagesArray } = this.props;

    resetImagesArray();

    const resetedPageNumber = 1;

    fetchImages(requestedImages, resetedPageNumber);

    this.setState({ requestedImages: "" });
  };

  render() {
    const { state, handleInputValue, handleFetchImages } = this;
    const { requestedImages } = state;

    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={handleFetchImages}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={requestedImages}
            onChange={handleInputValue}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

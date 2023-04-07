import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from '../Modal/Modal';

// import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    modalIsOpen: false,
    largeImageURL: '',
  };

  onClickImage = e => {
    this.setState({ largeImageURL: e.currentTarget.id, modalIsOpen: true });
  };
  onClose = modalIsOpen => {
    this.setState({ modalIsOpen });
  };

  render() {
    const { images } = this.props;
    const { largeImageURL } = this.state;
    return (
      <>
        <ul className={css.imageGallery}>
          {images.hits.map(img => {
            const { id, webformatURL, largeImageURL } = img;
            return (
              <li key={id} className={css.imageGalleryItem}>
                <img
                  id={largeImageURL}
                  onClick={this.onClickImage}
                  className={css.imageGalleryItem_image}
                  src={webformatURL}
                  alt=""
                ></img>
              </li>
            );
          })}
        </ul>
        {this.state.modalIsOpen && (
          <Modal largeImageURL={largeImageURL} modalIsOpen={this.onClose} />
        )}
      </>
    );
  }
}

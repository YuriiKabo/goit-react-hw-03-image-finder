import { Component } from 'react';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';
import { Button } from '../Button/Button';
// import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  state = {
    images: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.request !== this.props.request) {
      this.setState({ status: 'pending' });
      fetch(
        `https://pixabay.com/api/?q=${this.props.request}&page=1&key=35100537-1d0c28a954e9bd50abce0836f&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => {
          return res.json();
        })
        .then(imageArray => {
          if (imageArray.hits.length !== 0) {
            return imageArray;
          }
          return Promise.reject(
            new Error(`Нема світлин по запиту "${this.props.request}"`)
          );
        })
        .then(images => this.setState({ images, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }
  render() {
    const { images, error, status } = this.state;
    if (status === 'idle') {
      return <h1 className={css.messageTitle}>Enter Request</h1>;
    }
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <h1 className={css.messageTitle}>{error.message}</h1>;
    }

    if (status === 'resolved') {
      return (
        <>
          <ul className={css.imageGallery}>
            {images &&
              images.hits.map(img => {
                const { id, webformatURL, largeImageURL } = img;
                return (
                  <ImageGalleryItem
                    key={id}
                    webImg={webformatURL}
                    largeImg={largeImageURL}
                  />
                );
              })}
          </ul>
          <Button />
        </>
      );
    }
  }
}

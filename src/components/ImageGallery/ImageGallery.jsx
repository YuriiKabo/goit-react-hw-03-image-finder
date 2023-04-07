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
    // isModal: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const API_KEY = '35100537-1d0c28a954e9bd50abce0836f';
    const URL = 'https://pixabay.com/api';
    const PER_PAGE = 'per_page=12';
    if (prevProps.request !== this.props.request) {
      this.setState({ status: 'pending' });
      fetch(
        `${URL}/?q=${this.props.request}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&${PER_PAGE}`
      )
        .then(res => {
          return res.json();
        })
        .then(imageArray => {
          if (imageArray.hits.length) {
            return imageArray;
          }
          return Promise.reject(
            new Error(`No pictures on request "${this.props.request}"`)
          );
        })
        .then(images => this.setState({ images, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { images, error, status } = this.state;
    if (status === 'idle') {
      return <h1 className={css.messageTitle}>⬆️ Enter Request ⬆️</h1>;
    }
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <h1 className={css.messageTitle}>{error.message}</h1>;
    }

    if (status === 'resolved') {
      // const { isModal } = this.state;
      return (
        <>
          <ImageGalleryItem images={images} />
          <Button />
        </>
      );
    }
  }
}

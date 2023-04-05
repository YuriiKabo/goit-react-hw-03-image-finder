import css from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
// import PropTypes from 'prop-types';

export const ImageGallery = ({ images }) => {
  return (
    <ul className={css.imageGallery}>
      {images.map(img => {
        const { id, webformatURL, largeImageURL } = img;
        return (
          <ImageGalleryItem
            key={id}
            webImg={webformatURL}
            largeImg={largeImageURL}
          ></ImageGalleryItem>
        );
      })}
    </ul>
  );
};

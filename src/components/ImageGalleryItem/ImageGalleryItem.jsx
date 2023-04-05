import css from './ImageGalleryItem.module.css';
// import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ webImg }) => {
  return (
    <li className={css.imageGalleryItem}>
      <img className={css.imageGalleryItem_image} src={webImg} alt=""></img>
    </li>
  );
};

import css from './Modal.module.css';
// import PropTypes from 'prop-types';

export const Modal = ({ webImg }) => {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <img src="" alt="" />
      </div>
    </div>
  );
};

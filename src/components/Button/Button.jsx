import css from './Button.module.css';
// import PropTypes from 'prop-types';

export const Button = ({ webImg }) => {
  return (
    <button className={css.button} type="button">
      Load more
    </button>
  );
};

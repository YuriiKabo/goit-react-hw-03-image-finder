import { Component } from 'react';
import css from './Modal.module.css';
export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyESC);
    window.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyESC);
    window.removeEventListener('click', this.handleClick);
  }

  handleClick = e => {
    if (e.target.nodeName === 'DIV') {
      this.props.modalIsOpen(false);
    }
  };

  handleKeyESC = e => {
    if (e.key === 'Escape') {
      this.props.modalIsOpen(false);
    }
  };

  render() {
    const URL_IMG = this.props.largeImageURL;
    const { title } = this.props;
    return (
      <div className={css.overlay}>
        <div className={css.modal}>
          <img src={URL_IMG} alt={title} />
        </div>
      </div>
    );
  }
}

// Modal.propTypes = {
//   largeImage: PropTypes.string.isRequired,
//   closeModal: PropTypes.func.isRequired,
// };

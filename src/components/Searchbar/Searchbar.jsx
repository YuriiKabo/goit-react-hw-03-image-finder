import { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    search: '',
  };

  onChange = ({ target }) => {
    this.setState({ search: target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onSubmit}>
          <button type="submit" className="SearchForm-button">
            <AiOutlineSearch className="searchForm_button_icon" />
          </button>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onChange}
          />
        </form>
      </header>
    );
  }
}

export { Searchbar };
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

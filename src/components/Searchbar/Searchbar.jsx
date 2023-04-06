import { Component } from 'react';
import css from './Searchbar.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineSearch } from 'react-icons/ai';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  handleSearchChange = e => {
    this.setState({ search: e.currentTarget.value.toLowerCase() });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    if (this.state.search.trim() === '') {
      return toast.error('Enter request');
    }

    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
    e.currentTarget.reset();
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handleFormSubmit}>
          <button type="submit" className={css.searchForm_button}>
            <AiOutlineSearch className={css.searchForm_button_icon} />
          </button>

          <input
            onChange={this.handleSearchChange}
            className={css.searchForm_input}
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

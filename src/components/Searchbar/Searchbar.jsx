import { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {};

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form}>
          <button type="submit" className="button">
            <span className={css.button_label}>Search</span>
          </button>

          <input
            className={css.input}
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

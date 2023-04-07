import { Component } from 'react';
import css from './App.module.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

import { ToastContainer } from 'react-toastify';

export class App extends Component {
  state = {
    request: '',
  };

  handleFormSubmit = request => this.setState({ request });
  render() {
    const { request } = this.state;
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery request={request} />
        <ToastContainer position="top-left" autoClose={3000} />
      </div>
    );
  }
}

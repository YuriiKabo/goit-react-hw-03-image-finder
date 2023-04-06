import { Component } from 'react';
import css from './App.module.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
// import { Modal } from './Modal/Modal';

import { ToastContainer } from 'react-toastify';

export class App extends Component {
  state = {
    request: '',
  };

  componentDidMount() {}

  handleFormSubmit = request => this.setState({ request });
  render() {
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ImageGallery request={this.state.request} />
        <ToastContainer position="top-left" autoClose={3000} />

        {/* <Modal></Modal> */}
      </div>
    );
  }
}

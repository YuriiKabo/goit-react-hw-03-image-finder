import { Component } from 'react';
import css from './App.module.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
// import { ToastContainer } from 'react-toastify';

export class App extends Component {
  state = {
    images: null,
  };
  componentDidMount() {
    fetch(
      'https://pixabay.com/api/?q=cat&page=1&key=35100537-1d0c28a954e9bd50abce0836f&image_type=photo&orientation=horizontal&per_page=12'
    )
      .then(res => res.json())
      .then(images => this.setState({ images }));
  }
  render() {
    return (
      <div className={css.app}>
        <Searchbar></Searchbar>
        {this.state.images && (
          <ImageGallery images={this.state.images.hits}></ImageGallery>
        )}
      </div>
    );
  }
}

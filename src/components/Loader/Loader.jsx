import { ColorRing } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    // <h1 className={css.loader}>Load...</h1>
    <div className={css.loader}>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5']}
      />
    </div>
  );
}

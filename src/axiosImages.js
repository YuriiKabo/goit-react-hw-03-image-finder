import axios from 'axios';

const key = `35100537-1d0c28a954e9bd50abce0836f`;
const parameters = `?key=${key}&image_type=photo&orientation=horizontal&per_page=12`;
axios.defaults.baseURL = 'https://pixabay.com/api/';

const getImages = (searchValue, page = 1) => {
  const response = axios
    .get(`${parameters}&q=${searchValue}&page=${page}`)
    .then(({ data }) => {
      return data.hits;
    });
  return response;
};

export { getImages };

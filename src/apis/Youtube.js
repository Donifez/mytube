import axios from 'axios';

const KEY = 'AIzaSyDC9bEIKpEte1oX8-gXih5BfQ4bohmJjWI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});

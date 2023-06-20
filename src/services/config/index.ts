import axios from 'axios';
import md5 from 'md5';
import { API_URL, PUBLIC_KEY, PRIVATE_KEY, TS } from '../../constants';

const apiService = axios.create({
  baseURL: API_URL,
});

apiService.interceptors.request.use(
  (request) => {
    const params = {
      apikey: PUBLIC_KEY,
      ts: TS,
      hash: md5(`${TS}${PRIVATE_KEY}${PUBLIC_KEY}`),
    };

    return { ...request, params };
  },
  (err) => Promise.reject(err)
);

apiService.interceptors.response.use(
  (response) => response.data,
  (err) => {
    return Promise.reject(err.response);
  }
);

export default apiService;

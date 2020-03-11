import axios from 'axios';

const clientAxios = axios.create({
  baseURL: 'http://5e681527d426c00016b7cbf3.mockapi.io'
});

export default clientAxios;

import axios from 'axios';

const instance = axios.create({
  baseURL: "https://urvar-clone.herokuapp.com"
});

export default instance;
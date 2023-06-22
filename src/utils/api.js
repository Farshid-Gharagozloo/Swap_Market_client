import axios from 'axios';
// import {REACT_APP_API_URL} from '../../.env'; 


export const DEFAULT_API_KEY = process.env.REACT_APP_API_KEY || 'ThisIsAFallbackApiKey';
axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

axios.defaults.params = {
  api_key: DEFAULT_API_KEY,
};

export const addUser = (userInformation) => axios.post('/profile/signup',userInformation);

export const getToken = (userPass) => axios.post('/profile/login', userPass);
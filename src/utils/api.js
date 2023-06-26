import axios from 'axios';

// export const DEFAULT_API_KEY = process.env.REACT_APP_API_KEY || 'ThisIsAFallbackApiKey';
axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

// axios.defaults.params = {
//   api_key: DEFAULT_API_KEY,
// };

const userToken = { headers: {
  Authorization: `Bearer ${sessionStorage.authToken}`,
}, };

const uploadImg ={headers: {
  "Content-Type": "multipart/form-data",
  Authorization: `Bearer ${sessionStorage.authToken}`,
},};

// if (!userToken ){
//   return (<h1>loading user...</h1>);
// }

export const addUser = (userInformation) => axios.post('/profile/signup',userInformation);

export const getToken = (userPass) => axios.post('/profile/login', userPass);

export const addNewProduct = (newItem) => axios.post('/product/add', newItem, uploadImg);

export const getUser = (id, userloginToken) => axios.get(`/profile/${id}`,userloginToken);

export const getUserItemList = (id, userloginToken) => axios.get(`/list/user/${id}`, userloginToken);

export const getCategoryList = () => axios.get('/product/categorylist');

export const editProductItem = (id, editItem) => axios.put(`/product/${id}`,editItem, uploadImg);

export const getProductItem = (id) => axios.get(`/product/${id}`);

export const editUserProfile = (id, userInfo) => axios.put(`/profile/${id}`, userInfo, userToken);

export const getProductList = () => axios.get('/list');
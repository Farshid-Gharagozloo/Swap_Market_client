import axios from 'axios';

// export const DEFAULT_API_KEY = process.env.REACT_APP_API_KEY || 'ThisIsAFallbackApiKey';
axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:8080';



export const addUser = (userInformation) => axios.post('/profile/signup',userInformation);

export const getToken = (userPass) => axios.post('/profile/login', userPass);

export const addNewProduct = (newItem, uploadImg) => axios.post('/product/add', newItem, uploadImg);

export const getUser = (id, userloginToken) => axios.get(`/profile/${id}`,userloginToken);

export const getUserItemList = (id, userloginToken) => axios.get(`/list/user/${id}`, userloginToken);

export const getCategoryList = () => axios.get('/product/categorylist');

export const editProductItem = (id, editItem, uploadImg) => axios.put(`/product/${id}`,editItem, uploadImg);

export const getProductItem = (id) => axios.get(`/product/${id}`);

export const editUserProfile = (id, userInfo, userloginToken) => axios.put(`/profile/${id}`, userInfo, userloginToken);

export const getProductList = () => axios.get('/list');

export const deleteProduct = (id) => axios.delete(`/product/${id}`);

export const getListByCategory = (category, id) => axios.get(`/list/category/${category}/${id}`);

export const getListByUsername = (username, id) => axios.get(`/list/username/${username}/${id}`);


export const getItemMessages = (id, user) => axios.get(`/message/${user}/${id}`); 

export const sendMessageToUser = (id, user, message) => axios.post(`/message/${user}/${id}`, message);

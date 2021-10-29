import axios from 'axios';
import LLLConfig from '../apiKeys';

const dbURL = LLLConfig.baseUrl;

const getCategories = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/categories`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getSingleCategory = (categoryId) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/categories/${categoryId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const addCategory = (typeName) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/api/categories`, typeName)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const updateCategory = (categoryId, categoryObj) => new Promise((resolve, reject) => {
  axios.put(`${dbURL}/api/categories/${categoryId}`, categoryObj)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const deleteCategory = (categoryId) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/api/categories/${categoryId}`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export {
  getCategories,
  getSingleCategory,
  addCategory,
  updateCategory,
  deleteCategory
};

import axios from "axios";

const PIXABAY_API_KEY = '48326297-b9ec83e241adf6514f2254162';
// const BASE_URL = 'https://pixabay.com/api/';

axios.defaults.baseURL = `https://pixabay.com/api/`;

export const fetchImages = (searchedValue, perPage, currentPage) => {
  const axiosParams = {
    params:{
    key: PIXABAY_API_KEY,
    q: searchedValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: perPage,
  }};
  return axios.get(`` , axiosParams)
};
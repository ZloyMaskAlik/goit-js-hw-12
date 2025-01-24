const PIXABAY_API_KEY = '48326297-b9ec83e241adf6514f2254162';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = searchedQuery => {
  const pixabayParams = new URLSearchParams({
    key: PIXABAY_API_KEY,
    q: searchedQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: false,
    per_page: 33,
  });
    return fetch(`${BASE_URL}?${pixabayParams.toString()}`)
    .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
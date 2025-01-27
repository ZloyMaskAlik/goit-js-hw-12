import SimpleLightbox from "simplelightbox";
import iziToast from "izitoast";

import { fetchImages } from "./js/pixabay-api";
import { createImageTemplate } from "./js/render-functions";

let lightbox = new SimpleLightbox(`.js-images a`, { captionsData: `alt`, captionDelay: 250 });
let currentPage = 1;
const perPage = 15;
let searchedValue = '';

const searchFormEl = document.querySelector (`.js-search-form`)
const galleryImages = document.querySelector(`.js-images`);
const loaderIcon = document.querySelector('.loader');
const loadButtonEl = document.querySelector('.js-load-more');

const toggleLoader = () => {
  loaderIcon.classList.toggle('is-hidden');
};

const hideLoadButton = () => {
  loadButtonEl.classList.add('is-hidden');
};

const showLoadButton = () => {
  loadButtonEl.classList.remove('is-hidden');
};

const smoothScrollByHeight = () => {
  const galleryCard = document.querySelector('.js-images .js-item-card');
  if (galleryCard) {
    const cardHeight = galleryCard.getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 3.0,
      behavior: 'smooth',
    });
  }
};

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();
    searchedValue = event.currentTarget.elements.query.value.trim();
    if (searchedValue === ``) {
      iziToast.info({
        message:
          'Sorry, field must be filled in. Please try again!',
        position: 'topRight',
        messageSize: '16',
        messageColor: 'rgba(255,255,255, 1)',
        backgroundColor: `rgba(51,109,255, 1)`,
      });
        return;
    }

    galleryImages.innerHTML = '';
    toggleLoader();
    hideLoadButton();
    currentPage = 1;
 
    const { data } = await fetchImages(searchedValue,perPage, currentPage);
       
    if (data.hits.length === 0) {
      iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          backgroundColor: `rgba(255,107,10, 1)`,
          messageSize: '16',
          messageColor: 'rgba(255,255,255, 1)',
          position: 'topRight',
         });
      toggleLoader();
      searchFormEl.reset()
      return;
    }
    
        const createTemplate = data.hits.map( item => createImageTemplate(item)).join(``);
        galleryImages.innerHTML = createTemplate;
        
    if (data.totalHits > 15) {
      showLoadButton();
      loadButtonEl.addEventListener('click', onLoadButtonClick);
    }
    
        lightbox.refresh();
        searchFormEl.reset()
       
    
  } catch (err) {
   
      console.log(error);
      iziToast.error({
        message: `${error}`,
        position: 'topRight',
      });
     toggleLoader();
    }
  
  toggleLoader();
}

const onLoadButtonClick = async () => {
  try {
    currentPage ++;
    hideLoadButton();
    toggleLoader();

    const { data } = await fetchImages(searchedValue, perPage, currentPage);
   
    const createTemplate = data.hits.map(item => createImageTemplate(item)).join('');

    galleryImages.insertAdjacentHTML('beforeend', createTemplate);

    smoothScrollByHeight();
    lightbox.refresh();

    const totalPages = Math.ceil(data.totalHits / perPage);
    if (currentPage < totalPages) {
      showLoadButton();
    } else {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        messageSize: '16',
        messageColor: 'rgba(255,255,255, 1)',
        backgroundColor: `rgba(51,109,255, 1)`,
      });
    }
  } catch (error) {
    console.log(error);
    showError(`${error}`);
  } finally {
    toggleLoader();
  }
};

searchFormEl.addEventListener(`submit`, onSearchFormSubmit);



import SimpleLightbox from "simplelightbox";
import iziToast from "izitoast";

import { fetchImages } from "./js/pixabay-api";
import { createImageTemplate } from "./js/render-functions";

let lightbox = new SimpleLightbox(`.js-images a`, { captionsData: `alt`, captionDelay: 250 });

const searchFormEl = document.querySelector (`.js-search-form`)
const galleryImages = document.querySelector(`.js-images`);
const loaderIcon = document.querySelector('.loader');

const toggleLoader = () => {
  loaderIcon.classList.toggle('is-hidden');
};


const onSearchFormSubmit = event => {
    event.preventDefault();
    const searchedQuery = event.currentTarget.elements.query.value.trim();
    if (searchedQuery === ``) {
        return;
    }

    galleryImages.innerHTML = '';

     toggleLoader();

    fetchImages(searchedQuery)
    
    .then(data => {
        
      toggleLoader();

      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
        const createImagesTemplate = data.hits.map( item => createImageTemplate(item)).join(``);
        galleryImages.innerHTML = createImagesTemplate;
        
        lightbox.refresh();
        searchFormEl.reset();
    })
    
    .catch(error => {
      toggleLoader();
      console.log(error);
      iziToast.error({
        message: `${error}`,
        position: 'topRight',
      });
});
}

searchFormEl.addEventListener(`submit`, onSearchFormSubmit);


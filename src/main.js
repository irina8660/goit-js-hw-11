import { getAllPhotos } from './js/pixabay-api.js';
import { markupRender } from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.image-container a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const refs = {
  searchForm: document.querySelector('.search-form'),
  loader: document.querySelector('.loader-wrap'),
  gallery: document.querySelector('.gallery'),
};

refs.searchForm.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(evt) {
  evt.preventDefault();
  refs.gallery.innerHTML = '';
  refs.loader.classList.remove('disabled');

  const searchRequest = evt.target.elements.search.value.trim();

  if (searchRequest === '') {
    refs.loader.classList.add('disabled');
    return iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
      maxWidth: '432px',
    });
  }

  getAllPhotos(searchRequest)
    .then(photos => {
      if (photos.length === 0) {
        refs.loader.classList.add('disabled');
        return iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          maxWidth: '432px',
        });
      }

      refs.loader.classList.add('disabled');
      markupRender(photos);
      lightbox.refresh();
    })
    .catch(() => {
      console.error('Error fetching data from Pixabay API');
      refs.loader.classList.add('disabled');
    });

  refs.searchForm.reset();
}

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { UnsplashAPI } from './api/const';
import markupPhoto from './markupImage';
import ref from './ref';

const unsplashAPI = new UnsplashAPI();

function searchPhoto(event) {
  event.preventDefault();
  const inputValue = event.currentTarget.elements.input.value;
  if (!inputValue) return;
  unsplashAPI.query = inputValue;
  ref.gallery.replaceChildren();

  ref.loadMoreEl.classList.add('is-hidden');

  unsplashAPI
    .fetchPhoto()
    .then(data => {
      if (data.total > 0) {
        ref.loadMoreEl.classList.remove('is-hidden');
        ref.gallery.insertAdjacentHTML('beforeend', markupPhoto(data));
      } else {
        Notify.failure(
          'Sorry, there are no images matching your search query. Please try again'
        );
        event.target.reset();
      }
    })
    .catch(console.log);
}

export default searchPhoto;

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);





const markup = galleryItems.map(item=> `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`).join('')

const galleryRef = document.querySelector('.gallery')


galleryRef.insertAdjacentHTML('afterbegin', markup);

const lightbox = new SimpleLightbox('.gallery a', {captionsData:"alt", captionDelay:250});


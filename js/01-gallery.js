import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const markup = galleryItems.map(item => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`).join('')

const galleryRef = document.querySelector('.gallery')


galleryRef.insertAdjacentHTML('afterbegin', markup);



galleryRef.addEventListener('click', onGalleryClick)
    
function onGalleryClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return
    }
    function closeModal(event) {
        
        if (event.code === "Escape") {
            modal.close();
        }
        
    }
const modal = basicLightbox.create(`
	<img src="${event.target.dataset.source}">
`, {
    onShow: modal => {
        window.addEventListener('keydown', closeModal)

    },
    onClose: modal => {
        window.removeEventListener('keydown', closeModal)

    }
})
    modal.show();
}
    

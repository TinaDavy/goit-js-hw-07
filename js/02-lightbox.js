import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");

function createMarkup(arr){
    const makrkup = arr.map(({preview, original, description}) => `<li class="gallery__item">
    <a class="gallery__link" href="${original}" rel="noopener noreferrer">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`);
    list.insertAdjacentHTML("beforeend", makrkup.join(""));
};

createMarkup(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250, captionPosition: "bottom"});


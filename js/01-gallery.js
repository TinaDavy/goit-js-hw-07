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

list.addEventListener("click", handleClick);
function handleClick(event){
    if(event.target === event.currentTarget){
        return;
    };

    event.preventDefault();

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`, {onShow:(instance) => {list.removeEventListener("click", handleClick)},
onClose: (instance) => {document.removeEventListener("keydown", handleKeyDown)}});

instance.show();

document.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event){
  if (event.key === 'Escape') {
    instance.close();
  }
};

};

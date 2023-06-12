import { galleryItems } from "./gallery-items.js";
// Change code below this line
const basicLightbox = require("basiclightbox");
import * as basicLightbox from "basiclightbox";
const gallery = galleryItems
  .map(
    (galleryItem) =>
      `<li><div class="gallery__item"><a class="gallery__link" href="${galleryItem.original}"><img class="gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}"/></a></div></li>`
  )
  .join("");
const pageGallery = document.querySelector(".gallery");
pageGallery.insertAdjacentHTML("beforeend", gallery);

pageGallery.addEventListener("click", selectImage);
function selectImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
}

const instance = basicLightbox.create(`
    <div class="gallery__item">
    <a class="gallery__link" href="${galleryItem.original}"><img class="gallery__image" src="${galleryItem.original}" data-source="${galleryItem.original}" alt="${galleryItem.description}"/></a>
    </div>
`);

instance.show();
const visible = instance.visible();
console.log(galleryItems);

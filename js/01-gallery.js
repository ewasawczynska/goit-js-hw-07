import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = galleryItems
  .map(
    (galleryItem) =>
      `<li><div class="gallery__item"><a class="gallery__link" href="${galleryItem.original}"><img class="gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}"/></a></div></li>`
  )
  .join("");
const pageGallery = document.querySelector(".gallery");
pageGallery.insertAdjacentHTML("beforeend", gallery);
console.log(galleryItems);

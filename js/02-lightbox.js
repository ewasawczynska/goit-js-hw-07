import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const pageGallery = document.querySelector(".gallery");

const gallery = galleryItems
  .map(
    (galleryItem) =>
      `<li class = "gallery__item"><a class = "gallery__link" href="${galleryItem.original}"><img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}"/></a></li>`
  )
  .join("");

pageGallery.insertAdjacentHTML("beforeend", gallery);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

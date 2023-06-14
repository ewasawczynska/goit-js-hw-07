import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);
const pageGallery = document.querySelector(".gallery");

const gallery = galleryItems
  .map(
    (galleryItem) =>
      `<div class="gallery__item"><a class="gallery__link" href="${galleryItem.original}"><img class="gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}"/></a></div>`
  )
  .join("");

pageGallery.insertAdjacentHTML("beforeend", gallery);

pageGallery.addEventListener("click", (e) => {
  e.preventDefault();
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}">`,
    {
      onClose: (instance) => {
        document.addEventListener("keydown", escapeFunc);
      },
    }
  );
  instance.show();
  const escapeFunc = (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  };
});

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
  if (e.target.nodeName !== "IMG") return;

  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}">`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", (e) => {
          if (e.key === "Escape") instance.close();
        });
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", (e) => {
          if (e.key === "Escape") instance.close();
        });
      },
    }
  );

  instance.show();
});

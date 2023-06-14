import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

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
    <a class="gallery__link" href="${galleryItems.original}"><img class="gallery__image" src="${galleryItems.original}" data-source="${galleryItems.original}" alt="${galleryItems.description}"/></a>
    </div>
`);

instance.show();
const visible = instance.visible();

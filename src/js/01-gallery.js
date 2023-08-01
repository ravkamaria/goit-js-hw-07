import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
    )
    .join("");
}

gallery.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

gallery.addEventListener("click", handlerClick);

function handlerClick(evt) {
  evt.preventDefault();
  let currentImageLink = evt.target.dataset.source;
  const instance = basicLightbox.create(`<img
        class="gallery__image"
        src="${currentImageLink}"
      />`);
  instance.show();
  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}

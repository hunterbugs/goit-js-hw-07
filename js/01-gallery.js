import { galleryItems } from "./gallery-items.js";
//import * as basicLightbox from "basiclightbox";
// Change code below this line

document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");

  // Function to create a gallery item
  function createGalleryItem(item) {
    const li = document.createElement("li");
    li.classList.add("gallery__item");

    const link = document.createElement("a");
    link.classList.add("gallery__link");
    link.setAttribute("href", item.original);

    const img = document.createElement("img");
    img.classList.add("gallery__image");
    img.setAttribute("src", item.preview);
    img.setAttribute("data-source", item.original);
    img.setAttribute("alt", item.description);

    link.appendChild(img);
    li.appendChild(link);
    gallery.appendChild(li);
  }

  // Render gallery items
  galleryItems.forEach((item) => {
    createGalleryItem(item);
  });

  // Open modal on image click
  const images = document.querySelectorAll(".gallery__image");
  images.forEach((image) => {
    image.addEventListener("click", (event) => {
      event.preventDefault();
      const source = image.dataset.source;
      const lightbox = basicLightbox.create(`<img src="${source}" alt="" />`);

      lightbox.show();

      // const modal = document.createElement("div");
      // modal.classList.add("modal");
      //  modal.innerHTML = `
      //   <div class="modal-content">
      //     <span class="close">&times;</span>
      //     <img src="${source}" alt="" />
      //   </div>
      // `;
      //  document.body.appendChild(modal);

      // const closeButton = modal.querySelector(".close");
      //  closeButton.addEventListener("click", () => {
      //    document.body.removeChild(modal);
      //  });

      // Close modal on Escape key press
      function closeLightbox(event) {
        if (event.key === "Escape") {
          lightbox.close();
          document.removeEventListener("keydown", closeLightbox);
        }
      }

      document.addEventListener("keydown", closeLightbox);
    });
  });
});

//console.log(galleryItems);

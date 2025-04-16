import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

import { galleryItems } from './gallery-items';

const lightbox = GLightbox({ selector: '.glightbox' });

let gallery = document.querySelector('.gallery');

function createMarkup() {
    let markup = '';
    galleryItems.forEach(({ preview, original, description }) => {
        const content = /* html */ `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
      </a>
      </li>`;
        markup += content;
    });
    gallery.insertAdjacentHTML('beforeend', markup);
}
createMarkup();

import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

import { galleryItems } from './gallery-items';

let gallery = document.querySelector('.gallery');

function createGalleryItem({ preview, original, description }) {
    return /* html */ `<li class="gallery__item">
    <a class="gallery__link glightbox" href="${original}">
        <img
            class="gallery__image"
            src="${original}" 
            data-source="${original}"
            alt="${description}"
        />
    </a>
    </li>`;
}

function createMarkup() {
    const markup = galleryItems.map(createGalleryItem).join('');
    gallery.insertAdjacentHTML('beforeend', markup);
}
createMarkup();

const lightbox = GLightbox({
    selector: '.glightbox',
    loop: true,
    openEffect: 'zoom',
});

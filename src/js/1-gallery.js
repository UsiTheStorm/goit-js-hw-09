import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

import { galleryItems } from './gallery-items';

let gallery = document.querySelector('.gallery');

function createGalleryItem({ preview, original, description }) {
    return /* html */ `<li class="gallery__item">
    <a class="gallery__link glightbox" href="${original}">
        <img
            class="gallery__image"
            src="${preview}" 
            data-source="${original}"
            alt="${description || 'Gallery image'}"
            loading="lazy"
        />
    </a>
    </li>`;
}

function createMarkup() {
    if (!gallery) {
        console.error('Gallery element not found in the DOM.');
        return;
    }
    const markup = galleryItems.map(createGalleryItem).join('');
    gallery.insertAdjacentHTML('beforeend', markup);
}

// Error checks & Create markup
try {
    if (!Array.isArray(galleryItems) || galleryItems.length === 0) {
        throw new Error('Invalid or empty galleryItems array.');
    }
    createMarkup();
} catch (error) {
    console.error('Error creating gallery markup:', error.message);
}

// Initialize GLightbox with configuration options
// eslint-disable-next-line no-unused-vars
const lightbox = GLightbox({
    // CSS selector for the gallery links
    selector: '.glightbox',
    // Enable looping through the gallery items
    loop: true,
    // Effect to use when opening the lightbox
    openEffect: 'zoom',
});

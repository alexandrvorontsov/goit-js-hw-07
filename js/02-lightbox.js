import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('ul.gallery');
const getMarkupStringEl = getMarkupString(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', getMarkupStringEl);

function getMarkupString(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `<a class = "gallery__item" href = "${original}">
         <img class = "gallery__image" src="${preview}" alt="${description}"></a>`;
		})
		.join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
	captionsData: `alt`,
	captionDelay: 250,
});

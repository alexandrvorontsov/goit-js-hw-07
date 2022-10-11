import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
galleryContainer.innerHTML = getMarkupString(galleryItems);
galleryContainer.addEventListener('click', onGalleryContainer);

function getMarkupString(galleryItemsArray) {
	return galleryItemsArray
		.map(({ original, preview, description }) => {
			return `<div class="gallery__item">
				<a class="gallery__link" href="${original}">
					<img
						class="gallery__image"
						src="${preview}"
						data-source="${original}"
						alt="${description}"
					/>
				</a>
			</div>`;
		})
		.join('');
}

function onGalleryContainer(event) {
	if (event.target.nodeName !== 'IMG') {
		return;
	}
	event.preventDefault();
	const imageModal = basicLightbox.create(
		`<img src="${event.target.dataset.source}">`
	);
	imageModal.show();
	document.addEventListener('keyup', onModalClose, { once: true });
	function onModalClose(event) {
		if (event.code === 'Escape') {
			imageModal.close();
		}
	}
}

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');
const galleryItemsLength = galleryItems.length;

for (let i = galleryItemsLength - 1; i > -1; i--) {
  const preview = galleryItems[i]['preview'];
  const original = galleryItems[i]['original'];
  const description = galleryItems[i]['description'];
  gallery.insertAdjacentHTML(
    'afterbegin',
    '<a class="gallery__item" href="large-image.jpg"><img class="gallery__image" src="small-image.jpg" alt="Image description" /></a>'
  );
  const galleryLink = document.querySelector('.gallery__item');
  const galleryImg = document.querySelector('.gallery__image');
  galleryLink.setAttribute('onclick', 'event.preventDefault()');
  galleryLink.setAttribute('href', original);
  galleryImg.setAttribute('src', preview);
  galleryImg.setAttribute('alt', description);
}

const selected = new SimpleLightbox('.gallery .gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});

selected.addEventListener('click', selectImg);
function selectImg(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  selected.open();
}
console.log(galleryItems);

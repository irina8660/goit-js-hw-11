const refs = {
  gallery: document.querySelector('.gallery'),
};
export function markupRender(arrayPhotos) {
  refs.gallery.innerHTML = arrayPhotos
    .map(
      photo =>
        `<div class="image-container">
        <a href="${photo.largeImageURL}">
        <img src="${photo.webformatURL}" alt="${photo.tags}" />
        </a><div class="info-bar">
        <div class="info-item">
        <h3 class="item-title">Likes</h3>
        <p class="item-count">${photo.likes}</p>
        </div>
        <div class="info-item">
        <h3 class="item-title">Views</h3>
        <p class="item-count">${photo.views}</p>
        </div>
        <div class="info-item">
        <h3 class="item-title">Comments</h3>
        <p class="item-count">${photo.comments}</p>
        </div><div class="info-item">
        <h3 class="item-title">Downloads</h3>
        <p class="item-count">${photo.downloads}</p>
        </div></div></div>`
    )
    .join('');
}

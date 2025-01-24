export const createImageTemplate = image => {
    return `
    <li class="gallery-item js-item-card">
       <a class="gallery-link" href="${image.largeImageURL}">
       <img
         class="gallery-image"
         src="${image.webformatURL}"
         data-source="${image.largeImageUR}"
         alt="${image.tags}"
        />
        </a>
        <div class="image-info">
                <p class="image-info-item"><b>Likes</b>
                ${image.likes}
                </p>
                <p class="image-info-item">
                <b>Views</b>
                ${image.views}
                </p>
                <p class="image-info-item">
                <b>Comments</b>
                ${image.comments}
                </p>
                <p class="image-info-item">
                <b>Downloads</b>
                ${image.downloads}
                </p>
        </div>
    </li>
    `;
};
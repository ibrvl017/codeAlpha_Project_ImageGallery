// scripts.js
let currentImageIndex = 0;
const images = document.querySelectorAll('.thumbnail');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('current-image');

function openLightbox(index) {
    currentImageIndex = index;
    lightbox.style.display = 'flex';
    showImage(currentImageIndex);
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function showImage(index) {
    if (index >= images.length) {
        currentImageIndex = 0;
    } else if (index < 0) {
        currentImageIndex = images.length - 1;
    } else {
        currentImageIndex = index;
    }

    lightboxImage.src = images[currentImageIndex].src;
}

function changeImage(direction) {
    showImage(currentImageIndex + direction);
}

// scripts.js
let currentImageIndex = 0;

function showImage(index) {
    const images = document.querySelectorAll('.gallery-image');
    if (index >= images.length) {
        currentImageIndex = 0;
    } else if (index < 0) {
        currentImageIndex = images.length - 1;
    } else {
        currentImageIndex = index;
    }

    images.forEach((img, i) => {
        img.classList.toggle('active', i === currentImageIndex);
    });
}

function changeImage(direction) {
    showImage(currentImageIndex + direction);
}

// Initial display
showImage(currentImageIndex);

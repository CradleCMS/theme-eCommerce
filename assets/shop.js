var details = [...document.querySelectorAll('.nav')];
document.addEventListener('click', function(e) {
  if (!details.some(f => f.contains(e.target))) {
    details.forEach(f => f.removeAttribute('open'));
  } else {
    details.forEach(f => !f.contains(e.target) ? f.removeAttribute('open') : '');
  }
})

document.addEventListener('DOMContentLoaded', function() {
  const mainImage = document.getElementById('main-image');
  const thumbnails = document.querySelectorAll('.thumb');

  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function() {
      const largeImageSrc = this.dataset.large;
      const largeImageAlt = this.alt;
      mainImage.src = largeImageSrc;
      mainImage.alt = largeImageAlt;
    });
  });
});
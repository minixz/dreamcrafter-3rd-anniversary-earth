export function loadAll() {
  const imgs = document.querySelectorAll('img[data-src]');
  for (let i = 0; i < document.querySelectorAll('img[data-src]').length; i++) {
    imgs[i].setAttribute('src', imgs[i].dataset.src);
  }
}

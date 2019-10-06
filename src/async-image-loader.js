export function loadAll() {
  document.querySelectorAll('img[data-src]').forEach((element) => {
    element.setAttribute('src', element.dataset.src);
  });
}

export function start() {
  const content = document.querySelector('#content');
  const stars = document.querySelectorAll('.stars');

  window.addEventListener('mousemove', (ev) => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const xPerc = -((ev.clientY - windowHeight / 2) / (windowHeight / 2));
    const yPerc = (ev.clientX - windowWidth / 2) / (windowWidth / 2);
    content.style.transform = `rotateX(${xPerc * 7}deg) rotateY(${yPerc * 10}deg)`;

    for (let i = 0; i < stars.length; i++) {
      stars[i].style.backgroundPosition = `${yPerc * 28}px ${-xPerc * 40}px`;
    }
  });
}

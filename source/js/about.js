const aboutButton = document.querySelector('.about__button');
const text = document.querySelector('.about__additional-text');
const span = document.querySelector('.about__text').querySelector('span');

if (aboutButton && text && span) {
  aboutButton.classList.add('about__button-js');
  text.classList.add('about__additional-text-js');
  span.classList.add('about__text-mobile-js');

  aboutButton.addEventListener('click', () => {
    text.classList.toggle('about__additional-text-js');
    span.classList.toggle('about__text-mobile-js');
    if (aboutButton.textContent.toLowerCase() === 'подробнее') {
      aboutButton.textContent = 'СВЕРНУТЬ';
    } else {
      aboutButton.textContent = 'ПОДРОБНЕЕ';
    }
  });
}

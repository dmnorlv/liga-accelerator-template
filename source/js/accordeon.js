const headingContainers = document.querySelectorAll('.main-footer__heading-container');
const sectionsLists = document.querySelector('.main-footer__sections-wrapper').querySelectorAll('ul');
const contactsLists = document.querySelector('.main-footer__contacts-wrapper').querySelectorAll('ul');
const footerButtons = [];
const footerListsArrays = [];

footerListsArrays.push(sectionsLists);
footerListsArrays.push(contactsLists);

// скрыть все списки ссылок
footerListsArrays.forEach((array) => {
  array.forEach((list) => {
    list.classList.add('main-footer__list-js');
  });
});

// добавить контейнеру с копкой класс при рабочем js
// + показать кнопку + кнопке добавить слушатель
headingContainers.forEach((element, i) => {
  element.classList.add('main-footer__heading-container-js');
  footerButtons[i] = element.querySelector('button');

  if (footerButtons[i]) {
    footerButtons[i].classList.remove('main-footer__button-no-js');
  }
});

footerButtons.forEach((button, i) => {
  button.addEventListener('click', () => {
    button.classList.toggle('main-footer__button-js');
    const lists = footerListsArrays[i];
    lists.forEach((list) => {
      list.classList.toggle('main-footer__list-js');
    });
    headingContainers[i].classList.toggle('main-footer__heading-container-js');
  });
});

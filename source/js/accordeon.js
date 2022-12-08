const initAccordeon = () => {
  if (document.querySelectorAll('.main-footer__heading-container') && document.querySelector('.main-footer__sections-wrapper') &&
    document.querySelector('.main-footer__contacts-wrapper')) {
    const headingContainers = document.querySelectorAll('.main-footer__heading-container');
    const sectionsLists = document.querySelector('.main-footer__sections-wrapper').querySelectorAll('ul');
    const contactsLists = document.querySelector('.main-footer__contacts-wrapper').querySelectorAll('ul');
    const footerButtons = [];
    const footerListsArrays = [];


    footerListsArrays.push(sectionsLists);
    footerListsArrays.push(contactsLists);

    footerListsArrays.forEach((array) => {
      array.forEach((list) => {
        list.classList.add('main-footer__list-js');
      });
    });

    headingContainers.forEach((element, i) => {
      element.classList.add('main-footer__heading-container-js');
      footerButtons[i] = element.querySelector('button');

      if (footerButtons[i]) {
        footerButtons[i].classList.remove('main-footer__button-no-js');
      }
    });

    if (footerButtons) {
      footerButtons.forEach((button, i) => {
        button.addEventListener('click', (evt) => {
          button.classList.toggle('main-footer__button-js');
          const lists = footerListsArrays[i];
          lists.forEach((list) => {
            list.classList.toggle('main-footer__list-js');
          });
          headingContainers[i].classList.toggle('main-footer__heading-container-js');

          if (evt.target.classList.contains('main-footer__button-sections')) {
            footerButtons[1].classList.remove('main-footer__button-js');
            contactsLists.forEach((list) => {
              list.classList.add('main-footer__list-js');
            });
            headingContainers[1].classList.add('main-footer__heading-container-js');
          } else {
            footerButtons[0].classList.remove('main-footer__button-js');
            sectionsLists.forEach((list) => {
              list.classList.add('main-footer__list-js');
            });
            headingContainers[0].classList.add('main-footer__heading-container-js');
          }
        });
      });
    }
  }
};

export {initAccordeon};


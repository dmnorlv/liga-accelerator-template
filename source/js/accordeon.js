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
      footerButtons[i] = element.querySelector('div');

      if (footerButtons[i]) {
        footerButtons[i].classList.remove('main-footer__button-no-js');
      }
    });

    if (footerButtons) {
      headingContainers.forEach((button, i) => {
        button.addEventListener('click', (evt) => {
          evt.preventDefault();
          if (window.innerWidth < 768) {
            footerButtons[i].classList.toggle('main-footer__button-js');
            const lists = footerListsArrays[i];
            lists.forEach((list) => {
              list.classList.toggle('main-footer__list-js');
            });

            if (evt.target.closest('.main-footer__button-section')) {
              footerButtons[1].classList.remove('main-footer__button-js');
              contactsLists.forEach((list) => {
                list.classList.add('main-footer__list-js');
              });
            } else {
              footerButtons[0].classList.remove('main-footer__button-js');
              sectionsLists.forEach((list) => {
                list.classList.add('main-footer__list-js');
              });
            }
          }
        });
      });
    }
  }
};

export {initAccordeon, };


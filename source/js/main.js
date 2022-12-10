import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initAccordeon} from './accordeon';
import {fixHeader} from './fix-header';
import {initAbout} from './about';
import {initMask} from './form';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  fixHeader();
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    initAbout();
    console.log(window.innerWidth);
    if (window.innerWidth < 768) {
      if (document.querySelectorAll('.main-footer__heading-container')) {
        const buttons = document.querySelectorAll('.main-footer__heading-container');
        buttons.forEach((element) => {
          element.setAttribute('tabindex', '0');
        });
      }
      initAccordeon();
    } else {
      const buttons = document.querySelectorAll('.main-footer__heading-container');
      buttons.forEach((element) => {
        element.setAttribute('disabled', 'disabled');
      });
    }
    initMask();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)

const fixHeader = () => {
  const header = document.querySelector('.main-header');
  const main = document.querySelector('main');

  if (header && main) {
    window.addEventListener('scroll', () => {
      let scrollDistance = window.scrollY;
      let headerHeight = header.offsetHeight;

      if (scrollDistance > 0 && document.documentElement.clientWidth > 1023) {
        header.classList.add('main-header--fixed');
        main.style.marginTop = `${headerHeight}px`;
      } else {
        header.classList.remove('main-header--fixed');
        main.style.marginTop = 0;
      }
    });
  }
};

export {fixHeader};


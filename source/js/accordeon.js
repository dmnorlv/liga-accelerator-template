const headingContainers = document.querySelectorAll('.main-footer__heading-container');
const buttonsFooters = [];

headingContainers.forEach((element, i) => {
  buttonsFooters[i] = element.querySelector('button');
}
);

console.log(buttonsFooters);

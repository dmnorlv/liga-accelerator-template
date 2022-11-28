import IMask from 'imask';

const initMask = () => {
  const telInputs = document.querySelectorAll('input[data-user-tel]');
  const telMasks = [];

  const maskOptions = {
    mask: '+7(000)000-00-00',
  };

  if (telInputs) {
    for (let i = 0; i < telInputs.length; i++) {
      telMasks[i] = new IMask(telInputs[i], maskOptions);
    }
  }
};

export {initMask};

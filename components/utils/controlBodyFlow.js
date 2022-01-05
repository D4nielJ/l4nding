const controlBodyFlow = (attr) => {
  if (attr) {
    document.body.classList.add('overflow-y-hidden');
  } else {
    document.body.classList.remove('overflow-y-hidden');
  }
};

export default controlBodyFlow;

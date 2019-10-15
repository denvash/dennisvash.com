const scrollIntoView = location => {
  if (location?.hash) {
    const id = location.hash.substring(1); // location.hash without the '#'
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView();
      }
    }, 0);
  }
};

export default scrollIntoView;

export const throttle = (func, wait = 100) => {
  let timer = null;
  return function(...args) {
    if (timer === null) {
      timer = setTimeout(() => {
        func.apply(this, args);
        timer = null;
      }, wait);
    }
  };
};

export { parseQueryNodes, parseSingleNode } from './parseQuery';
export { default as sr } from './sr';

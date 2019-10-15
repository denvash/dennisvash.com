export const setLSItem = (str, object) => {
  if (typeof window !== `undefined`) {
    return window.localStorage.setItem(str, object);
  }
  return '0';
};

export const getLSItem = str => {
  if (typeof window !== `undefined`) {
    return window.localStorage.getItem(str);
  }
  return '0';
};

export const getNumberLSItem = str => {
  const storageItem = getLSItem(str);
  return Number(storageItem);
};

const LOCAL_STORAGE_KEYS = {
  USER_THEME: 'theme',
};

export default LOCAL_STORAGE_KEYS;

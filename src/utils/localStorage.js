export const setLSItem = (str, object) => window.localStorage.setItem(str, object);

export const getLSItem = str => window.localStorage.getItem(str);

export const getNumberLSItem = str => {
  const storageItem = getLSItem(str);
  return Number(storageItem);
};

const LOCAL_STORAGE_KEYS = {
  USER_THEME: 'theme',
};

export default LOCAL_STORAGE_KEYS;

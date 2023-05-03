const LOCAL_STORAGE_KEY = "items";
export const readItems = () => {
  const getItems = localStorage.getItem(LOCAL_STORAGE_KEY);
  return getItems;
};

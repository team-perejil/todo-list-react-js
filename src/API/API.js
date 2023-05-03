const LOCAL_STORAGE_KEY = "items";
export const readItems = () => {
  const getItems = localStorage.getItem(LOCAL_STORAGE_KEY);
  return getItems;
};

// Acabar el Read y vamos viendo si eso (Create como ambición) acordarnos de parsear

import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "items";

export const readItems = () => {
  const getItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  return Array.isArray(getItems) ? getItems : [];
};

// Acabar el Read y vamos viendo si eso (Create como ambición) acordarnos de parsear

export const addItems = (item) => {
  const id = uuidv4();
  const newItem = { id, ...item };
  const items = readItems();
  const newItems = [...items, newItem];
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newItems));
  return newItems;
};

export const deteleItems = (id) => {
  const items = readItems();
  const restdeleteItem = items.filter((item) => item.id !== id);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(restdeleteItem));
  return restdeleteItem;
};

export const updateItems = (updatingItem) => {
  const storedItems = readItems();
  const updatedItems = storedItems.map((item) => {
    console.log("dbg5", item.id);
    console.log("dbg5", updatingItem.id);
    return item.id === updatingItem.id ? updatingItem : item;
  });
  console.log("dbg4", updatedItems);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedItems));
  return updatedItems;
};

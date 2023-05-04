import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "items";
const DEFAULT_ITEM = { id: "default_id", title: "Default item" };

export const readItems = () => {
  const getItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  return Array.isArray(getItems) ? getItems : [];
};

// Acabar el Read y vamos viendo si eso (Create como ambición) acordarnos de parsear

export const addItems = (item) => {
  const id = uuidv4();
  const newItem = { id, ...item };
  const items = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [
    DEFAULT_ITEM,
  ];
  const newItems = items.length > 0 ? [...items, newItem] : [newItem];
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newItems));
  return newItems;
};
